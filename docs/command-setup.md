# EntrepX Command: connecting the database

The admin portal lives at `/command`. Until it's connected it shows a "Not connected" screen; the marketing site is unaffected.

## 1. Create the Supabase project
1. In Supabase, create an organization named **EntrepX**, then a project (region: US East, to sit next to Vercel's default region).
2. Apply the migrations in `supabase/migrations/` in order (Supabase CLI `supabase db push`, or paste each into the SQL editor).
3. Optional for a dev project only: run `supabase/seed.sql` (sample pricing ranges; replace with real ones in Settings).

## 2. Auth settings (Supabase → Authentication)
- Email provider on. **Disable sign-ups** ("Allow new users to sign up" off): staff accounts are invited, never self-created.
- Email OTP length 6. Edit the "Magic link" email template to show the code: `Your EntrepX code is {{ .Token }}`.
- Site URL: `https://www.entrepx.com`. Redirect URLs: `https://www.entrepx.com/**` and your Vercel preview domain.

## 3. Add the first staff member (Tad, owner)
1. Authentication → Users → **Invite user** with Tad's email.
2. SQL editor:
   ```sql
   insert into public.staff (user_id, full_name, email, role)
   select id, 'Tad Timothy', email, 'owner' from auth.users where email = 'TAD-EMAIL-HERE';
   ```
   After that, Tad can add other staff (Settings → invite comes in Phase 1).

## 4. Vercel environment variables
Set for Production and Preview:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (the `sb_publishable_…` key)

Never put the secret/service-role key in a `NEXT_PUBLIC_` variable.

## 5. Scheduled job
First-right windows lapse automatically. Enable `pg_cron` and schedule:
```sql
select cron.schedule('lapse-first-rights', '*/15 * * * *', $$select private.lapse_first_rights()$$);
```

## Tests
`npm run test:db` runs every migration against an in-memory Postgres and checks the business rules and row-level security (43 checks).
