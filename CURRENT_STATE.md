# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/homepage-visual-slice`
- Current phase: first homepage visual slice
- Application readiness: initialized, buildable, and visually structured
- Release readiness: `NOT READY`

This file records current progress and must be updated after material milestones.

## Completed

### Repository and skill foundation

- Root repository instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.

### Runtime and package management

- Added Node.js `24.11.1` runtime declaration.
- Added pnpm `11.9.0` package-manager declaration and lockfile.
- Added strict engine enforcement and an allowlist for required dependency build scripts.
- Added `.env.example` with the public site URL.

### Nuxt application foundation

- Initialized Nuxt 4 with Vue 3, TypeScript, SSR, and Nitro.
- Added Nuxt UI, Nuxt Content, Nuxt Image, Nuxt i18n, Zod, ESLint, Vitest, Nuxt Test Utils, and Playwright.
- Added the application shell, skip link, global footer, error page, and centralized theme tokens.
- Added Ukrainian as the default locale and English with the `/en` prefix.
- Added all required route files.
- Added localized SEO metadata and canonical URL generation.

### Content and server layer

- Added a typed Nuxt Content product collection.
- Added Ukrainian and English records for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Added shared Zod schemas for locales, product slugs, highlights, and product records.
- Added Nitro endpoints for product lists and product detail records.
- Added intentional validation errors and a 404 response for unknown product slugs.
- Configured Nuxt Content to use Node's built-in SQLite connector.
- Disabled unnecessary prerendering of the internal Content SQL dump while preserving SSR and server-side Content queries.

### Homepage visual slice

- Reworked the global header into a sticky production-oriented shell with clear desktop active states.
- Added an accessible mobile Drawer with explicit open state, Escape close behavior, and trigger-focus restoration.
- Prevented lost pre-hydration clicks by disabling the mobile trigger until Vue mounts.
- Added a light-dominant hero with one graphite technical stage and restrained lime accents.
- Added an original inline SVG concept visualization for all three product formats at relative scale.
- Kept product names and contexts outside the SVG for localization and accessibility.
- Added a factual four-item portfolio proof strip without fabricated commercial metrics.
- Added complete Ukrainian and English copy for the new interface.
- Added permanent Playwright failure-report artifacts to CI.
- Added `docs/design-reviews/homepage-visual-slice.md` with a 16/20 approval score and no blockers.

### Quality and automation

- Added ESLint configuration.
- Added unit and Nuxt-runtime tests.
- Added Playwright route, product-flow, bilingual homepage, and mobile-navigation tests.
- Added GitHub Actions validation and E2E jobs.
- Added VS Code extension and workspace settings.

## Validation Results

Executed through GitHub Actions on Ubuntu 24.04 with Node.js `24.11.1` and pnpm `11.9.0`.

### Passed

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- unit and Nuxt-runtime tests;
- Nuxt client, SSR server, and Nitro node-server build;
- Chromium installation;
- Playwright E2E tests.

The browser suite verifies:

- Ukrainian and English homepage rendering;
- product-family stage and factual proof-strip visibility;
- mobile menu opening at 390 × 844;
- Escape closing the Drawer;
- focus restoration to the mobile trigger;
- localized product detail rendering;
- intentional API 404 behavior.

### Defects Found and Corrected During Validation

1. A custom accessibility prop was initially treated as an HTML attribute and failed type checking. It was renamed to an unambiguous component prop.
2. Implicit `DrawerTrigger as-child` activation did not open reliably with the chosen trigger composition. Drawer state is now controlled explicitly.
3. The visible SSR trigger could receive a click before Vue hydration completed. It is now disabled until `onMounted`.
4. CI initially discarded browser-test diagnostics. Playwright failure reports are now preserved as artifacts.

## Known Warnings

- Nuxt Content and MDC report unresolved Vite `optimizeDeps.include` entries during development with pnpm's isolated dependency layout. Development routes and production build still complete successfully. This is treated as an upstream tooling warning, not suppressed through broad dependency hoisting.
- Rollup reports third-party sourcemap and `PURE` annotation warnings from Nuxt and VueUse during production build.
- Nuxt Image includes `sharp` binaries for `linux-x64`; deployment must use a compatible target architecture or rebuild dependencies for the destination.

## Current Application Scope

The technical foundation and first homepage visual slice are complete.

Still incomplete:

- final original product renders and responsive image assets;
- homepage product chapters or a finished difference-first lineup;
- use-case selector;
- comparison preview;
- shared technology section and final homepage CTA;
- full product-detail content and specification groups;
- full comparison matrix;
- complete technology, about, legal, and contact content;
- contact form, server validation, honeypot, rate limiting, and truthful demo submission state;
- dedicated 320 px visual regression review;
- manual screen-reader, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement the homepage product-lineup slice:

1. define the additional localized content fields required for clear product differentiation;
2. replace the generic three-card presentation with substantial product chapters or a documented difference-first layout;
3. keep comparable values aligned across all three products;
4. preserve one clear product-detail action per format;
5. verify Ukrainian and English reading order on mobile and desktop;
6. add component and E2E coverage;
7. update the design review and this state file with exact results.

## Exit Criteria for the Next Milestone

- every product has a clear intended context and primary distinction;
- the three products read as one portfolio rather than unrelated cards;
- mobile users can discover all products without a carousel;
- technical values remain comparable and use consistent units;
- concept status and truthful claims remain intact;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the foundation and first visual slice are complete, but the remaining homepage decision flow, final product visuals, detailed content, contact flow, manual accessibility and performance review, and deployment configuration are incomplete.
