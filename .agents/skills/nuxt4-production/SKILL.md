---
name: nuxt4-production
description: Implement, review, debug, or refactor production Nuxt 4 applications using Vue 3, TypeScript, SSR, Nitro, Nuxt Content, Nuxt UI, Nuxt i18n, testing, SEO, accessibility, and deployment practices. Use for Nuxt architecture, routing, data fetching, server APIs, hydration, modules, quality, build, and deployment work. Do not use for project-specific product copy, brand decisions, hardware engineering, or generic non-Nuxt applications.
---

# Nuxt 4 Production Engineering

## Purpose

Use this skill to make technically correct, maintainable, secure, accessible, and verifiable changes to Nuxt 4 applications.

This is a reusable engineering skill. It does not define any project’s product requirements, visual identity, domain content, or business rules. Repository instructions and project-specific skills remain authoritative for those concerns.

## Core Principle

Treat the installed repository as the source of truth.

Nuxt and its modules evolve. Before using a framework API, determine the installed versions and verify that the proposed implementation matches them. Do not copy configuration from an unrelated tutorial merely because it has confident formatting.

## Activation Boundaries

Use this skill for:

- creating or restructuring a Nuxt 4 application;
- Vue and Nuxt routing;
- layouts, middleware, plugins, composables, and utilities;
- server-side rendering and hydration;
- `useFetch`, `useAsyncData`, and server data flow;
- Nitro API routes and server utilities;
- runtime configuration and environment variables;
- Nuxt Content collections and queries;
- Nuxt i18n routing and locale switching;
- Nuxt UI installation, theming, and accessible components;
- SEO metadata and structured page behavior;
- accessibility and performance;
- unit, Nuxt-runtime, integration, and end-to-end tests;
- build, prerendering, and deployment;
- diagnosing Nuxt-specific failures.

Do not use this skill for:

- project-specific copywriting or brand strategy;
- deciding fictional product specifications;
- e-commerce domain logic without a Nuxt engineering task;
- non-Nuxt Vue applications;
- real electrical or battery engineering;
- replacing explicit repository instructions.

## Instruction Priority

Apply instructions in this order:

1. current user request;
2. applicable `AGENTS.override.md`;
3. applicable `AGENTS.md`;
4. explicitly invoked project-specific skill;
5. this reusable Nuxt skill;
6. existing repository conventions;
7. framework defaults.

When a higher-priority instruction conflicts with this skill, follow the higher-priority instruction and note any material engineering risk.

## Required Workflow

### 1. Inspect before editing

Before modifying code:

1. Read applicable `AGENTS.md` and `AGENTS.override.md`.
2. Inspect the repository structure.
3. Inspect:
   - `package.json`;
   - lockfile;
   - `nuxt.config.ts`;
   - `app.config.ts`;
   - `content.config.ts`;
   - TypeScript configuration;
   - ESLint configuration;
   - Vitest configuration;
   - Playwright configuration;
   - deployment configuration;
   - files directly related to the request.
4. Run the bundled inspection script when practical:

```bash
node /path/to/nuxt4-production/scripts/inspect-nuxt-project.mjs .
```

5. Check the working tree and preserve unrelated changes.
6. Record the installed Nuxt and module versions.

### 2. Classify the task

Choose the smallest relevant task category:

- foundation and configuration;
- routing and page composition;
- SSR and hydration;
- data fetching;
- Nitro server endpoint;
- content model;
- localization;
- UI and theming;
- SEO;
- accessibility;
- testing;
- performance;
- build or deployment;
- diagnosis or refactor.

Read only the references required for the selected category.

### 3. Verify version-sensitive APIs

Use this order of evidence:

1. installed package types;
2. installed package source or generated Nuxt types;
3. official documentation matching the installed major version;
4. repository tests;
5. a minimal local experiment.

Do not invent module options, composables, or component props.

### 4. Plan the smallest complete change

A complete change includes relevant:

- implementation;
- loading state;
- empty state;
- error state;
- validation;
- localization;
- accessibility;
- tests;
- documentation;
- build compatibility.

Do not stop at scaffolding when the requested flow can be completed.

### 5. Implement incrementally

After each meaningful phase:

- run focused lint or type checks;
- run focused tests;
- inspect browser and server warnings;
- fix hydration or accessibility issues immediately.

### 6. Run final validation

Use repository scripts when available.

Typical sequence:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Adapt commands to the detected package manager.

Never claim a check passed unless it was executed successfully.

## Reference Selection

Read the following files only when relevant.

