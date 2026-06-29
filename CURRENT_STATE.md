# Current Project State

## Status Metadata

- Last reviewed: 2026-06-29
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `feat/contact-consultation-flow`
- Current phase: complete localized demonstration consultation flow
- Application readiness: initialized, buildable, localized, visually structured, product-differentiated, fully comparable, complete through all product-detail routes, and equipped with a complete demonstration consultation flow
- Release readiness: `NOT READY`

## Completed

### Project and skill foundation

- Root instructions and durable project context exist.
- Project, landing-design, Nuxt engineering, and release-check skills exist under `.agents/skills/`.
- Dedicated contracts exist for the product lineup, use-case recommendation, comparison preview, shared technology, final CTA, full comparison matrix, full product-detail pages, and contact consultation flow.
- The MAXIBUD skill prompt routes matching work to all dedicated references.

### Nuxt foundation

- Nuxt 4, Vue 3, TypeScript, SSR, Nitro, Nuxt UI, Nuxt Content, Nuxt Image, and Nuxt i18n are configured.
- The application shell, skip link, header, footer, error page, theme tokens, localized routes, SEO metadata, and canonical URLs exist.
- Ukrainian is the default locale; English uses the `/en` prefix.
- Node.js `24.11.1` and pnpm `11.9.0` are declared with a frozen lockfile.

### Content and server layer

- Typed Ukrainian and English records exist for PowerBox 2400, HomeCore 5, and SiteHub 10.
- Shared Zod schemas validate locales, slugs, concept status, highlights, lineup data, complete comparison data, complete detail content, grouped specifications, documents, value status, product records, and contact requests.
- Nitro endpoints provide localized product lists, detail records with intentional validation and 404 behavior, and a demonstration contact endpoint with structured validation errors.
- Product facts, context, distinction, detail content, comparison values, and visual descriptions remain stored in localized product content.

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
- Mobile exposes all three recommendations as stacked articles.
- A visible statement identifies the guidance as concept navigation rather than engineering sizing.
- `docs/design-reviews/homepage-use-case-recommendation.md` records an 18/20 approval score.

### Homepage comparison preview

- A graphite technical section compares capacity, rated output, and format.
- Values come from `product.lineup.comparison` without duplication in locale files.
- Desktop uses a semantic table and mobile uses stacked `dl` articles.
- `docs/design-reviews/homepage-comparison-preview.md` records an 18/20 approval score.

### Homepage shared technology and final CTA

- Exactly three approved shared principles explain chemistry, form-factor-specific architecture, and context-specific status or monitoring.
- An original inline SVG diagram is labeled as portfolio logic rather than electrical guidance.
- Localized technology, products, and demonstration consultation routes exist.
- Visible copy rejects installation, wiring, repair, compatibility, price, delivery, availability, and engineering-sizing implications.
- `docs/design-reviews/homepage-technology-cta.md` records an 18/20 approval score.

### Full comparison matrix

- Localized routes exist at `/products/compare` and `/en/products/compare`.
- Every localized product record owns twelve equivalent comparison values.
- Ordinary, configuration-dependent, and unavailable states are explicit.
- Desktop uses one semantic grouped table; mobile uses three complete product-by-product articles.
- Localized product-detail, products-index, and consultation actions exist.
- `docs/design-reviews/full-comparison-matrix.md` records an 18/20 approval score.

### Full product details

- One dynamic route and one reusable `ProductDetail` component serve all three products in Ukrainian and English.
- Every localized record contains a tagline, detailed overview, four or five features, four conceptual applications, a product-detail visual description, five specification groups, optional document metadata, and localized SEO copy.
- The schema enforces `conceptProduct: true`, the five-group order, structured values, and repository document paths.
- Detail values reuse ordinary, configuration-dependent, and unavailable states and remain consistent with the comparison matrix.
- The hero reuses original project-owned SVG silhouettes with localized accessible descriptions.
- Technical values use semantic `dl`, `dt`, and `dd` structures; no wide mobile table or collapsed core content exists.
- Every product currently declares `documents: []` because no repository-owned conceptual document exists; no inactive or fake download action is rendered.
- Localized comparison, products-index, product-aware consultation, and related-product paths exist.
- Unknown slugs and missing records retain intentional 404 behavior.
- The global 20 rem body minimum was removed after browser inspection exposed horizontal scrolling with classic scrollbars at 320 px.
- `docs/design-reviews/full-product-details.md` records an 18/20 approval score.

### Demonstration consultation flow

- Localized contact routes exist at `/contact` and `/en/contact`.
- Product-detail consultation CTAs preselect only approved `product` query values; unknown values fall back to `unsure` without redirecting.
- `shared/schemas/contact.ts` defines the shared contact contract with approved products, inquiry types, locale, trimming, email normalization, length limits, consent, optional fields, and honeypot validation.
- `server/api/contact.post.ts` validates requests authoritatively, applies basic in-memory rate limiting, returns safe structured errors, and does not echo personal data.
- The contact form exposes initial, validating, submitting, success, field-error, server-error, and rate-limit states.
- Visible contact and legal copy state that the endpoint is a demonstration validation service and does not claim real sales delivery, permanent storage, pricing, availability, delivery, ordering, engineering sizing, or compatibility verification.
- Form labels, field-level errors, `aria-invalid`, `aria-describedby`, live status text, error summary, first-invalid focus, keyboard-visible submit focus, and 320 px no-overflow behavior are covered.
- Visible form controls and submit stay disabled until client mount to prevent pre-hydration input loss.
- The legal page now includes explicit educational-project, concept-product, commercial-status, contact-data, and asset disclosures.
- `.agents/skills/maxibud-energy-site/references/contact-consultation-flow.md` defines the dedicated contact-flow contract.
- `docs/design-reviews/contact-consultation-flow.md` records a 19/20 approval score.

