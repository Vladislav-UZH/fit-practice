# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/homepage-use-case-recommendation`
- Current phase: homepage scenario-guidance layer
- Application readiness: initialized, buildable, visually structured, product-differentiated, and use-case guided
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Homepage lineup and use-case recommendation contracts exist under the MAXIBUD project skill.
- The MAXIBUD skill prompt routes relevant work to both dedicated references.

### Nuxt foundation

- Nuxt 4, Vue 3, TypeScript, SSR, Nitro, Nuxt UI, Nuxt Content, Nuxt Image, and Nuxt i18n are configured.
- The application shell, skip link, header, footer, error page, theme tokens, localized routes, SEO metadata, and canonical URLs exist.
- Ukrainian is the default locale; English uses the `/en` prefix.
- Node.js `24.11.1` and pnpm `11.9.0` are declared with a frozen lockfile.

### Content and server layer

- Typed Ukrainian and English product records exist for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Shared Zod schemas validate locales, slugs, highlights, lineup data, and product records.
- Nitro endpoints provide localized product lists and detail records with intentional validation and 404 behavior.
- Product context, distinction, two reasons, comparison values, and visual descriptions remain stored in product content.

### Homepage visual and product layers

- The production header includes active desktop navigation and a hydration-safe mobile Drawer.
- The hero presents concept status, calls to action, and an original product-family SVG.
- The factual portfolio strip avoids fabricated commercial metrics.
- Three asymmetric product chapters explain context, distinction, reasons, capacity, output, format, and detail paths.
- Original inline SVG silhouettes represent portable, stationary modular, and wheeled professional concepts.
- `docs/design-reviews/homepage-product-lineup.md` records an 18/20 approval score.

### Homepage use-case recommendation

- Added three localized contexts in the order home, mobile work, and construction site.
- Mapped home to HomeCore 5, mobile work to PowerBox 2400, and construction use to SiteHub 10.
- Reused product distinctions, exactly two reasons, slugs, and accessible visual descriptions from existing product records.
- Added a desktop tab interface with synchronized ARIA state, roving tabindex, Arrow Left and Right, Home, End, and focus movement.
- Disabled SSR-rendered tabs until Vue mounts and exposed a busy state during hydration.
- Added one persistent tabpanel relationship for all tab controls.
- Added a stacked mobile fallback where all three recommendations remain visible without interaction.
- Added product-detail and comparison actions for every context.
- Added a visible disclaimer that the guidance is not engineering sizing for a real installation.
- Added complete Ukrainian and English copy.
- Added `docs/design-reviews/homepage-use-case-recommendation.md` with an 18/20 approval score and no blockers.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, type checking, unit tests, Nuxt-runtime tests, production build, Chromium, and Playwright E2E.
- Component tests cover context mapping, mobile fallback presence, default recommendation, and keyboard state changes.
- Browser tests cover bilingual rendering, keyboard focus, ARIA selection, all three panel states, panel-height spread, mobile visibility, 320 px width stability, navigation, product routes, and API behavior.
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

- Ukrainian and English recommendation content;
- HomeCore 5 as the default home recommendation;
- ArrowRight and End keyboard navigation;
- focus movement to the selected tab;
- synchronized `aria-selected`, `tabindex`, and tabpanel labeling;
- all three desktop recommendation states;
- maximum desktop panel-height spread below 16 px at 1280 × 900;
- all three mobile recommendations visible at 320 × 800;
- no horizontal overflow at 320 px;
- existing mobile Drawer, localized product routes, API data, and intentional 404 behavior.

### Defects Found and Corrected

1. SSR tab controls initially accepted keyboard input before hydration. They are now disabled until `onMounted`.
2. Inactive tabs initially referenced panel IDs that were not present. All tabs now control one persistent panel.
3. The first component test relied on implicit `nextTick`. It now imports Vue explicitly.
4. The first panel-stability test used an unrealistic 2 px limit. The final test measures every state and rejects material spread of 16 px or more.

## Known Warnings

- Nuxt Content and MDC report unresolved Vite `optimizeDeps.include` entries during development with pnpm's isolated dependency layout. Development routes and production build still complete successfully.
- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes `sharp` binaries for `linux-x64`; deployment must use a compatible target architecture or rebuild dependencies.

## Current Application Scope

The technical foundation, homepage hero, portfolio evidence, product lineup, and use-case recommendation are complete.

Still incomplete:

- final product renders and responsive image assets;
- homepage comparison preview and full comparison matrix;
- shared technology section and final homepage CTA;
- full product-detail content and grouped specifications;
- complete technology, about, legal, and contact content;
- completed contact submission flow;
- manual screen-reader, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement the homepage comparison-preview slice:

1. use existing structured capacity, output, and format values for all three products;
2. show one compact desktop comparison surface without duplicating the full matrix;
3. provide a stacked mobile representation without horizontal table scrolling;
4. preserve product order and consistent localized units;
5. add one product-detail path per product and one primary action to the full comparison route;
6. keep concept disclosure visible near the technical values;
7. add component and E2E coverage for bilingual values, mobile order, and 320 px stability;
8. update the design review, skill reference, and this state file.

## Exit Criteria for the Next Milestone

- capacity, output, and format align across all products;
- desktop comparison is scannable without decorative scoring;
- mobile users see every product and metric without horizontal scrolling;
- values come from product records rather than duplicated locale content;
- Ukrainian and English units remain internally consistent;
- product and full-comparison actions use localized routes;
- concept status remains explicit;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the homepage now explains, differentiates, and guides visitors through the product family, but comparison, final product visuals, detailed product content, contact flow, manual accessibility and performance review, and deployment configuration remain incomplete.
