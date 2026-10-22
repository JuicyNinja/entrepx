-- Territories, purchase commitments, first right of refusal and owner options.
--
-- Rules (settled Oct 21, 2026):
-- * A territory is exclusive per service family. It is drawn as a DMA, a metroplex,
--   linked communities or a set of ZIP codes (the "units").
-- * Prospects never buy options. After discovery (and 14 days after their disclosure
--   document) they make a PURCHASE COMMITMENT: a non-refundable deposit, credited to
--   the startup fee, with no term.
-- * If the territory touches a territory owned in the same family, the commitment
--   opens a FIRST-RIGHT OFFER to the longest-standing neighboring owner: 14 days,
--   plus one paid 14-day extension. Owner buys -> territory goes to the owner and the
--   prospect's deposit moves with them to another territory. Owner passes or the
--   window lapses -> the commitment executes immediately.
-- * No neighboring owner -> the commitment executes on payment.
-- * OPTIONS are for existing owners only: 6-month terms, one renewal, a hard stop
--   12 months after the first term starts, a 60-day wait before re-optioning the same
--   territory, and never while a first-right offer is open on it.
-- * No proposal goes out on a territory while a first-right offer is open on it.

create type public.service_family as enum (
  'exterior_care', 'mobile_auto', 'lawn_and_yard', 'pest_and_wildlife', 'restoration',
  'painting', 'flooring_and_coatings', 'countertops', 'holiday_lighting', 'other'
);
create type public.territory_kind as enum ('dma', 'metroplex', 'linked_communities', 'zip_set');
create type public.territory_status as enum ('available', 'committed', 'first_right_open', 'optioned', 'owned');
create type public.commitment_status as enum ('awaiting_first_right', 'executed', 'transferred', 'forfeited');
create type public.first_right_status as enum ('open', 'claimed', 'passed', 'lapsed');
create type public.option_status as enum ('active', 'exercised', 'released', 'hard_stopped');

create table public.territories (
  id             uuid primary key default gen_random_uuid(),
  name           text not null,
  family         public.service_family not null,
  kind           public.territory_kind not null,
  units          text[] not null default '{}',        -- communities or ZIP codes
  dma_code       text,                                -- licensed DMA reference when kind = 'dma'
  boundary       jsonb,                               -- GeoJSON polygon for the maps
  status         public.territory_status not null default 'available',
  owner_id       uuid references public.prospects (id) on delete set null,  -- the member who owns it
  owned_since    timestamptz,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  constraint territories_owned_has_owner check (status <> 'owned' or (owner_id is not null and owned_since is not null)),
  constraint territories_name_family_key unique (name, family)
);
create index territories_owner_idx on public.territories (owner_id) where owner_id is not null;
create index territories_family_status_idx on public.territories (family, status);
create trigger territories_touch before update on public.territories
  for each row execute function private.touch_updated_at();

-- Undirected adjacency, stored once with a < b.
create table public.territory_adjacency (
  a uuid not null references public.territories (id) on delete cascade,
  b uuid not null references public.territories (id) on delete cascade,
  primary key (a, b),
  constraint territory_adjacency_order check (a < b)
);
create index territory_adjacency_b_idx on public.territory_adjacency (b);

create table public.territory_commitments (
  id             uuid primary key default gen_random_uuid(),
  prospect_id    uuid not null references public.prospects (id) on delete cascade,
  territory_id   uuid not null references public.territories (id) on delete restrict,
  deposit_cents  bigint not null check (deposit_cents > 0),
  paid_at        timestamptz not null default now(),
  stripe_payment_intent text unique,
  status         public.commitment_status not null default 'awaiting_first_right',
  executed_at    timestamptz,
  transferred_to uuid references public.territory_commitments (id) on delete set null,  -- if an owner claimed it
  created_at     timestamptz not null default now()
);
create index territory_commitments_prospect_idx on public.territory_commitments (prospect_id);
create index territory_commitments_territory_idx on public.territory_commitments (territory_id);
create index territory_commitments_transferred_idx on public.territory_commitments (transferred_to) where transferred_to is not null;
-- One live commitment per territory.
create unique index territory_commitments_live_key on public.territory_commitments (territory_id)
  where status in ('awaiting_first_right', 'executed');

