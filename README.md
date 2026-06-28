# MAXIBUD ENERGY Practice Project

Educational repository for a bilingual Nuxt 4 product showcase website for the fictional **MAXIBUD ENERGY** product line.

The project is currently in the repository-instruction and Codex-skill foundation phase. The Nuxt application layer has not yet been initialized.

## Start Here

Read these files in order:

1. [`AGENTS.md`](AGENTS.md)
2. [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md)
3. [`CURRENT_STATE.md`](CURRENT_STATE.md)
4. [`CHAT_HANDOFF.md`](CHAT_HANDOFF.md)

`PROJECT_CONTEXT.md` contains stable decisions. `CURRENT_STATE.md` contains progress, blockers, validation, and the next milestone.

## Product Scope

The website will present three fictional concept products:

- MAXIBUD PowerBox 2400
- MAXIBUD HomeCore 5
- MAXIBUD SiteHub 10

MAXIBUD ENERGY is a conceptual product line created for an educational software demonstration. Product specifications are illustrative and do not represent certified commercial hardware.

## Codex Instruction Composition

```text
.
├── AGENTS.md
├── PROJECT_CONTEXT.md
├── CURRENT_STATE.md
├── CHAT_HANDOFF.md
└── .agents/
    └── skills/
        ├── maxibud-energy-site/
        ├── maxibud-release-check/
        └── nuxt4-production/
```

### `AGENTS.md`

Permanent repository rules covering working method, technical direction, product-truth boundaries, localization, accessibility, security, testing, Git safety, and completion reporting.

### `maxibud-energy-site`

Project-specific source of truth for product strategy, audiences, information architecture, page requirements, visual system, product content, localized copy, and disclosures.

### `nuxt4-production`

Reusable Nuxt engineering guidance for architecture, SSR, hydration, routing, data fetching, Nitro, Content, i18n, UI, testing, security, performance, and deployment.

### `maxibud-release-check`

Explicit final quality gate for product consistency, required routes, localization, accessibility, SEO, lint, type checking, tests, and production build.

## New Chat Handoff

Use the ready-to-paste prompt in `CHAT_HANDOFF.md`. The new conversation must reconstruct context from the repository before changing code.

## Recommended Initial Codex Invocation

```text
Use $maxibud-energy-site and $nuxt4-production.

Read AGENTS.md, PROJECT_CONTEXT.md, CURRENT_STATE.md, README.md, and the
relevant skill files. Inspect the repository and implement the next
milestone recorded in CURRENT_STATE.md.

Use installed package versions as the source of truth. Work
incrementally, run every applicable validation command, and update
CURRENT_STATE.md with exact results.
```

## Static Release Audit

Before the Nuxt application exists, the audit correctly reports missing application files as blockers.

```bash
node .agents/skills/maxibud-release-check/scripts/audit.mjs .
```

After package scripts exist:

```bash
node .agents/skills/maxibud-release-check/scripts/audit.mjs . \
  --run-project-checks
```

Machine-readable output:

```bash
node .agents/skills/maxibud-release-check/scripts/audit.mjs . \
  --run-project-checks \
  --json
```

## Context Maintenance

Update:

- `PROJECT_CONTEXT.md` when stable decisions change;
- `CURRENT_STATE.md` after material milestones;
- `CHAT_HANDOFF.md` only when the loading workflow changes;
- `AGENTS.md` only for permanent repository rules.

Do not duplicate transient progress across every file. Future models are already capable of confusion without additional assistance.

## Current Status

See [`CURRENT_STATE.md`](CURRENT_STATE.md) for the authoritative progress snapshot.
