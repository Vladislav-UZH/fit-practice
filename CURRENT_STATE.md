# Current Project State

## Status Metadata

- Last reviewed: 2026-06-28
- Repository: `Vladislav-UZH/fit-practice`
- Reviewed branch: `main`
- Current phase: instruction and Codex-skill foundation
- Application readiness: not initialized
- Release readiness: `NOT READY`

This file records current progress and must be updated after material milestones.

## Completed

### Repository instructions

- Root `AGENTS.md` created.
- Permanent engineering, truth, localization, accessibility, security, testing, and Git rules defined.

### Project skill

Created `.agents/skills/maxibud-energy-site/` with the project skill, product brief, information architecture, design system, content model, fictional product data, localized copy, templates, and interface metadata.

### Nuxt engineering skill

Created `.agents/skills/nuxt4-production/` with reusable Nuxt architecture, rendering, data, server, UI, i18n, testing, security, deployment, diagnostics, and inspection guidance.

### Release-check skill

Created `.agents/skills/maxibud-release-check/` with an explicit-only release skill, acceptance checklists, static checkers, and an audit orchestrator.

## Included by This Context Update Patch

The patch:

1. adds `README.md`;
2. adds `PROJECT_CONTEXT.md`;
3. adds `CURRENT_STATE.md`;
4. adds `CHAT_HANDOFF.md`;
5. updates `AGENTS.md` to require reading context files;
6. improves `check-content.mjs`;
7. removes packaging-only `INVENTORY.json` files.

After applying the patch, this section describes the merged repository state.

## Current Application State

The Nuxt application layer has not been initialized on the reviewed `main` branch.

Expected missing items include:

- `package.json`;
- package-manager lockfile;
- `nuxt.config.ts`;
- `content.config.ts`;
- `app/`;
- `content/`;
- `i18n/`;
- `server/`;
- tests;
- CI;
- deployment configuration.

This absence is expected at the current phase but prevents any release-ready status.

## Known Constraints

### GitHub connector write access

The connected GitHub integration could read the repository but returned `403 Resource not accessible by integration` for branch creation and file updates.

Repository updates were therefore prepared as Git patches instead of being pushed directly.

### Release audit before application initialization

The release audit correctly reports application files as missing blockers until the Nuxt project exists.

## Validated Audit Fix

The revised content checker was validated with:

```bash
node --check .agents/skills/maxibud-release-check/scripts/check-content.mjs
```

A fixture containing three products, both locales, legal text using `not certified`, and document entries with `available: false` returned:

```text
PASS
0 findings
```

The revised scanner:

- limits scanning to application and user-facing sources;
- excludes `.agents/`, tests, build output, and dependencies;
- ignores supported negated claims;
- checks documents only when marked `available: true`;
- accepts approved Ukrainian and English numeric formats.

## Immediate Next Milestone

Initialize the Nuxt 4 application foundation.

Required initial deliverables:

1. `package.json`;
2. `pnpm-lock.yaml`;
3. Node engine declaration;
4. `nuxt.config.ts`;
5. `app/app.vue`;
6. default layout;
7. Nuxt UI setup;
8. Nuxt Content setup;
9. Ukrainian and English i18n setup;
10. lint, type-check, unit-test, E2E, and build scripts;
11. `.env.example`;
12. updated README setup instructions.

## Recommended Next Codex Instruction

```text
Use $maxibud-energy-site and $nuxt4-production.

Read AGENTS.md, PROJECT_CONTEXT.md, CURRENT_STATE.md, and the relevant
skill files. Inspect the current repository state.

Initialize the Nuxt 4 application foundation with pnpm, TypeScript, SSR,
Nuxt UI, Nuxt Content, Nuxt Image, Nuxt i18n, Zod, ESLint, Vitest, Nuxt
test utilities, and Playwright.

Do not implement all marketing pages yet. Complete and validate the
foundation, application shell, localization skeleton, content collection
schema, test configuration, and build pipeline.

Run every applicable check and update CURRENT_STATE.md with exact results.
```

## Exit Criteria for the Next Milestone

The foundation milestone is complete only when:

- clean installation from lockfile works;
- development server starts;
- lint passes;
- type check passes;
- initial tests pass;
- production build passes;
- Ukrainian and English routes render;
- Nuxt Content schema loads;
- no known hydration error exists;
- `CURRENT_STATE.md` is updated with exact command results.

## Current Release Decision

`NOT READY`

Reason: no application package, build, routes, localized product content, tests, or deployment output yet.

This is a project-phase status, not a failure of the skill composition.
