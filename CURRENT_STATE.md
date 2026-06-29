# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/technology-about-pages`
- Current phase: complete localized product-site application flow
- Application readiness: initialized, buildable, localized, content-complete, product-differentiated, fully comparable, complete through product details, consultation, technology, about, and legal routes
- Deployment scope: intentionally excluded by user decision
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Dedicated contracts exist for homepage product presentation, use-case guidance, comparison, product details, contact consultation, and complete technology and about pages.
- Codex branch workflow guardrails require inspection of current `main`, `CURRENT_STATE.md`, changed files, and completed milestones before implementation.

### Nuxt foundation

- Nuxt 4, Vue 3, TypeScript, SSR, Nitro, Nuxt UI, Nuxt Content, Nuxt Image, Nuxt i18n, Zod, Vitest, and Playwright are configured.
- The application shell, skip link, active navigation, hydration-safe mobile Drawer, footer, error page, theme tokens, localized routes, SEO metadata, and canonical URLs exist.
- Ukrainian is the default locale; English uses the `/en` prefix.
- Node.js `24.11.1` and pnpm `11.9.0` are declared with a frozen lockfile.
- Nuxt DevTools remain available for normal local development and are disabled in CI so browser checks measure only the application interface.

### Content and server layer

- Typed Ukrainian and English records exist for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Shared schemas validate locale, slug, concept status, highlights, lineup data, full comparison data, grouped product specifications, documents, value states, product records, and contact requests.
- Nitro endpoints provide localized product lists, intentional product 404 behavior, and the demonstration contact service.
- Product facts remain in localized product records; reusable interface messages remain in Nuxt i18n content.

### Homepage and portfolio orientation

- The homepage includes the portfolio hero, factual proof strip, three differentiated product chapters, use-case recommendation, compact comparison preview, shared technology chapter, and final CTA.
- Desktop use-case tabs support synchronized ARIA state, roving tabindex, Arrow keys, Home, End, and focus movement.
- Mobile exposes equivalent recommendation and comparison content without horizontal scrolling.
- Original project-owned inline SVG visuals represent the product family and technology relationships.
- Homepage design reviews record passing scores with no blockers.

### Full comparison matrix

- Localized routes exist at `/products/compare` and `/en/products/compare`.
- Every localized product record owns twelve equivalent comparison values.
- Ordinary, configuration-dependent, and unavailable states are explicit.
- Desktop uses a semantic grouped comparison table; mobile uses complete product-by-product articles.
- Localized product-detail, products-index, and consultation actions exist.
- `docs/design-reviews/full-comparison-matrix.md` records an 18/20 approval score.

### Full product details

- One dynamic route and one reusable `ProductDetail` component serve all three products in Ukrainian and English.
- Every localized record contains a tagline, overview, features, conceptual applications, visual description, five specification groups, optional document metadata, and localized SEO copy.
- Detail values remain consistent with the comparison matrix and support ordinary, configuration-dependent, and unavailable states.
- Technical values use semantic `dl`, `dt`, and `dd` structures without a wide mobile table.
- Product records declare `documents: []` because no repository-owned conceptual document exists; no fake or disabled download action is rendered.
- Unknown slugs and missing records retain intentional 404 behavior.
- `docs/design-reviews/full-product-details.md` records an 18/20 approval score.

### Demonstration consultation flow

- Localized contact routes exist at `/contact` and `/en/contact`.
- Product-detail CTAs preselect only approved query values; unknown values fall back to `unsure` without redirecting.
- Client and server share one Zod contract with trimming, email normalization, enums, length limits, consent, optional fields, and honeypot validation.
- The Nitro endpoint validates authoritatively, applies basic in-memory rate limiting, returns structured safe errors, and does not echo personal data.
- The form exposes initial, validating, submitting, success, field-error, server-error, and rate-limit states.
- Labels, error associations, live status, error summary, first-invalid focus, keyboard-visible actions, and hydration safety are implemented.
- Visible contact and legal copy states that the service does not claim sales delivery, permanent storage, pricing, availability, ordering, engineering sizing, or compatibility verification.
- `docs/design-reviews/contact-consultation-flow.md` records a 19/20 approval score.

### Technology page

- Complete localized routes exist at `/technology` and `/en/technology`.
- Four approved principles explain the LiFePO4 concept, grid and solar charging scenarios, form-factor-specific protection, and context-specific monitoring.
- An original inline SVG presents portfolio information relationships with one localized accessible image label; decorative SVG content is hidden.
- The page distinguishes portable, stationary modular, and wheeled professional formats and links to each localized product route.
- Explicit boundaries reject wiring, installation, repair, certification, compatibility, guaranteed service life, runtime calculation, and real equipment sizing claims.
- Localized products and full-comparison actions exist.

### About page

- Complete localized routes exist at `/about` and `/en/about`.
- The page identifies MAXIBUD ENERGY as a fictional product line associated in the educational context with MAXIBUD LLC / ТОВ «МАКСІБУД».
- Verified implementation facts cover three concept products, two localized versions, SSR, CI, structured content, Zod validation, Nitro APIs, accessibility, and automated testing.
- The page documents the repository working method and deliberately limited demonstration scope.
- Copy explicitly avoids unsupported company-history, staffing, facility, partner, customer, certification, award, patent, and manufacturing claims.
- Localized products, contact, and legal actions exist.
- `.agents/skills/maxibud-energy-site/references/technology-about-pages.md` defines the dedicated contract.
- `docs/design-reviews/technology-about-pages.md` records an 18/20 approval score and no blockers.

