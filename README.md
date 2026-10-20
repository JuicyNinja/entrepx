# EntrepX website

Next.js (App Router) marketing site for EntrepX: the franchise alternative.

- `npm install && npm run dev` to run locally.
- `npm run build` runs `scripts/fetch-media.mjs` first, which downloads any media in `public/media` that isn't committed (the hero and resin video loops).
- Content shared across pages lives in `components/content.js` and `components/surveyData.js`.
- Forms are a preview: nothing is saved yet. The planned backend schema is `entrepx_portal_schema.sql` in the Claude project.
