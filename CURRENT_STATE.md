# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/full-comparison-matrix`
- Current phase: complete full portfolio comparison flow
- Application readiness: initialized, buildable, localized, visually structured, product-differentiated, use-case guided, fully comparable, and conversion-complete through the comparison route
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Dedicated contracts exist for the product lineup, use-case recommendation, comparison preview, shared technology, final CTA, and full comparison matrix.
- The MAXIBUD skill prompt routes matching work to all dedicated references.

### Nuxt foundation

- Nuxt 4, Vue 3, TypeScript, SSR, Nitro, Nuxt UI, Nuxt Content, Nuxt Image, and Nuxt i18n are configured.
- The application shell, skip link, header, footer, error page, theme tokens, localized routes, SEO metadata, and canonical URLs exist.
- Ukrainian is the default locale; English uses the `/en` prefix.
- Node.js `24.11.1` and pnpm `11.9.0` are declared with a frozen lockfile.

### Content and server layer

- Typed Ukrainian and English records exist for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Shared Zod schemas validate locales, slugs, highlights, lineup data, complete comparison data, value status, and product records.
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

### Full comparison matrix

- Added localized routes at `/products/compare` and `/en/products/compare`.
- Added twelve equivalent comparison values to every localized product record.
- Added explicit ordinary, configuration-dependent, and unavailable value states.
- HomeCore peak output is identified as configuration-dependent.
- PowerBox and SiteHub expansion are identified as unavailable in the current concepts.
- Portfolio order is normalized as PowerBox 2400, HomeCore 5, SiteHub 10.
- Desktop uses one semantic table with a caption, scoped headers, aligned rows, and sticky product context.
- Mobile uses product-by-product articles with four groups and twelve values each.
- Every group includes an illustrative-specification disclosure.
- Localized product-detail, products-index, and demonstration consultation actions exist.
- `docs/design-reviews/full-comparison-matrix.md` records an 18/20 approval score and no blockers.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, type checking, unit tests, Nuxt-runtime tests, production build, Chromium, and Playwright E2E.
- Component tests cover the comparison table, portfolio order, grouped mobile content, explicit value states, shared principles, diagram semantics, localized paths, and concept disclosure.
- Browser tests cover bilingual comparison content, grouped values, localized routes, truthful exception states, homepage behavior, and 320 px width stability.
- CI preserves Playwright reports after browser failures.

## Validation Results

Executed locally on Windows x64 with Node.js `22.20.0` and pnpm `11.9.0`.

Passed on the application head:

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- 15 unit and Nuxt-runtime tests;
- Nuxt client, SSR server, and Nitro node-server build;
- Chromium installation;
- 10 Playwright E2E tests.

The browser suite verifies:

- `/products/compare` and `/en/products/compare`;
- fixed PowerBox, HomeCore, SiteHub order;
- four comparison groups and twelve aligned criteria;
- explicit configuration-dependent and unavailable states;
- localized product, products-index, and consultation paths;
- three mobile products, twelve mobile groups, and 36 mobile values;
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

### Defects Found and Corrected in This Milestone

1. Nuxt runtime setup exceeded Vitest's default 10-second hook timeout on the local Windows host. The project now uses a 30-second hook timeout; all 15 tests pass.
2. The hydration-safe homepage tabs could remain disabled beyond Playwright's default 5-second assertion timeout under six parallel local workers. The existing hydration gate remains intact and the assertion now allows 15 seconds; all 10 E2E tests pass.
3. A stale manually started development server served outdated Content state during an initial parallel E2E run. The full suite passed on a clean Playwright-managed server.

## Known Warnings

- Nuxt Content and MDC report unresolved Vite `optimizeDeps.include` entries during development with pnpm's isolated dependency layout. Development routes and production build still complete successfully.
- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes platform-specific `sharp` binaries; deployment dependencies must be rebuilt for the target architecture.

## Current Application Scope

The technical foundation and complete homepage sequence are implemented:

1. hero and portfolio visual;
2. factual evidence strip;
3. product lineup;
4. use-case recommendation;
5. compact comparison preview;
6. shared technology chapter;
7. final CTA;
8. full localized comparison matrix.

Still incomplete:

- final product renders and responsive image assets;
- full product-detail content and grouped specifications;
- complete technology, about, legal, and contact pages;
- completed contact submission flow;
- manual full-page screen-reader, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement full product-detail content and grouped specifications:

1. extend localized product records with approved overview, feature, application, and specification groups;
2. keep one dynamic product template for all three products;
3. preserve the approved energy, output/input, physical, environment, and controls group order;
4. render complete semantic specifications on desktop and mobile;
5. keep illustrative-specification disclosure beside technical content;
6. add context and distinction content without guaranteed runtime or unsupported suitability claims;
7. expose only real available conceptual documents, otherwise render no download link;
8. preserve localized comparison and consultation paths;
9. add component and E2E coverage for all products, both locales, invalid slugs, and 320 px stability;
10. update the product-detail skill contract, design review, and this state file.

## Exit Criteria for the Next Milestone

- all three product routes use one content-driven template;
- approved grouped specifications are complete in both locales;
- product values remain consistent with the comparison matrix;
- no missing document is exposed as a live download;
- invalid product slugs retain intentional 404 behavior;
- mobile users can inspect all product content without horizontal scrolling;
- no certification, price, stock, warranty, guaranteed runtime, or unsupported suitability claim appears;
- localized routes, metadata, and units are correct;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the homepage and full comparison flow are complete, but final visual assets, detailed product pages, complete informational pages, contact submission, manual accessibility and performance review, and deployment configuration remain incomplete.
