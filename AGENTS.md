# Repository Instructions

## 1. Project Identity

This repository contains the educational **MAXIBUD ENERGY** product showcase website.

The website presents three fictional concept products associated with MAXIBUD LLC:

- MAXIBUD PowerBox 2400
- MAXIBUD HomeCore 5
- MAXIBUD SiteHub 10

Treat every product, specification, document, and commercial statement as conceptual unless the repository contains explicit verified evidence stating otherwise.

## 2. Instruction Priority

Follow instructions in this order:

1. The current user request.
2. The nearest applicable `AGENTS.override.md`.
3. The nearest applicable `AGENTS.md`.
4. Repository-root instructions.
5. Relevant explicitly invoked skills.
6. Existing repository conventions.

When instructions conflict, follow the higher-priority instruction and report the conflict if it materially affects the result.

Do not silently ignore an applicable instruction.

## 3. Required Working Method

Before editing:

1. Inspect the repository structure.
2. Read every applicable `AGENTS.md` and `AGENTS.override.md`.
3. Read `PROJECT_CONTEXT.md` and `CURRENT_STATE.md` when they exist.
4. Inspect `package.json`, the lockfile, `nuxt.config.ts`, `content.config.ts`, TypeScript configuration, lint configuration, and test configuration when present.
5. Inspect the files directly related to the requested change.
6. Identify existing patterns before creating new abstractions.
7. Check the working tree and preserve unrelated user changes.

During implementation:

1. Make the smallest complete change that satisfies the request.
2. Preserve working architecture unless a change is required and justified.
3. Complete the full user-visible flow, including loading, empty, success, validation, and error states where relevant.
4. Add or update tests for changed behavior.
5. Validate incrementally instead of postponing all checks until the end.
6. Record material assumptions in the final report.

Do not stop after scaffolding when the requested behavior can be completed.

## 4. Package Manager and Runtime

Determine the package manager from the lockfile:

- `pnpm-lock.yaml`: use `pnpm`
- `package-lock.json`: use `npm`
- `yarn.lock`: use `yarn`
- `bun.lock` or `bun.lockb`: use `bun`

For a new repository, use `pnpm`.

Rules:

- Keep exactly one package-manager lockfile.
- Do not replace or regenerate a lockfile without a concrete reason.
- Do not install production dependencies without a demonstrated need.
- Prefer stable package versions compatible with the installed Nuxt version.
- Do not use beta, release-candidate, nightly, or edge packages unless the repository already depends on them or the user explicitly requires them.
- Use a currently supported Node.js LTS release compatible with the selected Nuxt version.
- Declare the supported Node.js version in `package.json`.

## 5. Core Technical Direction

Use the repository's installed versions as the source of truth.

For a new implementation, the intended stack is:

- Nuxt 4
- Vue 3
- TypeScript
- server-side rendering
- Nitro server routes
- Nuxt UI
- Nuxt Content
- Nuxt Image
- Nuxt i18n
- Zod
- Vitest
- Playwright
- ESLint

Nuxt 4 application code belongs under `app/`.

Use:

- Vue Single File Components
- `<script setup lang="ts">`
- Composition API
- strict TypeScript
- Nuxt-native routing and data-fetching patterns
- server-rendered content for indexable pages
- shared schemas for client and server validation

Do not copy configuration from old Nuxt 3 tutorials without verifying compatibility with the installed Nuxt 4 and module versions.

For version-sensitive behavior, prefer:

1. installed package types and source;
2. official documentation;
3. repository tests;
4. minimal verified experiments.

Do not invent framework APIs.

## 6. Architecture Boundaries

Keep concerns separated:

- Vue components render interface and coordinate local interaction.
- Nuxt pages compose route-level behavior.
- Composables contain reusable application logic.
- Nuxt Content stores product and long-form page content.
- Shared schemas define cross-boundary validation and types.
- Nitro routes handle server-side operations.
- Tests verify behavior rather than internal implementation details.

