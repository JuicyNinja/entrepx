-- Pricing ranges, proposals, approvals, agreements, capacity plans and cancellations.

create type public.opportunity_class as enum ('starter', 'class_1', 'class_2', 'class_3', 'class_4');
create type public.program_tier as enum ('basic', 'growth', 'fast_track');
create type public.proposal_status as enum ('draft', 'pending_approval', 'sent', 'accepted', 'declined', 'expired');
create type public.approval_kind as enum (
  'pricing_exception', 'payment_plan', 'contract_countersign', 'playbook_publish',
  'session_summary', 'coverage_plan', 'refund_or_cancel_exception'
);
create type public.approval_status as enum ('pending', 'approved', 'declined');
create type public.agreement_status as enum ('sent', 'signed', 'active', 'cancel_pending', 'ended');

-- ---------- Pricing ranges by opportunity class (owner sets these in Settings) ----------
create table public.pricing_ranges (
  class               public.opportunity_class primary key,
  startup_min_cents   bigint not null check (startup_min_cents > 0),
  startup_max_cents   bigint not null,
  per_unit_cents      bigint not null check (per_unit_cents >= 0),
  monthly_min_cents   bigint not null check (monthly_min_cents > 0),
  monthly_max_cents   bigint not null,
  base_basic_cents    bigint not null,
  base_growth_cents   bigint not null,
  base_fast_track_cents bigint not null,
  commitment_deposit_cents bigint not null check (commitment_deposit_cents > 0),
  option_fee_cents    bigint not null check (option_fee_cents >= 0),          -- owner option, per 6-month term
  extension_fee_cents bigint not null check (extension_fee_cents >= 0),       -- first-right extension
  updated_at          timestamptz not null default now(),
  constraint pricing_ranges_startup check (startup_max_cents >= startup_min_cents),
  constraint pricing_ranges_monthly check (monthly_max_cents >= monthly_min_cents)
);

-- ---------- Proposals (built in the Opportunity Generator, step 3) ----------
create table public.proposals (
  id                 uuid primary key default gen_random_uuid(),
  prospect_id        uuid not null references public.prospects (id) on delete cascade,
  territory_id       uuid references public.territories (id) on delete set null,
  opportunity_name   text not null,
  class              public.opportunity_class not null,
  units              text[] not null default '{}',
  program            public.program_tier not null default 'growth',
  startup_fee_cents  bigint not null check (startup_fee_cents > 0),
  adjustment_cents   bigint not null default 0,           -- negative = discount
  monthly_cents      bigint not null check (monthly_cents > 0),
  monthly_ramp       boolean not null default false,      -- half to start, full by month 7
  two_payments       boolean not null default false,
  status             public.proposal_status not null default 'draft',
  valid_until        date,
  sent_at            timestamptz,
  created_by         uuid references public.staff (user_id) on delete set null,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index proposals_prospect_idx on public.proposals (prospect_id, created_at desc);
create index proposals_territory_idx on public.proposals (territory_id) where territory_id is not null;
create index proposals_created_by_idx on public.proposals (created_by);
create index proposals_status_idx on public.proposals (status);
create trigger proposals_touch before update on public.proposals
  for each row execute function private.touch_updated_at();

-- ---------- Approvals inbox ----------
create table public.approvals (
  id            uuid primary key default gen_random_uuid(),
  kind          public.approval_kind not null,
  prospect_id   uuid references public.prospects (id) on delete cascade,
  proposal_id   uuid references public.proposals (id) on delete cascade,
  title         text not null,
  detail        text,
  payload       jsonb not null default '{}',
  requested_by  uuid references auth.users (id) on delete set null,
  status        public.approval_status not null default 'pending',
  decided_by    uuid references public.staff (user_id) on delete set null,
  decided_at    timestamptz,
  created_at    timestamptz not null default now()
);
create index approvals_pending_idx on public.approvals (created_at) where status = 'pending';
create index approvals_prospect_idx on public.approvals (prospect_id);
create index approvals_proposal_idx on public.approvals (proposal_id);
create index approvals_requested_by_idx on public.approvals (requested_by);
create index approvals_decided_by_idx on public.approvals (decided_by);

-- ---------- Member agreements ----------
create table public.agreements (
  id                 uuid primary key default gen_random_uuid(),
  prospect_id        uuid not null references public.prospects (id) on delete cascade,
  proposal_id        uuid references public.proposals (id) on delete set null,
  parent_id          uuid references public.agreements (id) on delete cascade,   -- addendum (added territory)
  template_version   text not null,
  status             public.agreement_status not null default 'sent',
  signed_at          timestamptz,
  countersigned_at   timestamptz,
  starts_on          date,
  renews_on          date,
  cancel_notice_by   date,
  esign_envelope_id  text unique,
  created_at         timestamptz not null default now()
);
create index agreements_prospect_idx on public.agreements (prospect_id);
create index agreements_proposal_idx on public.agreements (proposal_id);
create index agreements_parent_idx on public.agreements (parent_id) where parent_id is not null;
create index agreements_renews_idx on public.agreements (renews_on) where status = 'active';

-- ---------- Owner adding a territory: coverage plan ----------
create table public.capacity_plans (
  id            uuid primary key default gen_random_uuid(),
  owner_id      uuid not null references public.prospects (id) on delete cascade,
  territory_id  uuid not null references public.territories (id) on delete cascade,
  plan          text not null,
  crew_in_90_days smallint check (crew_in_90_days between 1 and 500),
  second_vehicle text,
  status        public.approval_status not null default 'pending',
  reviewed_by   uuid references public.staff (user_id) on delete set null,
  reviewed_at   timestamptz,
  created_at    timestamptz not null default now()
);
create index capacity_plans_owner_idx on public.capacity_plans (owner_id);
create index capacity_plans_territory_idx on public.capacity_plans (territory_id);
create index capacity_plans_reviewed_by_idx on public.capacity_plans (reviewed_by);

-- ---------- Cancellations ----------
create table public.cancellations (
  id              uuid primary key default gen_random_uuid(),
  agreement_id    uuid not null references public.agreements (id) on delete cascade,
  reason          text not null,
  second_reason   text,
  save_offered    text[] not null default '{}',
  save_accepted   text,
  requested_at    timestamptz not null default now(),
  effective_on    date not null,
  undo_by         date not null,
  undone_at       timestamptz,
  created_at      timestamptz not null default now(),
  constraint cancellations_undo_before_effective check (undo_by <= effective_on)
);
create index cancellations_agreement_idx on public.cancellations (agreement_id);

-- ---------- Proposal guard: pricing range, approvals, open first right ----------
create or replace function private.guard_proposal() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  rng public.pricing_ranges;
  total bigint;
  needs_approval boolean;
begin
  if new.status not in ('pending_approval', 'sent') or new.status is not distinct from old.status then
    return new;
  end if;

  if new.territory_id is not null and exists (
       select 1 from public.first_right_offers f where f.territory_id = new.territory_id and f.status = 'open') then
    raise exception 'A first-right offer is open on this territory. The proposal waits for the owner''s answer.';
  end if;

  select * into rng from public.pricing_ranges where class = new.class;
  if not found then
    raise exception 'No pricing range set for %', new.class;
  end if;
  total := new.startup_fee_cents + new.adjustment_cents;
  needs_approval :=
       total < rng.startup_min_cents or total > rng.startup_max_cents
    or new.monthly_cents < rng.monthly_min_cents or new.monthly_cents > rng.monthly_max_cents
    or abs(new.adjustment_cents) * 10 > new.startup_fee_cents
    or new.two_payments;

  if new.status = 'sent' and needs_approval and not exists (
       select 1 from public.approvals a
        where a.proposal_id = new.id and a.status = 'approved'
          and a.kind in ('pricing_exception', 'payment_plan')) then
    raise exception 'Outside the % range, more than 10%% off, or a split payment: send it to Approvals first', new.class;
  end if;

  if new.status = 'sent' then
    new.sent_at := coalesce(new.sent_at, now());
  end if;
  return new;
end $$;
create trigger proposals_guard before insert or update of status on public.proposals
  for each row execute function private.guard_proposal();

-- ---------- RLS ----------
alter table public.pricing_ranges enable row level security;
alter table public.proposals      enable row level security;
alter table public.approvals      enable row level security;
alter table public.agreements     enable row level security;
alter table public.capacity_plans enable row level security;
alter table public.cancellations  enable row level security;

create policy pricing_read on public.pricing_ranges for select to authenticated
  using ((select private.staff_role()) is not null);
create policy pricing_owner_write on public.pricing_ranges for all to authenticated
  using ((select private.staff_role()) = 'owner')
  with check ((select private.staff_role()) = 'owner');

-- Proposals: owner/admin all; sales rep for their prospects; the prospect sees sent/accepted ones.
create policy proposals_read on public.proposals for select to authenticated
  using (
    ((select private.staff_role()) in ('owner', 'admin', 'sales_rep')
      and exists (select 1 from public.prospects p where p.id = prospect_id))
    or (prospect_id = (select private.my_prospect_id()) and status in ('sent', 'accepted'))
  );
create policy proposals_write on public.proposals for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin', 'sales_rep')
         and exists (select 1 from public.prospects p where p.id = prospect_id))
  with check ((select private.staff_role()) in ('owner', 'admin', 'sales_rep')
         and exists (select 1 from public.prospects p where p.id = prospect_id));

