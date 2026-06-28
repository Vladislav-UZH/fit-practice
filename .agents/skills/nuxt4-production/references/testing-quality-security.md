# Testing, Quality, Security, and Performance

## Purpose

Use this reference to select test environments, enforce TypeScript and lint quality, review security, and prevent performance regressions.

## 1. Test Layers

Use the cheapest layer that proves the behavior.

### Unit tests

Use for:

- parsers;
- filters;
- formatters;
- schema validation;
- query-state normalization;
- pure business logic.

Run in Node when no Nuxt runtime is needed.

### Nuxt-runtime tests

Use for:

- composables requiring Nuxt injection;
- components using Nuxt auto-imports;
- route-aware components;
- plugin behavior;
- Nuxt Content integrations where a runtime is required.

Use `@nuxt/test-utils` with a Nuxt test environment.

### Integration tests

Use for:

- server endpoint behavior;
- content query behavior;
- route-content resolution;
- runtime config integration;
- multi-module interaction.

### End-to-end tests

Use for:

- navigation;
- localization;
- direct route entry;
- mobile menu;
- full forms;
- SSR-visible content;
- browser errors;
- critical responsive flows.

## 2. Recommended Vitest Organization

Current Nuxt guidance supports Vitest projects that separate environments.

Example structure:

```text
test/
├── unit/
├── nuxt/
└── e2e/
```

Do not run every pure function test inside a full Nuxt environment.

Do not mix Nuxt-runtime tests and Nuxt end-to-end tests in one environment if it reduces stability.

## 3. Component Testing

Use `mountSuspended` or `renderSuspended` when the component needs Nuxt runtime context.

Prefer Testing Library style queries for user-visible behavior when practical:

- role;
- label;
- visible name;
- text users can perceive.

Avoid brittle tests of internal refs, implementation-specific class lists, or component internals.

## 4. Test Cases

For changed behavior, select relevant cases:

- valid input;
- invalid input;
- boundary length;
- missing content;
- unknown route;
- loading;
- empty;
- server error;
- localization;
- keyboard use;
- reduced motion;
- mobile viewport;
- direct URL load;
- client navigation.

A test suite with only the happy path is an attractive lie.

## 5. TypeScript

Requirements:

- strict mode;
- no implicit `any`;
- avoid explicit `any`;
- no unchecked cast used merely to silence the compiler;
- narrow unknown input;
- infer from Zod where appropriate;
- preserve generated Nuxt types;
- type props and emits;
- handle nullable async data;
- keep client/server shared types environment-neutral.

Do not edit generated `.nuxt` files.

## 6. ESLint

Use Nuxt’s current ESLint integration or the repository’s established configuration.

Rules:

- do not disable broad rule groups;
- use targeted exceptions with an explanation only when required;
- fix unused imports;
- remove dead code;
- keep formatting tools from fighting ESLint;
- run lint on changed files during development and full lint before completion.

## 7. Security Review

For every change involving input, state, or external data, examine:

- validation;
- authorization;
- authentication assumptions;
- secret handling;
- logging;
- injection;
- redirects;
- file access;
- HTML rendering;
- dependency risk;
- caching;
- personal data exposure.

### Input

- validate server-side;
- trim and normalize;
- set length limits;
- reject unexpected enum values;
- reject malformed JSON;
- avoid trusting client-calculated authorization data.

### Output

Vue escapes normal interpolation. Avoid `v-html` for untrusted content.

If trusted Markdown is rendered, define the trust boundary and ensure the content source cannot be modified by untrusted users.

### Secrets

- private runtime config only;
- never public config;
- never committed;
- never returned to client;
- never printed by diagnostics scripts.

### Logging

Do not log:

- full contact messages;
- passwords;
- tokens;
- API keys;
- raw cookies;
- personal data unless explicitly required and protected.

### Redirects

Do not redirect to an arbitrary user-controlled URL without validation.

### Dependencies

Before adding one:

- confirm need;
- confirm compatibility;
- inspect package maintenance and official source;
- prefer existing framework capability;
- avoid preview releases in production.

## 8. Performance Review

Measure before making large optimizations.

Check:

- LCP asset;
- image dimensions;
- payload size;
- client JavaScript;
- hydration work;
- duplicate data requests;
- route-level code splitting;
- third-party scripts;
- font loading;
- layout shift;
- long tasks.

Rules:

- keep page-critical content server-rendered;
- use responsive images;
- lazy-load below-the-fold media;
- prioritize only the actual LCP image;
- avoid whole icon-set imports;
- use CSS for simple effects;
- avoid unnecessary chart or animation libraries;
- remove unused client plugins;
- avoid client-only wrappers around large static sections.

## 9. Accessibility Testing

Automated checks do not replace manual checks.

Manually verify:

- keyboard-only flow;
- focus order;
- focus visibility;
- dialog/menu focus behavior;
- 320 px layout;
- zoom;
- screen-reader names;
- error announcements;
- reduced-motion behavior;
- contrast in every theme.

## 10. Quality Gate

Before completion:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Use the actual package manager and repository scripts.

If E2E cannot run because browser binaries are unavailable:

- state the exact failure;
- run all remaining checks;
- do not claim E2E passed;
- describe the unverified risk.

## 11. Failure Handling

Do not “fix” failures by:

- deleting tests;
- weakening assertions without justification;
- disabling type checking;
- changing strict mode;
- suppressing hydration warnings;
- catching all errors and returning success;
- hiding console errors;
- excluding broken files from lint.

Find the root cause.

## 12. Review Checklist

- Correct test layer?
- Pure tests kept out of Nuxt runtime?
- Critical user flow covered?
- Type check clean?
- No broad lint suppression?
- Server input validated?
- No secrets exposed?
- No sensitive logs?
- No unsafe HTML?
- No unjustified dependency?
- Performance impact considered?
- Accessibility manually checked?