### Quality and automation

- GitHub Actions runs frozen installation, ESLint, type checking, unit tests, Nuxt-runtime tests, production build, Chromium, and Playwright E2E.
- Tests cover homepage behavior, comparison behavior, all product-detail routes, group order, structured states, value consistency, absent documents, localized paths and metadata, 404 behavior, contact schema validation, contact endpoint errors, contact form states, keyboard focus, and strict 320 px width stability.
- CI preserves Playwright reports after browser failures.

## Validation Results

Executed locally on Windows x64 with Node.js `22.20.0` and pnpm `11.9.0`.

Passed on the application head:

- `corepack pnpm install --frozen-lockfile`;
- `corepack pnpm lint`;
- `corepack pnpm typecheck`;
- `corepack pnpm test`: 31 tests in 6 files;
- `$env:NUXT_PUBLIC_SITE_URL='http://localhost:3000'; corepack pnpm build`: Nuxt client, SSR server, and Nitro node-server build;
- `corepack pnpm exec playwright install chromium`;
- `CI=1 node node_modules/@playwright/test/cli.js test`: 25 Playwright tests.

Browser inspection additionally verified:

- desktop at 1280 × 900;
- mobile at 320 × 800;
- one `h1`;
- five specification groups in fixed order;
- no document section when no file exists;
- English document language and localized routes;
- no browser console errors;
- `innerWidth = 320`, `clientWidth = 305`, and `scrollWidth = 305` after the overflow correction.
- contact flow at 320 x 800 with product preselection, visible submit action, and no horizontal overflow.
- contact form focus movement to the first invalid field after validation.

### Defects Found and Corrected in This Milestone

1. Nuxt Content generated incompatible TypeScript unions for a strict Zod tuple. The schema now uses a fixed-length array with explicit ordered-group validation.
2. The global `body` minimum width created horizontal scrolling when classic scrollbars reduced a 320 px viewport to a 305 px document client width. The minimum was removed and E2E now compares scroll width with client width.
3. PowerBox monitoring differed between detail and comparison records by one conjunction. The detail value now exactly matches the comparison value.
4. A stale manually started development server served the previous product page during browser inspection. Validation was repeated on a clean current-worktree server.
5. A Nuxt-runtime test used `wrapper.get(...).exists()`, which is not a valid Vue Test Utils API. The assertion now uses `find(...).exists()`.
6. Playwright label locators for the product selector matched both an `aria-labelledby` section and the form control. The assertions are scoped to `data-testid="contact-form"`.
7. Browser automation exposed pre-hydration input loss: fields were editable before Vue mounted, then hydration reset the reactive form state. Visible controls and submit are now disabled until `onMounted`.
8. Contact and legal pages briefly introduced nested `<main>` landmarks under the existing layout `<main id="main-content">`. Route-level wrappers now use non-landmark `<div>` elements.

## Known Warnings

- Rollup reports third-party sourcemap and `PURE` annotation warnings during production build.
- Nuxt Image includes platform-specific `sharp` binaries; deployment dependencies must be rebuilt for the target architecture.
- Node reports dependency-level `DEP0155` warnings for deprecated trailing slash package export mappings during production build.
- The release-audit orchestrator does not quote the Windows Node path and fails before its child checks; individual audit scripts were run directly.
- The heuristic content audit can miss disclosure text that is resolved through locale messages.

## Current Application Scope

Implemented:

1. homepage hero and portfolio visual;
2. factual evidence strip;
3. product lineup;
4. use-case recommendation;
5. compact comparison preview;
6. shared technology chapter;
7. final CTA;
8. full localized comparison matrix;
9. full localized product-detail pages and grouped specifications;
10. localized demonstration consultation flow.

Still incomplete:

- final product renders and responsive image assets;
- complete technology and about pages;
- manual full-page screen-reader, 200% zoom, contrast, LCP, and CLS review;
- deployment configuration.

## Immediate Next Milestone

Implement the complete localized technology and about informational pages:

1. replace the remaining placeholder `technology` page with a full conceptual platform explanation;
2. replace the remaining placeholder `about` page with a complete educational-project and MAXIBUD LLC context page;
3. keep all technical content conceptual and avoid installation, repair, compatibility, warranty, certification, and commercial claims;
4. use localized content and SEO metadata in both Ukrainian and English;
5. preserve semantic HTML, one `h1`, accessible navigation, visible disclosures, and 320 px no-overflow behavior;
6. add or update Nuxt-runtime and Playwright coverage for both locales;
7. add dedicated skill references and design reviews if the implementation introduces new page contracts;
8. update this state file with exact validation results.

## Exit Criteria for the Next Milestone

- technology and about routes render complete localized content in Ukrainian and English;
- shared portfolio technology is explained without real installation, repair, wiring, or engineering guidance;
- about copy identifies the educational software project and avoids unverified company history, employees, factories, partners, markets, or production claims;
- concept disclosure remains visible and semantically equivalent in both locales;
- headings, links, and mobile layout remain accessible at 320 px;
- lint, typecheck, tests, E2E, and build pass;
- `CURRENT_STATE.md` records exact results.

## Current Release Decision

`NOT READY`

Reason: the homepage, full comparison, product-detail flows, and demonstration contact flow are complete, but final visual assets, complete technology and about pages, manual accessibility and performance review, and deployment configuration remain incomplete.