| Task | Reference |
|---|---|
| structure, routing, rendering, hydration | `references/architecture-and-rendering.md` |
| data fetching, Content, Nitro, runtime config | `references/data-content-and-server.md` |
| Nuxt UI, i18n, SEO, accessibility | `references/ui-i18n-seo-accessibility.md` |
| tests, TypeScript, security, performance | `references/testing-quality-security.md` |
| build, prerendering, deployment, diagnostics | `references/deployment-and-diagnostics.md` |
| official documentation map and version checks | `references/official-sources.md` |

## Engineering Defaults

Use these defaults unless repository requirements justify another choice.

### Application structure

- Keep Nuxt 4 application code under `app/`.
- Keep server code under `server/`.
- Keep content under `content/`.
- Keep shared environment-neutral types and schemas under `shared/`.
- Keep static public files under `public/`.
- Keep processed styles and imported assets under `app/assets/`.

### Rendering

- Keep universal rendering enabled by default.
- Use prerendering or route rules when they materially improve a content-oriented route.
- Do not disable SSR globally merely to avoid fixing hydration defects.
- Do not use browser globals during server rendering.
- Keep server and client initial output deterministic.

### Data fetching

- Use `useFetch` for straightforward HTTP or Nitro requests.
- Use `useAsyncData` for custom asynchronous data sources, Content queries, or composed fetching.
- Give reusable `useAsyncData` wrappers explicit stable keys.
- Use data-fetching composables for data, not side effects.
- Handle `status`, `error`, and nullable data.
- Do not move SEO-critical content into `onMounted`.

### Server code

- Use Nitro handlers under `server/api` or `server/routes`.
- Validate all external input on the server.
- Keep secrets in private runtime config.
- Expose only intentional public values through `runtimeConfig.public`.
- Return structured errors without stack traces or sensitive details.
- Keep server utilities independent from browser APIs.

### Content

- Use typed Nuxt Content collections.
- Define collections in root `content.config.ts`.
- Validate frontmatter with a schema.
- Query by stable identifiers and locale where applicable.
- Throw a real 404 for missing route content.
- Do not duplicate long-form content inside Vue components.

### Localization

- Use Nuxt i18n route utilities.
- Preserve equivalent routes when switching locale.
- Do not mutate locale state by assigning directly when module APIs are required.
- Localize metadata, validation, status messages, and error pages.
- Treat missing translation keys as defects.

### UI

- Prefer semantic HTML first.
- Use Nuxt UI components where they reduce custom code and preserve accessibility.
- Wrap the application with `UApp` when required by installed Nuxt UI features.
- Keep design tokens centralized.
- Avoid unnecessary component wrappers.
- Respect reduced motion and keyboard navigation.

### TypeScript

- Keep strict mode.
- Avoid `any`.
- Derive types from Zod or authoritative schemas where useful.
- Do not duplicate domain types across client and server.
- Handle `null` and `undefined` explicitly.
- Use installed generated Nuxt types instead of recreating them.

### Testing

- Unit-test pure logic in a Node environment.
- Use the Nuxt test environment only for code requiring Nuxt runtime behavior.
- Keep end-to-end tests separate from Nuxt-runtime tests.
- Test observable behavior.
- Cover valid, invalid, empty, error, locale, and route-not-found states as relevant.

## Anti-Patterns

Do not:

- put the entire application in one page component;
- copy an old Nuxt 3 directory structure into a Nuxt 4 project without cause;
- set `ssr: false` to hide hydration problems;
- fetch primary content only after mount;
- access `window`, `document`, `localStorage`, or current time during SSR without an SSR-safe strategy;
- use unstable random values in initial server-rendered markup;
- create duplicate `useAsyncData` keys with inconsistent options;
- log secrets or personal data;
- expose server secrets through public runtime config;
- hardcode content that belongs in a content collection;
- manually concatenate locale prefixes;
- render untrusted HTML;
- suppress TypeScript, hydration, or accessibility errors instead of fixing them;
- add a dependency for trivial functionality;
- report unexecuted tests as passing.

## Completion Criteria

A Nuxt task is complete only when relevant criteria are met:

- implementation matches installed package APIs;
- SSR output is meaningful;
- no known hydration mismatch remains;
- route failures produce intentional errors;
- input is validated on the server;
- localized routes and metadata work;
- keyboard and screen-reader behavior is reasonable;
- tests cover changed behavior;
- lint and type checks pass;
- production build passes;
- skipped validation is explicitly reported.

## Final Report

Report:

### Completed

- user-visible behavior;
- significant architecture decisions;
- relevant files changed.

### Validation

For each executed command, state:

- command;
- result;
- material warnings.

### Assumptions

List only assumptions that affected implementation.

### Remaining limitations

State actual unresolved risks, skipped checks, provider configuration, or environment limitations.

Do not call the repository production-ready unless the applicable validation suite passed.