create table public.first_right_offers (
  id                  uuid primary key default gen_random_uuid(),
  territory_id        uuid not null references public.territories (id) on delete cascade,
  commitment_id       uuid not null references public.territory_commitments (id) on delete cascade,
  owner_id            uuid not null references public.prospects (id) on delete cascade,  -- neighboring owner deciding
  opened_at           timestamptz not null default now(),
  due_at              timestamptz not null,
  extension_paid_at   timestamptz,          -- one paid 14-day extension
  extension_fee_cents bigint check (extension_fee_cents >= 0),
  status              public.first_right_status not null default 'open',
  answered_at         timestamptz,
  created_at          timestamptz not null default now()
);
create index first_right_offers_territory_idx on public.first_right_offers (territory_id);
create index first_right_offers_commitment_idx on public.first_right_offers (commitment_id);
create index first_right_offers_owner_idx on public.first_right_offers (owner_id, status);
create index first_right_offers_due_idx on public.first_right_offers (due_at) where status = 'open';
create unique index first_right_offers_open_key on public.first_right_offers (territory_id) where status = 'open';

create table public.owner_options (
  id             uuid primary key default gen_random_uuid(),
  territory_id   uuid not null references public.territories (id) on delete cascade,
  owner_id       uuid not null references public.prospects (id) on delete cascade,
  term_number    smallint not null default 1 check (term_number in (1, 2)),
  starts_at      timestamptz not null default now(),
  ends_at        timestamptz not null,
  hard_stop_at   timestamptz not null,
  fee_cents      bigint not null check (fee_cents >= 0),
  status         public.option_status not null default 'active',
  closed_at      timestamptz,
  created_at     timestamptz not null default now(),
  constraint owner_options_term_within_stop check (ends_at <= hard_stop_at)
);
create index owner_options_territory_idx on public.owner_options (territory_id, status);
create index owner_options_owner_idx on public.owner_options (owner_id);
create unique index owner_options_active_key on public.owner_options (territory_id) where status = 'active';

-- ---------- Helpers ----------
-- Longest-standing owner in the same family whose territory touches p_territory.
create or replace function private.first_right_holder(p_territory uuid) returns uuid
language sql stable security definer set search_path = '' as $$
  select n.owner_id
    from public.territories t
    join public.territory_adjacency adj on adj.a = t.id or adj.b = t.id
    join public.territories n on n.id = case when adj.a = t.id then adj.b else adj.a end
   where t.id = p_territory
     and n.family = t.family
     and n.status = 'owned'
   order by n.owned_since asc
   limit 1
$$;
revoke execute on function private.first_right_holder(uuid) from public, anon;
grant execute on function private.first_right_holder(uuid) to service_role;

-- ---------- Commitment: validate, then open first right or execute ----------
create or replace function private.on_commitment_insert() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  t public.territories;
  holder uuid;
  opens timestamptz;
begin
  select * into t from public.territories where id = new.territory_id for update;
  if t.status <> 'available' then
    raise exception 'Territory % is not available (%)', t.name, t.status;
  end if;

  opens := private.payments_open_at(new.prospect_id);
  if opens is null then
    raise exception 'No disclosure document delivered to this prospect yet';
  end if;
  if new.paid_at < opens then
    raise exception 'Payments open % (14 days after the disclosure document)', opens;
  end if;

  holder := private.first_right_holder(t.id);
  if holder is null then
    new.status := 'executed';
    new.executed_at := now();
    update public.territories set status = 'committed' where id = t.id;
  else
    new.status := 'awaiting_first_right';
    update public.territories set status = 'first_right_open' where id = t.id;
  end if;
  return new;
