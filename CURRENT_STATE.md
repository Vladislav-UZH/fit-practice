# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/homepage-comparison-preview`
- Current phase: homepage technical comparison layer
- Application readiness: initialized, buildable, visually structured, product-differentiated, use-case guided, and technically comparable
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Dedicated homepage lineup, use-case recommendation, and comparison-preview contracts exist under the MAXIBUD project skill.
- The MAXIBUD skill prompt routes matching work to all three references.

### Nuxt foundation

- Nuxt 4, Vue 3, TypeScript, SSR, Nitro, Nuxt UI, Nuxt Content, Nuxt Image, and Nuxt i18n are configured.
- The application shell, skip link, header, footer, error page, theme tokens, localized routes, SEO metadata, and canonical URLs exist.
- Ukrainian is the default locale; English uses the `/en` prefix.
- Node.js `24.11.1` and pnpm `11.9.0` are declared with a frozen lockfile.

### Content and server layer

- Typed Ukrainian and English records exist for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Shared Zod schemas validate locales, slugs, highlights, lineup data, and product records.
- Nitro endpoints provide localized product lists and detail records with intentional validation and 404 behavior.
- Product context, distinction, reasons, comparison values, and visual descriptions remain stored in localized product content.

### Homepage visual and product layers

- The production header includes active desktop navigation and a hydration-safe mobile Drawer.
- The hero presents concept status, calls to action, and an original product-family SVG.
- The factual portfolio strip avoids fabricated commercial metrics.
- Three asymmetric product chapters explain context, distinction, reasons, capacity, output, format, and detail paths.
- Original inline SVG silhouettes represent portable, stationary modular, and wheeled professional concepts.
- `docs/design-reviews/homepage-product-lineup.md` records an 18/20 approval score.

### Homepage use-case recommendation

- Home maps to HomeCore 5, mobile work maps to PowerBox 2400, and construction use maps to SiteHub 10.
- Product distinctions and exactly two reasons are reused from product records.
- Desktop tabs support synchronized ARIA state, roving tabindex, Arrow keys, Home, End, and focus movement.
- SSR-rendered tabs remain disabled until hydration completes.
- Mobile exposes all three recommendations as stacked articles.
- A visible statement identifies the guidance as concept navigation rather than engineering sizing.
- `docs/design-reviews/homepage-use-case-recommendation.md` records an 18/20 approval score.

### Homepage comparison preview

- Added a graphite technical section after use-case guidance.
- Compared capacity, rated output, and format for all three products.
- Read all technical values from `product.lineup.comparison` without duplicating values in locale files.
- Normalized portfolio order inside the component as PowerBox 2400, HomeCore 5, SiteHub 10.
- Added a semantic desktop table with an accessible caption, scoped product headers, and scoped metric rows.
- Added one product-detail action per product and one primary action to the localized full-comparison route.
- Added stacked mobile articles using `dl` instead of a horizontally scrolling table.
- Added visible disclosure that the values are illustrative concept specifications rather than certified commercial parameters.
- Added complete Ukrainian and English interface copy.
- Added `docs/design-reviews/homepage-comparison-preview.md` with an 18/20 approval score and no blockers.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, type checking, unit tests, Nuxt-runtime tests, production build, Chromium, and Playwright E2E.
- Component tests verify product-order normalization, aligned desktop values, three mobile cards, and three metric groups per card.
- Browser tests verify bilingual headings and values, localized product and comparison paths, desktop product order, mobile product order, hidden responsive alternatives, and 320 px width stability.
- CI preserves Playwright reports after browser failures.

## Validation Results

Executed through GitHub Actions on Ubuntu 24.04 with Node.js `24.11.1` and pnpm `11.9.0`.

Passed:

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- unit and Nuxt-runtime tests;
- Nuxt client, SSR server, and Nitro node-server build;
- Chromium installation;
- Playwright E2E tests.

The browser suite verifies:

- Ukrainian and English comparison-preview headings;
- PowerBox, HomeCore, SiteHub desktop column order;
- Ukrainian capacity and format values;
- English capacity and format values;
- localized full-comparison links at `/products/compare` and `/en/products/compare`;
- all three mobile comparison articles in portfolio order;
- desktop table hidden from mobile visual presentation;
- mobile comparison cards hidden from desktop visual presentation;
- no horizontal overflow at 320 × 800;
- existing product lineup, use-case recommendation, mobile Drawer, product routes, API data, and intentional 404 behavior.

## Known Warnings

- Nuxt Content and MDC report unresolved Vite `optimizeDeps.include` entries during development with pnpm's isolated dependency layout. Development routes and production build still complete successfully.
- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes `sharp` binaries for `linux-x64`; deployment must use a compatible target architecture or rebuild dependencies.

## Current Application Scope

The technical foundation, homepage hero, portfolio evidence, product lineup, use-case recommendation, and compact comparison preview are complete.

Still incomplete:

- final product renders and responsive image assets;
- shared technology chapter and final homepage CTA;
- full comparison matrix route;
- full product-detail content and grouped specifications;
- complete technology, about, legal, and contact content;
- completed contact submission flow;
- manual screen-reader, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement the homepage shared-technology and final-CTA slice:

1. explain three shared portfolio principles without installation or repair instructions;
2. distinguish shared platform concepts from product-specific specifications;
3. use one restrained technical visual or diagram owned by the project;
4. add a clear route to the technology page;
5. add a final homepage CTA with one primary consultation action and one secondary product action;
6. repeat concept-product status near the final conversion area;
7. provide a compact mobile composition without decorative card grids;
8. add bilingual component and E2E coverage;
9. update the design review, skill reference, and this state file.

## Exit Criteria for the Next Milestone

- shared principles are factual and consistent with product records;
- content does not provide real installation, repair, or electrical-design instructions;
- technology route uses localized navigation;
- final CTA has one clear primary action;
- concept status remains visible;
- mobile supports 320 px without overflow;
- Ukrainian and English versions remain semantically equivalent;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the homepage now explains, differentiates, recommends, and compares the product family, but the technology chapter, final CTA, full comparison matrix, final product visuals, detailed product content, contact flow, manual accessibility and performance review, and deployment configuration remain incomplete.