-- Approvals: any staff can request; owner decides; admin can decide countersign, playbook and summary.
create policy approvals_read on public.approvals for select to authenticated
  using ((select private.staff_role()) in ('owner', 'admin') or requested_by = (select auth.uid()));
create policy approvals_request on public.approvals for insert to authenticated
  with check ((select private.staff_role()) is not null and requested_by = (select auth.uid()) and status = 'pending');
create policy approvals_decide on public.approvals for update to authenticated
  using ((select private.staff_role()) = 'owner'
         or ((select private.staff_role()) = 'admin'
             and kind in ('contract_countersign', 'playbook_publish', 'session_summary')))
  with check (decided_by = (select auth.uid()));

create policy agreements_read on public.agreements for select to authenticated
  using (
    prospect_id = (select private.my_prospect_id())
    or ((select private.staff_role()) is not null and exists (select 1 from public.prospects p where p.id = prospect_id))
  );
create policy agreements_staff_write on public.agreements for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) in ('owner', 'admin'));

create policy capacity_read on public.capacity_plans for select to authenticated
  using (owner_id = (select private.my_prospect_id()) or (select private.staff_role()) in ('owner', 'admin', 'coach'));
create policy capacity_owner_submit on public.capacity_plans for insert to authenticated
  with check (owner_id = (select private.my_prospect_id()) and status = 'pending');
create policy capacity_review on public.capacity_plans for update to authenticated
  using ((select private.staff_role()) = 'owner')
  with check (reviewed_by = (select auth.uid()));

create policy cancellations_read on public.cancellations for select to authenticated
  using (
    exists (select 1 from public.agreements a
             where a.id = agreement_id
               and (a.prospect_id = (select private.my_prospect_id()) or (select private.staff_role()) is not null))
  );
create policy cancellations_member_request on public.cancellations for insert to authenticated
  with check (exists (select 1 from public.agreements a
                       where a.id = agreement_id and a.prospect_id = (select private.my_prospect_id())));
