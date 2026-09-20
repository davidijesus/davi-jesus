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
npm run lint
npm run build:vercel
```

`build:vercel` runs the Next.js production build. The separate `build` script uses Vinext. The current `test` script references `tests/rendered-html.test.mjs`, which is not present in this revision; it should be repaired before treating `npm test` as a passing check.

Production availability and domain configuration are being reviewed separately. A successful local build does not establish that the public deployment is healthy.

## Working on the content

Update project facts and links in `app/data/portfolio.ts`, and keep both languages aligned. Place new case-study media in `public`, supply meaningful alternative text and verify rights to use the assets. Review mobile layouts, keyboard navigation and reduced-motion behavior before publishing interface changes.

The repository does not currently include a license. Its source and media should not be assumed to be available for reuse.
