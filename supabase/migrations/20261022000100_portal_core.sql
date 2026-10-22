-- EntrepX Command: core people, survey, disclosure, activity and messaging.
-- Shared by the admin portal and (later) the member CSuite.
-- Anonymous visitors never write tables directly: the public survey posts to a
-- server route / Edge Function that uses the service role.

create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated, service_role;

-- ---------- Enums ----------
create type public.readiness_tier as enum ('foundation', 'contender', 'empire_ready');

-- 'committed' = member agreement signed and startup fee paid.
-- A purchase-commitment deposit on a territory is tracked in territory_commitments, not as a stage.
create type public.prospect_stage as enum (
  'survey_complete', 'contacted', 'discovery_booked', 'discovery_complete',
  'opportunity_presented', 'proposal_sent', 'committed',
  'assessment_scheduled', 'assessment_complete', 'playbook_delivered',
  'member', 'nurture', 'closed_lost', 'cancelled'
);
create type public.prospect_segment as enum ('exploring', 'franchise_shopper', 'ready_to_decide', 'existing_owner');
create type public.portal_role as enum ('owner', 'admin', 'sales_rep', 'bdr', 'coach');
create type public.credit_kind as enum ('session_booked', 'session_held', 'commitment', 'committed', 'renewal');

-- ---------- Staff (portal users) ----------
create table public.staff (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  full_name   text not null,
  email       text not null,
  role        public.portal_role not null default 'bdr',
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ---------- Prospects / members (one row per person) ----------
create table public.prospects (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid unique references auth.users (id) on delete set null,  -- their site / CSuite login
  first_name    text not null,
  last_name     text,
  email         text not null,
  phone         text,
  zip           text,
  business_name text,
  segment       public.prospect_segment,
  stage         public.prospect_stage not null default 'survey_complete',
  bdr_id        uuid references public.staff (user_id) on delete set null,   -- books the discovery session
  sales_rep_id  uuid references public.staff (user_id) on delete set null,   -- closes
  coach_id      uuid references public.staff (user_id) on delete set null,   -- coaches after commit
  latest_score  smallint check (latest_score between 0 and 100),
  latest_tier   public.readiness_tier,
  sms_consent_at timestamptz,                                               -- TCPA: explicit opt-in only
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  member_since  timestamptz,                                                 -- set when they first become a member
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create unique index prospects_email_key on public.prospects (lower(email));
create index prospects_bdr_stage_idx on public.prospects (bdr_id, stage);
create index prospects_rep_stage_idx on public.prospects (sales_rep_id, stage);
create index prospects_coach_idx on public.prospects (coach_id) where coach_id is not null;
create index prospects_stage_created_idx on public.prospects (stage, created_at desc);

-- ---------- Survey submissions (free 15-question readiness survey) ----------
create table public.survey_submissions (
  id               uuid primary key default gen_random_uuid(),
  prospect_id      uuid references public.prospects (id) on delete cascade,  -- null until contact info is given
  survey_version   smallint not null default 1,
  answers          jsonb not null,
  dimension_scores jsonb not null,
  score            smallint not null check (score between 0 and 100),
  tier             public.readiness_tier not null,
  created_at       timestamptz not null default now()
);
create index survey_submissions_prospect_idx on public.survey_submissions (prospect_id);
create index survey_submissions_created_idx on public.survey_submissions (created_at desc);

-- ---------- Disclosure document delivery (FTC 14-day rule) ----------
-- No payment of any kind (commitment deposit, startup fee) until 14 calendar days after delivery.
create table public.disclosures (
  id              uuid primary key default gen_random_uuid(),
  prospect_id     uuid not null references public.prospects (id) on delete cascade,
  document_version text not null,
  delivered_at    timestamptz not null default now(),
  acknowledged_at timestamptz,
  signed_name     text,
  created_at      timestamptz not null default now()
);
create index disclosures_prospect_idx on public.disclosures (prospect_id, delivered_at);

-- ---------- Owner Assessments (15 sections, 1,635 points) ----------
create table public.owner_assessments (
  id                uuid primary key default gen_random_uuid(),
  prospect_id       uuid not null references public.prospects (id) on delete cascade,
  status            text not null default 'sent' check (status in ('sent', 'in_progress', 'complete')),
  responses         jsonb,
  section_scores    jsonb,              -- {"branding": {"points": 96, "max": 150}, ...}
  total_points      smallint check (total_points between 0 and 1635),
  summary           text,
  recommended_model text,
  completed_at      timestamptz,
  created_at        timestamptz not null default now()
);
create index owner_assessments_prospect_idx on public.owner_assessments (prospect_id);

-- ---------- Activity log ----------
create table public.activities (
  id           bigint generated always as identity primary key,
  prospect_id  uuid not null references public.prospects (id) on delete cascade,
  staff_id     uuid references public.staff (user_id) on delete set null,
  kind         text not null check (kind in ('call', 'email', 'sms', 'note', 'meeting', 'coaching', 'system')),
  body         text,
  due_at       timestamptz,
  done_at      timestamptz,
  created_at   timestamptz not null default now()
);
create index activities_prospect_created_idx on public.activities (prospect_id, created_at desc);
create index activities_staff_due_idx on public.activities (staff_id, due_at) where done_at is null;

-- ---------- Credit events (attribution now, payouts later) ----------
create table public.credit_events (
  id            bigint generated always as identity primary key,
  prospect_id   uuid not null references public.prospects (id) on delete cascade,
  staff_id      uuid not null references public.staff (user_id) on delete restrict,
  kind          public.credit_kind not null,
  amount_cents  bigint check (amount_cents >= 0),
  occurred_at   timestamptz not null default now()
);
create index credit_events_staff_time_idx on public.credit_events (staff_id, occurred_at desc);
create index credit_events_prospect_idx on public.credit_events (prospect_id);

-- ---------- Member <-> coach messages ----------
create table public.messages (
  id           bigint generated always as identity primary key,
  prospect_id  uuid not null references public.prospects (id) on delete cascade,  -- the member's thread
  author_id    uuid not null references auth.users (id) on delete restrict,
  body         text not null check (length(body) between 1 and 10000),
  read_at      timestamptz,
  created_at   timestamptz not null default now()
);
create index messages_thread_idx on public.messages (prospect_id, created_at desc);
create index messages_author_idx on public.messages (author_id);

-- ---------- updated_at ----------
create or replace function private.touch_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end $$;
create trigger prospects_touch before update on public.prospects
  for each row execute function private.touch_updated_at();

-- ---------- Identity helpers (private schema, not exposed over the API) ----------
create or replace function private.staff_role() returns public.portal_role
language sql stable security definer set search_path = '' as $$
  select role from public.staff where user_id = (select auth.uid()) and active
$$;

create or replace function private.my_prospect_id() returns uuid
language sql stable security definer set search_path = '' as $$
  select id from public.prospects where user_id = (select auth.uid())
$$;

-- Earliest moment a person may pay EntrepX anything: 14 days after their first disclosure delivery.
create or replace function private.payments_open_at(p_prospect uuid) returns timestamptz
language sql stable security definer set search_path = '' as $$
  select min(delivered_at) + interval '14 days' from public.disclosures where prospect_id = p_prospect
$$;

revoke execute on all functions in schema private from public, anon;
grant execute on function private.staff_role(), private.my_prospect_id(), private.payments_open_at(uuid)
  to authenticated, service_role;

-- Public wrapper so the app can show the current user's role.
create or replace function public.my_staff_role() returns public.portal_role
language sql stable set search_path = '' as $$ select private.staff_role() $$;
revoke execute on function public.my_staff_role() from public, anon;
grant execute on function public.my_staff_role() to authenticated;

-- ---------- Guard: only owner/admin reassign; BDRs stay in their stages ----------
create or replace function private.guard_prospect_update() returns trigger
language plpgsql set search_path = '' as $$
declare r public.portal_role := private.staff_role();
begin
  if (select auth.uid()) is null or r in ('owner', 'admin') then
    return new;                          -- service role / owner / admin
  end if;
  if r is null then
    raise exception 'Only staff can change a contact';
  end if;
  if new.bdr_id is distinct from old.bdr_id
     or new.sales_rep_id is distinct from old.sales_rep_id
     or new.coach_id is distinct from old.coach_id then
    raise exception 'Only an owner or admin can reassign a contact';
  end if;
  if r = 'bdr' and new.stage not in ('survey_complete', 'contacted', 'discovery_booked', 'nurture', 'closed_lost') then
    raise exception 'A BDR cannot move a contact past Discovery booked';
  end if;
  if new.user_id is distinct from old.user_id then
    raise exception 'Only an owner or admin can link a login';
  end if;
  return new;
end $$;
create trigger prospects_guard before update on public.prospects
  for each row execute function private.guard_prospect_update();

-- ---------- Row Level Security ----------
alter table public.staff              enable row level security;
alter table public.prospects          enable row level security;
alter table public.survey_submissions enable row level security;
alter table public.disclosures        enable row level security;
alter table public.owner_assessments  enable row level security;
alter table public.activities         enable row level security;
alter table public.credit_events      enable row level security;
alter table public.messages           enable row level security;

-- staff
create policy staff_read on public.staff for select to authenticated
  using (user_id = (select auth.uid()) or (select private.staff_role()) is not null);
create policy staff_manage on public.staff for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin'))
  with check ((select private.staff_role()) = 'owner'
              or ((select private.staff_role()) = 'admin' and role <> 'owner'));

-- prospects: owner/admin all; reps their deals; coaches their members;
-- BDRs their leads plus unassigned early leads; a member sees their own row.
create policy prospects_read on public.prospects for select to authenticated
  using (
    (select private.staff_role()) in ('owner', 'admin')
    or ((select private.staff_role()) = 'sales_rep' and sales_rep_id = (select auth.uid()))
    or ((select private.staff_role()) = 'coach' and coach_id = (select auth.uid()))
    or ((select private.staff_role()) = 'bdr' and (
          bdr_id = (select auth.uid())
          or (bdr_id is null and stage in ('survey_complete', 'contacted'))))
    or user_id = (select auth.uid())
  );
create policy prospects_insert on public.prospects for insert to authenticated
  with check ((select private.staff_role()) is not null);
create policy prospects_update on public.prospects for update to authenticated
  using (
    (select private.staff_role()) in ('owner', 'admin')
    or sales_rep_id = (select auth.uid())
    or coach_id = (select auth.uid())
    or bdr_id = (select auth.uid())
    or ((select private.staff_role()) = 'bdr' and bdr_id is null and stage in ('survey_complete', 'contacted'))
  )
  with check ((select private.staff_role()) is not null);

create policy submissions_read on public.survey_submissions for select to authenticated
  using (exists (select 1 from public.prospects p where p.id = prospect_id));

create policy disclosures_read on public.disclosures for select to authenticated
  using (exists (select 1 from public.prospects p where p.id = prospect_id));
create policy disclosures_staff_insert on public.disclosures for insert to authenticated
  with check ((select private.staff_role()) is not null
              and exists (select 1 from public.prospects p where p.id = prospect_id));
-- The prospect acknowledges receipt through public.acknowledge_disclosure() (below), not a direct update.

-- BDRs never see assessments. Members see their own.
create policy assessments_read on public.owner_assessments for select to authenticated
  using (
    ((select private.staff_role()) <> 'bdr' and exists (select 1 from public.prospects p where p.id = prospect_id))
    or prospect_id = (select private.my_prospect_id())
  );
create policy assessments_staff_write on public.owner_assessments for all to authenticated
  using ((select private.staff_role()) in ('owner', 'admin', 'coach', 'sales_rep')
         and exists (select 1 from public.prospects p where p.id = prospect_id))
  with check ((select private.staff_role()) in ('owner', 'admin', 'coach', 'sales_rep')
         and exists (select 1 from public.prospects p where p.id = prospect_id));

create policy activities_read on public.activities for select to authenticated
  using ((select private.staff_role()) is not null and exists (select 1 from public.prospects p where p.id = prospect_id));
create policy activities_insert on public.activities for insert to authenticated
  with check (staff_id = (select auth.uid()) and exists (select 1 from public.prospects p where p.id = prospect_id));
create policy activities_update_own on public.activities for update to authenticated
  using (staff_id = (select auth.uid())) with check (staff_id = (select auth.uid()));

create policy credit_read on public.credit_events for select to authenticated
  using (staff_id = (select auth.uid()) or (select private.staff_role()) in ('owner', 'admin'));

-- messages: the member and staff who can see that member.
create policy messages_read on public.messages for select to authenticated
  using (
    prospect_id = (select private.my_prospect_id())
    or ((select private.staff_role()) in ('owner', 'admin', 'coach')
        and exists (select 1 from public.prospects p where p.id = prospect_id))
  );
create policy messages_insert on public.messages for insert to authenticated
  with check (
    author_id = (select auth.uid())
    and (prospect_id = (select private.my_prospect_id())
         or ((select private.staff_role()) in ('owner', 'admin', 'coach')
             and exists (select 1 from public.prospects p where p.id = prospect_id)))
  );

-- ---------- Prospect acknowledges their disclosure document ----------
create or replace function public.acknowledge_disclosure(p_disclosure uuid, p_signed_name text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if length(coalesce(trim(p_signed_name), '')) < 2 then
    raise exception 'Type your full name to sign the receipt';
  end if;
  update public.disclosures
     set acknowledged_at = now(), signed_name = trim(p_signed_name)
   where id = p_disclosure
     and prospect_id = (select private.my_prospect_id())
     and acknowledged_at is null;
  if not found then
    raise exception 'Disclosure not found or already acknowledged';
  end if;
end $$;
revoke execute on function public.acknowledge_disclosure(uuid, text) from public, anon;
grant execute on function public.acknowledge_disclosure(uuid, text) to authenticated;
