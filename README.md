# MAXIBUD ENERGY Practice Project

Bilingual Nuxt 4 product-showcase foundation for the fictional **MAXIBUD ENERGY** concept portfolio.

The repository currently contains a working application shell, localized routes, typed product content, Nitro read APIs, automated checks, and CI. The final marketing sections, original product renders, comparison experience, and contact flow remain separate milestones.

> MAXIBUD ENERGY is a conceptual product line created for an educational software demonstration. Product specifications are illustrative and do not represent certified commercial hardware.

## Start Here

Read these files before changing the project:

1. [`AGENTS.md`](AGENTS.md)
2. [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md)
3. [`CURRENT_STATE.md`](CURRENT_STATE.md)
4. [`CHAT_HANDOFF.md`](CHAT_HANDOFF.md)

Use the relevant repository skills under `.agents/skills/`:

- `maxibud-energy-site` for product truth, content, routes, and localization;
- `maxibud-landing-design` for visual composition and design review;
- `nuxt4-production` for framework engineering;
- `maxibud-release-check` only as the explicit release gate.

## Runtime

- Node.js `24.11.1`
- pnpm `11.9.0`

The exact versions are declared in `.node-version`, `package.json`, and `pnpm-workspace.yaml`.

## Setup

```bash
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
```

The default development URL is `http://localhost:3000`.

## Environment

```dotenv
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NUXT_PUBLIC_SITE_URL` is used for canonical URLs and localized SEO metadata.

## Commands

```bash
pnpm dev          # development server
pnpm lint         # ESLint
pnpm typecheck    # Nuxt and Vue type checking
pnpm test         # unit and Nuxt-runtime tests
pnpm test:e2e     # Playwright tests; Chromium must be installed
pnpm build        # production Nitro server build
pnpm preview      # preview the production build
pnpm validate     # lint, typecheck, tests, and build
```

Install the Playwright browser once on a local machine:

```bash
pnpm exec playwright install chromium
```

## Application Structure

```text
app/
├── assets/css/        global theme and design tokens
├── components/        shared interface and product components
├── composables/       reusable Nuxt application logic
├── layouts/           global application shell
└── pages/             localized public routes
content/
└── products/          Ukrainian and English product records
server/api/products/   Nitro product read endpoints
shared/schemas/        shared Zod schemas and derived types
i18n/locales/          interface translations
modules/               narrow local Nuxt compatibility modules
tests/                 unit, Nuxt-runtime, and Playwright tests
```

## Implemented Routes

Ukrainian is the unprefixed default locale. English uses `/en`.

```text
/
/products
/products/powerbox-2400
/products/homecore-5
/products/sitehub-10
/products/compare
/technology
/about
/contact
/legal
```

Equivalent English routes are available below `/en`.

## Architecture Decisions

- SSR remains enabled.
- Nuxt Content owns typed product records.
- Pages read product content through Nitro APIs instead of shipping the Content database query client to every route.
- Nuxt UI provides accessible primitives; project components provide the brand presentation.
- Locale-aware route utilities are used instead of manually concatenating `/en`.
- Node's built-in SQLite connector is used for Nuxt Content.
- The internal public Content SQL dump is not prerendered because the application does not use browser-side Content queries.
- Build-time dependency scripts are allowlisted in `pnpm-workspace.yaml`.

## Validation

GitHub Actions runs installation, lint, type checking, unit/Nuxt tests, production build, Chromium installation, and Playwright tests for pull requests and pushes to `main`.

See [`CURRENT_STATE.md`](CURRENT_STATE.md) for the exact latest local validation results and known limitations.