end $$;
create trigger territory_commitments_before_insert before insert on public.territory_commitments
  for each row execute function private.on_commitment_insert();

create or replace function private.after_commitment_insert() returns trigger
language plpgsql security definer set search_path = '' as $$
declare holder uuid;
begin
  if new.status = 'awaiting_first_right' then
    holder := private.first_right_holder(new.territory_id);
    insert into public.first_right_offers (territory_id, commitment_id, owner_id, opened_at, due_at)
    values (new.territory_id, new.id, holder, now(), now() + interval '14 days');
  end if;
  return new;
end $$;
create trigger territory_commitments_after_insert after insert on public.territory_commitments
  for each row execute function private.after_commitment_insert();

-- ---------- First right: answer, extend, lapse ----------
-- Called by the deciding owner (or owner/admin staff on their behalf).
create or replace function public.answer_first_right(p_offer uuid, p_buy boolean)
returns public.first_right_status language plpgsql security definer set search_path = '' as $$
declare
  o public.first_right_offers;
  r public.portal_role := private.staff_role();
begin
  select * into o from public.first_right_offers where id = p_offer for update;
  if not found or o.status <> 'open' then
    raise exception 'This first-right offer is not open';
  end if;
  if o.owner_id is distinct from private.my_prospect_id() and r is distinct from 'owner' and r is distinct from 'admin' then
    raise exception 'Only the neighboring owner can answer this offer';
  end if;
  if now() > o.due_at then
    raise exception 'The first-right window has closed';
  end if;

  if p_buy then
    update public.first_right_offers set status = 'claimed', answered_at = now() where id = o.id;
    -- The prospect's deposit moves with them; staff link it to their next territory (transferred_to).
    update public.territory_commitments set status = 'transferred' where id = o.commitment_id;
    update public.territories
       set status = 'owned', owner_id = o.owner_id, owned_since = now()
     where id = o.territory_id;
    return 'claimed';
  else
    update public.first_right_offers set status = 'passed', answered_at = now() where id = o.id;
    update public.territory_commitments set status = 'executed', executed_at = now() where id = o.commitment_id;
    update public.territories set status = 'committed' where id = o.territory_id;
    return 'passed';
  end if;
end $$;

-- One paid extension, recorded after the payment succeeds (server-side, service role or owner/admin).
create or replace function public.extend_first_right(p_offer uuid, p_fee_cents bigint)
returns timestamptz language plpgsql security definer set search_path = '' as $$
declare o public.first_right_offers;
begin
  if (select auth.uid()) is not null and private.staff_role() is distinct from 'owner'
     and private.staff_role() is distinct from 'admin' then
    raise exception 'Extensions are recorded by the payment system';
  end if;
  select * into o from public.first_right_offers where id = p_offer for update;
  if not found or o.status <> 'open' then
    raise exception 'This first-right offer is not open';
  end if;
  if o.extension_paid_at is not null then
    raise exception 'The one 14-day extension has already been used';
  end if;
  update public.first_right_offers
     set extension_paid_at = now(), extension_fee_cents = p_fee_cents, due_at = o.due_at + interval '14 days'
   where id = o.id;
  return o.due_at + interval '14 days';
end $$;

-- Run on a schedule (pg_cron, every 15 minutes): unanswered windows lapse and the commitment executes.
create or replace function private.lapse_first_rights() returns integer
language plpgsql security definer set search_path = '' as $$
declare o record; n integer := 0;
begin
  for o in select * from public.first_right_offers where status = 'open' and due_at <= now() for update skip locked loop
    update public.first_right_offers set status = 'lapsed', answered_at = now() where id = o.id;
    update public.territory_commitments set status = 'executed', executed_at = now() where id = o.commitment_id;
    update public.territories set status = 'committed' where id = o.territory_id;
    n := n + 1;
  end loop;
  return n;
end $$;
revoke execute on function private.lapse_first_rights() from public, anon, authenticated;
grant execute on function private.lapse_first_rights() to service_role;

