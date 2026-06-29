# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/homepage-technology-cta`
- Current phase: complete homepage decision and conversion flow
- Application readiness: initialized, buildable, localized, visually structured, product-differentiated, use-case guided, technically comparable, and conversion-complete at homepage level
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Dedicated homepage contracts exist for the product lineup, use-case recommendation, comparison preview, shared technology, and final CTA.
- The MAXIBUD skill prompt routes matching work to all dedicated references.

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

### Homepage product orientation

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

- A graphite technical section compares capacity, rated output, and format.
- Values come from `product.lineup.comparison` without duplication in locale files.
- Portfolio order is normalized as PowerBox 2400, HomeCore 5, SiteHub 10.
- Desktop uses a semantic table with an accessible caption and scoped headers.
- Mobile uses stacked `dl` articles without horizontal table scrolling.
- Localized product and full-comparison actions exist.
- `docs/design-reviews/homepage-comparison-preview.md` records an 18/20 approval score.

### Homepage shared technology

- Added exactly three approved principles: shared LiFePO4 concept, form-factor-specific architecture, and context-specific status or monitoring.
- Avoided claims about one verified controller, inverter, protocol, certification, or electrical architecture.
- Added an original inline SVG portfolio diagram with one localized accessible image label.
- Decorative SVG content is hidden from assistive technology.
- Diagram copy states that it represents portfolio logic rather than electrical connections.
- Added a localized route to `/technology` and `/en/technology`.
- Added visible copy rejecting installation, wiring, repair, and electrical-design guidance.
- Corrected mobile intrinsic-width behavior by enabling the 4:3 diagram ratio only from `sm` upward.

### Homepage final CTA

- Added one direct use-case question.
- Added one primary localized consultation action to `/contact` and `/en/contact`.
- Added one secondary localized product action to `/products` and `/en/products`.
- Repeated concept-product status at the conversion point.
- Identified the consultation as an educational demonstration flow.
- Rejected implications about engineering calculation, compatibility verification, price, delivery, and availability.
- `docs/design-reviews/homepage-technology-cta.md` records an 18/20 approval score and no blockers.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, type checking, unit tests, Nuxt-runtime tests, production build, Chromium, and Playwright E2E.
- Component tests cover the three principles, accessible diagram semantics, technology path, consultation path, product path, and concept disclosure.
- Browser tests cover bilingual content, localized routes, truthful copy, all three principles, diagram semantics, CTA visibility, and 320 px width stability.
- CI preserves Playwright reports after browser failures.

## Validation Results

Executed through GitHub Actions on Ubuntu 24.04 with Node.js `24.11.1` and pnpm `11.9.0`.

Passed on the application head:

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- unit and Nuxt-runtime tests;
- Nuxt client, SSR server, and Nitro node-server build;
- Chromium installation;
- Playwright E2E tests.

The browser suite verifies:

- Ukrainian and English technology and CTA headings;
- exactly three technology principles;
- one accessible technology diagram;
- visible non-installation and non-engineering disclosures;
- `/technology` and `/en/technology`;
- `/contact` and `/en/contact`;
- `/products` and `/en/products`;
- visible mobile technology and CTA content;
- no horizontal overflow at 320 × 800;
- all previously completed homepage, navigation, product-route, API, and intentional 404 behavior.

### Defects Found and Corrected

1. A component test used `exists()` on Vue Test Utils `get()`. It now uses typed-safe `find().exists()` checks.
2. Small disclosure and diagram labels initially used weak opacity. New small text uses stronger contrast values.
3. The technology diagram combined a 288 px minimum height with a 4:3 ratio at 320 px. This imposed a 384 px intrinsic width and expanded the page to 442 px. The ratio now starts at `sm`, mobile uses a stable minimum height, and grid descendants use explicit `min-w-0` behavior.

## Known Warnings

- Nuxt Content and MDC report unresolved Vite `optimizeDeps.include` entries during development with pnpm's isolated dependency layout. Development routes and production build still complete successfully.
- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes `sharp` binaries for `linux-x64`; deployment must use a compatible target architecture or rebuild dependencies.

## Current Application Scope

The technical foundation and complete homepage sequence are implemented:

1. hero and portfolio visual;
2. factual evidence strip;
3. product lineup;
4. use-case recommendation;
5. compact comparison preview;
6. shared technology chapter;
7. final CTA.

Still incomplete:

- final product renders and responsive image assets;
- full comparison matrix route;
- full product-detail content and grouped specifications;
- complete technology, about, legal, and contact pages;
- completed contact submission flow;
- manual full-page screen-reader, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement the full comparison matrix route:

1. define structured specification groups shared by all three products;
2. extend the product schema only where the matrix requires verified fictional data;
3. render a semantic desktop comparison table with persistent product context;
4. render product-by-product mobile groups without horizontal dependency;
5. preserve PowerBox, HomeCore, SiteHub order;
6. keep Ukrainian and English units internally consistent;
7. include localized product-detail actions and a consultation path;
8. keep illustrative-specification disclosure visible near every technical group;
9. add component and E2E coverage for grouped values, localization, routes, and 320 px stability;
10. update the comparison skill contract, design review, and this state file.

## Exit Criteria for the Next Milestone

- comparison groups use structured product data rather than duplicated page copy;
- desktop rows align equivalent attributes accurately;
- unavailable or configuration-dependent values are represented truthfully;
- mobile users can inspect every value without horizontal scrolling;
- no ranking, winner, certification, price, stock, or unsupported suitability claim appears;
- localized routes and units are correct;
- 320 px has no horizontal overflow;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the homepage is complete as a decision flow, but the full comparison route, final visual assets, detailed product pages, complete informational pages, contact submission, manual accessibility and performance review, and deployment configuration remain incomplete.
