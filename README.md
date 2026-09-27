# Davi Nascimento's portfolio

A bilingual portfolio for Davi Nascimento's work across software, AI, data and digital products. It presents selected projects as case studies, with Portuguese and English routes, responsive layouts and motion that respects reduced-motion preferences.

## What is in this repository

- `app/data/portfolio.ts` contains the project, experience and interface content.
- `app/components/PortfolioClient.tsx` renders the portfolio and its interactions.
- `app/components/ProjectCaseClient.tsx` renders individual case studies.
- `app/pt` and `app/en` provide localized pages and case-study routes.
- `public` holds images, video and other static assets.

The contact form opens the visitor's email application through a `mailto:` link. It does not submit messages to a server.

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server. The default route is in Portuguese; `/pt` and `/en` provide explicit language routes.

## Checks and deployment

```bash
npm run build
npx tsc --noEmit
npm audit
```

The production build uses Vite and Vinext to generate a Cloudflare Worker. `vite.config.ts` defines the Cloudflare adapter and `wrangler.jsonc` defines the Worker named `davijesus`.

```bash
npm run deploy:vinext
```

The Cloudflare preview is available at [davijesus.ndaviix.workers.dev](https://davijesus.ndaviix.workers.dev). The custom domain is `davijesus.me`.

The `build:vercel` script remains available as a temporary rollback path. The current `test` script references `tests/rendered-html.test.mjs`, which is not present in this revision. `npm run lint` is configured, but it did not finish in a reasonable time during the migration review, so neither command should be treated as a passing check yet.

## Working on the content

Update project facts and links in `app/data/portfolio.ts`, and keep both languages aligned. Place new case-study media in `public`, supply meaningful alternative text and verify rights to use the assets. Review mobile layouts, keyboard navigation and reduced-motion behavior before publishing interface changes.

The repository does not currently include a license. Its source and media should not be assumed to be available for reuse.