revoke execute on function public.answer_first_right(uuid, boolean) from public, anon;
grant execute on function public.answer_first_right(uuid, boolean) to authenticated;
revoke execute on function public.extend_first_right(uuid, bigint) from public, anon;
grant execute on function public.extend_first_right(uuid, bigint) to authenticated, service_role;

-- ---------- Owner options guard ----------
create or replace function private.guard_owner_option() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  first_term public.owner_options;
  last_stop timestamptz;
begin
  if not exists (select 1 from public.territories t where t.id = new.territory_id and t.status in ('available', 'optioned')) then
    raise exception 'This territory is not open to options';
  end if;
  if exists (select 1 from public.first_right_offers f where f.territory_id = new.territory_id and f.status = 'open') then
    raise exception 'No options while a first-right offer is open: buy it or pass';
  end if;
  if not exists (select 1 from public.prospects p where p.id = new.owner_id and p.stage = 'member') then
    raise exception 'Options are for existing owners only';
  end if;

  if new.term_number = 1 then
    select max(closed_at) into last_stop from public.owner_options
     where territory_id = new.territory_id and owner_id = new.owner_id and status in ('hard_stopped', 'released');
    if last_stop is not null and new.starts_at < last_stop + interval '60 days' then
      raise exception 'Wait 60 days after an option ends before optioning this territory again';
    end if;
    new.ends_at := new.starts_at + interval '6 months';
    new.hard_stop_at := new.starts_at + interval '12 months';
  else
    select * into first_term from public.owner_options
     where territory_id = new.territory_id and owner_id = new.owner_id and term_number = 1
     order by starts_at desc limit 1;
    if first_term.id is null then
      raise exception 'Renewal needs a first term';
    end if;
    new.hard_stop_at := first_term.hard_stop_at;
    new.ends_at := least(new.starts_at + interval '6 months', first_term.hard_stop_at);
  end if;
  return new;
end $$;
create trigger owner_options_guard before insert on public.owner_options
  for each row execute function private.guard_owner_option();

create or replace function private.after_owner_option() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.status = 'active' then
    update public.territories set status = 'optioned' where id = new.territory_id and status = 'available';
  elsif new.status in ('released', 'hard_stopped')
        and not exists (select 1 from public.owner_options o where o.territory_id = new.territory_id and o.status = 'active') then
    update public.territories set status = 'available' where id = new.territory_id and status = 'optioned';
  end if;
  return new;
end $$;
create trigger owner_options_after after insert or update of status on public.owner_options
  for each row execute function private.after_owner_option();

-- ---------- RLS ----------
alter table public.territories           enable row level security;
alter table public.territory_adjacency   enable row level security;
alter table public.territory_commitments enable row level security;
alter table public.first_right_offers    enable row level security;
alter table public.owner_options         enable row level security;

-- Maps: any signed-in user (staff, prospects, members) can see territories and adjacency.
create policy territories_read on public.territories for select to authenticated using (true);
create policy territories_manage on public.territories for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) in ('owner', 'admin'));
create policy adjacency_read on public.territory_adjacency for select to authenticated using (true);
create policy adjacency_manage on public.territory_adjacency for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) in ('owner', 'admin'));

-- Commitments are created by the payment webhook (service role). Read: staff who see the prospect, and the prospect.
create policy commitments_read on public.territory_commitments for select to authenticated
  using (
    prospect_id = (select private.my_prospect_id())
    or ((select private.staff_role()) is not null and exists (select 1 from public.prospects p where p.id = prospect_id))
  );
create policy commitments_staff_update on public.territory_commitments for update to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) in ('owner', 'admin'));

create policy first_right_read on public.first_right_offers for select to authenticated
  using (owner_id = (select private.my_prospect_id()) or (select private.staff_role()) is not null);

create policy options_read on public.owner_options for select to authenticated
  using (owner_id = (select private.my_prospect_id()) or (select private.staff_role()) is not null);
create policy options_staff_write on public.owner_options for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) in ('owner', 'admin'));
