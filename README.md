# EntrepX website and Command

Next.js (App Router).

- **Marketing site**: pages in `app/(site)/`. Content shared across pages lives in `components/content.js` and `components/surveyData.js`.
- **EntrepX Command** (admin portal): `app/command/`, behind staff sign-in. Database schema in `supabase/migrations/`. Setup: `docs/command-setup.md`.

Commands
- `npm install && npm run dev` to run locally (copy `.env.example` to `.env.local` for the admin portal).
- `npm run build` runs `scripts/fetch-media.mjs` first, which downloads any media in `public/media` that isn't committed.
- `npm run test:db` checks the database migrations, business rules and row-level security in an in-memory Postgres.