Rules:

- Do not embed duplicated product content in Vue components.
- Do not create separate hardcoded pages for each product.
- Do not fetch primary page content only in `onMounted`.
- Do not introduce client-only rendering for SEO-critical content.
- Do not access browser globals without client guards.
- Do not create a database, authentication system, CMS admin panel, or state-management layer unless the requested feature requires one.
- Do not abstract code before a stable repeated pattern exists.
- Do not create wrapper components that add no behavior or semantic value.

## 7. Product Truth and Content Integrity

The site is a demonstration project.

Never claim or imply that concept products are:

- commercially available;
- certified;
- independently tested;
- legally approved;
- patented;
- deployed by real customers;
- supported by real testimonials;
- manufactured at a known factory;
- covered by a real warranty;
- compliant with named regulations without evidence.

Do not invent:

- certificates;
- laboratory reports;
- customer logos;
- partner logos;
- awards;
- sales figures;
- production capacity;
- named clients;
- market leadership;
- verified safety guarantees.

Use restrained terms such as:

- concept product;
- illustrative specification;
- designed for;
- intended use;
- demonstration service.

A visible concept-product disclosure must remain in the footer and legal content.

Do not present the website as a source of real battery installation, repair, assembly, or electrical safety instructions.

## 8. Scope Boundaries

The default product is a bilingual informational product website and lead-generation demonstration.

Unless explicitly requested, do not implement:

- shopping cart;
- checkout;
- payment;
- online ordering;
- product pricing;
- account registration;
- authentication;
- customer dashboard;
- inventory;
- warehouse integration;
- CRM or ERP integration;
- real-time hardware telemetry;
- firmware;
- battery-management algorithms;
- real engineering calculations;
- AI chatbot;
- fabricated PDF certificates;
- fake persistence of contact submissions.

When a contact endpoint operates in demo mode, the interface and legal copy must state truthfully that submissions are accepted by a demonstration service and are not permanently stored unless persistence is actually configured.

## 9. Localization

Supported locales:

- Ukrainian: default locale
- English: `/en` prefix

Requirements:

- Translate navigation, actions, validation messages, metadata, system states, and legal notices.
- Keep product content available in both locales.
- Preserve the equivalent route when switching languages whenever possible.
- Do not expose untranslated keys.
- Do not mix Ukrainian and English interface copy on one localized page.
- Test layouts with longer translated content.
- Keep brand and model names unchanged.

## 10. UI and Accessibility

Target WCAG 2.2 AA.

Required practices:

- semantic HTML;
- one clear page-level heading;
- logical heading order;
- keyboard-accessible navigation;
- visible focus states;
- accessible mobile navigation;
- labels for form controls;
- accessible validation messages;
- status announcements for asynchronous form states;
- sufficient contrast;
- reduced-motion support;
- meaningful image alternatives;
- no information conveyed only by color;
- links for navigation and buttons for actions;
- usable layouts at 320 px width;
- touch targets approximately 44 by 44 CSS pixels where practical.

Prefer native HTML semantics over unnecessary ARIA.

Do not remove accessibility behavior to improve visual appearance or Lighthouse scores.

## 11. Visual and Asset Rules

The visual direction is technical, restrained, durable, and modern.

Prefer:

- strong typography;
- precise spacing;
- clear technical information;
- original local SVG or raster assets;
- restrained accent usage;
- responsive image handling;
- explicit image dimensions or aspect ratios.

Avoid:

- copied commercial product images;
- copied layouts or wording from reference websites;
- generic stock-photo filler;
- excessive gradients;
- excessive glass effects;
- excessive animation;
- fake dashboards;
- external image hotlinking;
- autoplay media;
- decorative motion that blocks access to content.

All committed assets must have a clear purpose and appropriate licensing or original authorship.

## 12. Security and Privacy

For all user input:

- validate on the server;
- reuse a shared validation schema where practical;
- trim and normalize strings;
- enforce reasonable length limits;
- reject malformed input;
- avoid logging personal data;
- return safe structured errors;
- do not expose stack traces in production;
- do not use `v-html` with untrusted content;
- do not expose secrets through public runtime configuration;
- do not commit `.env` files or credentials.

For the contact form, include:

- server-side Zod validation;
- a honeypot field;
- basic rate limiting;
- truthful success messaging;
- no sensitive production logging.

Do not add a cookie banner when the application uses no non-essential cookies or tracking.

## 13. SEO and Performance

Indexable routes must render meaningful content on the server.

Each public page must have appropriate:

- title;
- description;
- canonical URL;
- Open Graph metadata;
- locale metadata;
- language alternates where applicable.

Product pages must not include fabricated:

- prices;
- availability;
- ratings;
- reviews;
- GTIN values;
- commercial SKUs.

Performance rules:

- use Nuxt Image for raster assets where appropriate;
- specify image dimensions or aspect ratio;
- lazy-load below-the-fold media;
- prioritize only the actual LCP asset;
- avoid unnecessary client-side dependencies;
- prefer CSS for simple visual behavior;
- do not import complete icon libraries;
- do not add analytics unless requested and configured;
- investigate hydration warnings and layout shifts.

## 14. Code Quality

TypeScript:

- keep strict mode enabled;
- do not use implicit `any`;
- avoid explicit `any`;
- derive types from schemas where practical;
- handle nullable data explicitly;
- keep shared domain types in one authoritative location.

Vue and Nuxt:

- use localized Nuxt routing utilities for internal links;
- use SSR-safe data fetching;
- use `createError` for route failures;
- avoid hydration mismatches;
- use stable keys for rendered lists;
- keep page components focused on composition.

General:

- remove dead code;
- remove unused imports;
- remove commented-out experiments;
- do not leave required work as TODO comments;
- avoid disabling lint or type rules merely to silence errors;
- document only non-obvious decisions;
- keep README instructions synchronized with the repository.

## 15. Testing

Add tests proportional to the change.

Priorities:

- pure domain logic: unit tests;
- content resolution and server routes: integration tests;
- navigation, localization, product flows, and contact form: end-to-end tests;
- interactive reusable components: component tests when useful.

Tests must verify observable behavior.

Do not write tests that only reproduce implementation details.

For relevant changes, cover:

- valid behavior;
- invalid input;
- empty state;
- failure state;
- locale behavior;
- invalid product slug;
- keyboard interaction;
- mobile layout where practical.

## 16. Validation Before Completion

Run the commands supported by the repository.

For a standard `pnpm` setup, the expected final sequence is:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Rules:

- Run focused checks during development.
- Run the full applicable suite before reporting completion.
- Fix failures instead of suppressing them.
- Review warnings related to hydration, accessibility, content validation, missing translations, invalid HTML, and dependency compatibility.
- Never claim that a command passed unless it was executed successfully.
- If a check cannot run, report the exact command, cause, and remaining risk.

## 17. Git and File Safety

- Preserve unrelated working-tree changes.
- Do not delete or rewrite user work without explicit need.
- Do not run destructive Git commands.
- Do not reset, clean, rebase, force-push, or amend history unless explicitly requested.
- Do not create commits unless requested.
- Do not expose internal identifiers or secrets.
- Do not modify generated files manually when a source file or generator exists.
- Do not add large binary files without justification.

## 18. Completion Report

End implementation tasks with a factual report containing:

### Completed

- implemented behavior;
- important architectural decisions;
- significant files changed.

### Validation

- each command executed;
- exact pass or failure status.

### Assumptions

- only assumptions that materially affected the implementation.

### Remaining limitations

- real unresolved limitations;
- skipped checks;
- demo-only behavior;
- intentionally excluded non-goals.

When a milestone materially changes repository status, update `CURRENT_STATE.md` in the same change. Do not turn `AGENTS.md` into a progress log.

Do not claim production readiness when required validation has not passed.
