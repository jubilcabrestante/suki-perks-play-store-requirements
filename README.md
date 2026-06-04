# Suki Platform — Legal & Support Hub

Static Next.js site hosting the Google Play Store compliance pages for **Suki Perks** (customer loyalty) and **Suki Merchant** (POS & merchant app):

- Privacy Policy
- Account Deletion
- Terms of Service
- Support

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — the dev server runs at the root path (no basePath).

## Deployment (GitHub Pages)

This site is deployed as a **static export** via GitHub Actions, **not** Vercel.

- `next.config.ts` sets `output: "export"` and a `basePath` of `/suki-platform-play-store-requirements` (the repo name) so links and assets resolve under the project-site URL.
- `.github/workflows/deploy.yml` builds the site and publishes `./out` to Pages on every push to `master`.

**One-time setup:** in the GitHub repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. After that, every push to `master` redeploys automatically.

Live URL: <https://jubilcabrestante.github.io/suki-platform-play-store-requirements/>

> ⚠️ The `basePath` must match the repository name. If you rename the repo, update `repo` in `next.config.ts`.