### Legal and disclosure

- The legal route explains educational-project, concept-product, commercial-status, contact-data, and asset behavior in both locales.
- The full concept-product disclosure remains visible globally and near technical content.
- The site does not claim certification, price, stock, delivery, warranty, commercial availability, customers, partners, or real manufacturing.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, Nuxt and Vue type checking, unit and Nuxt-runtime tests, production build, Chromium installation, and Playwright E2E.
- Tests cover homepage behavior, comparison, all product-detail routes, product 404s, contact schema and endpoint behavior, accessible form states, Technology and About content, localized navigation, and strict 320 px width stability.
- CI preserves Playwright reports after browser failures.

## Validation Results

The complete configured validation sequence passes:

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- 33 unit and Nuxt-runtime tests in 7 files;
- Nuxt client, SSR server, and Nitro node-server production build;
- Chromium installation;
- 28 Playwright E2E tests.

The browser suite verifies:

- Ukrainian and English homepage, comparison, product-detail, contact, technology, about, and legal routes;
- fixed portfolio and specification-group ordering;
- explicit configuration-dependent and unavailable states;
- localized product, comparison, contact, legal, and related-product paths;
- intentional invalid-product 404 behavior;
- contact success, validation, honeypot, and rate-limit behavior;
- accessible diagram labels and form focus behavior;
- one `h1` on Technology and About pages;
- four technology principles and three format explanations;
- verified About facts, capabilities, working method, and scope boundaries;
- no horizontal overflow at 320 × 800 after hydration.

## Defects Found and Corrected

1. A strict Zod tuple produced Nuxt Content type-generation issues; fixed-length arrays now use explicit ordered-group validation.
2. A global body minimum width caused classic-scrollbar overflow at 320 px and was removed.
3. Product-detail and comparison wording drift was corrected so equivalent values match.
4. Contact fields accepted input before hydration and then reset; controls now remain disabled until client mount.
5. Route pages briefly introduced nested main landmarks; route wrappers now remain non-landmark containers.
6. Technology and About E2E link locators matched duplicate global actions; assertions are scoped to route-level containers.
7. Mobile width assertions initially measured the SSR-to-hydration transition instead of the settled interface; tests now wait for hydrated controls.
8. The Contact legal action inherited nowrap behavior and expanded a narrow grid track; the grid now uses `min-w-0` and the action allows safe wrapping.
9. A long Ukrainian Technology H1 produced text-paint overflow even though its element box remained inside the viewport; shared `PageIntro` headings now use safe word wrapping.
10. Nuxt DevTools added irrelevant development UI to CI browser runs and are now disabled when `CI` is set.
11. Mobile overflow tests now report element, section, and paint-layer diagnostics when a regression occurs.

## Known Warnings

- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes platform-specific `sharp` binaries, but deployment is outside the approved project scope.
- Node reports dependency-level `DEP0155` warnings for deprecated trailing-slash package export mappings during production build.
- The release-audit orchestrator has a Windows command-path quoting defect; direct child audits remain available.
- The heuristic content audit can miss disclosure text resolved through locale messages.

## Current Application Scope

Implemented:

1. complete bilingual application shell and navigation;
2. homepage decision flow;
3. product catalog and product-detail routes;
4. full comparison matrix;
5. demonstration consultation form and Nitro endpoint;
6. complete Technology page;
7. complete About page;
8. complete Legal page;
9. structured SEO, error behavior, accessibility work, tests, and CI.

Still incomplete within the approved non-deployment scope:

- final decision on replacing the project-owned SVG product visuals with responsive raster renders;
- manual full-site screen-reader walkthrough;
- manual 200% zoom and keyboard-only walkthrough;
- formal contrast verification;
- formal LCP and CLS measurements;
- release-audit orchestrator and i18n-aware content-audit corrections.

## Immediate Next Milestone

Complete final application release readiness without deployment:

1. decide whether the existing original SVG product visuals are final or replace them with project-owned responsive AVIF/WebP renders;
2. verify every route with keyboard-only navigation and one screen-reader workflow;
3. verify 200% zoom and formal text/control contrast;
4. measure representative LCP and CLS for homepage, product detail, comparison, and contact routes;
5. fix the Windows quoting defect in the release-audit orchestrator;
6. make the content audit understand localized disclosure content rather than relying only on literal page-source text;
7. run the explicit release-check skill and the full validation suite;
8. record a final application-ready decision that explicitly excludes deployment.

## Exit Criteria for the Final Milestone

- product visuals have a documented final status and accessible descriptions;
- keyboard, screen-reader, and 200% zoom checks have recorded evidence;
- formal contrast, LCP, and CLS results are recorded with any limitations;
- release-audit scripts execute correctly on the supported local environment;
- localized disclosures are recognized by the audit;
- all application routes remain stable at 320 px;
- lint, typecheck, tests, E2E, and build pass;
- no deployment work is introduced;
- `CURRENT_STATE.md` records the final application-ready decision.

## Current Release Decision

`NOT READY`

Reason: the application content and functional flows are complete, and deployment is intentionally excluded. Final visual status, manual accessibility review, performance measurements, and release-audit tooling corrections remain before declaring the application ready within the approved scope.
