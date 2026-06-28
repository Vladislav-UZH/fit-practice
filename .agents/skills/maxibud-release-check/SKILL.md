---
name: maxibud-release-check
description: Audit the MAXIBUD ENERGY repository before submission, review, preview deployment, or release. Validate repository instructions, product content, bilingual coverage, required routes, concept-product disclosures, accessibility, SEO, tests, and production build. Use explicitly for final quality gates, release readiness, or comprehensive audits. Do not use for routine feature implementation, generic Nuxt projects, or real hardware certification.
---

# MAXIBUD ENERGY Release Check

## Purpose

Use this skill as the final quality gate for the MAXIBUD ENERGY educational product website.

This skill verifies that the repository is:

- structurally coherent;
- internally consistent;
- bilingual;
- truthful about fictional products;
- accessible enough for submission;
- SEO-ready;
- technically buildable;
- free from obvious placeholders and broken project flows.

This skill does not replace implementation work. It audits, fixes safe defects, runs deterministic checks, and reports remaining blockers.

## Invocation Policy

This skill is explicit-only.

Invoke it with:

```text
Use $maxibud-release-check.
```

Appropriate moments:

- before academic submission;
- before preview deployment;
- before production deployment;
- after a large refactor;
- after completing all required pages;
- when the user requests a comprehensive audit;
- when release readiness must be demonstrated.

Do not invoke it automatically for:

- one copy change;
- one isolated component;
- exploratory design work;
- incomplete scaffolding;
- generic Nuxt support.

## Required Companion Context

Apply:

1. repository `AGENTS.md`;
2. `$maxibud-energy-site` for product truth, content, UX, and disclosures;
3. `$nuxt4-production` for Nuxt architecture, SSR, testing, security, and deployment;
4. this skill for final acceptance.

If a companion skill is unavailable, inspect the repository-local skill files directly when present.

## Operating Mode

The release audit has two modes.

### Audit-only

Use when the user asks for findings or does not authorize code changes.

Actions:

- inspect;
- run checks;
- record evidence;
- do not modify files;
- classify defects;
- produce a release decision.

### Audit-and-fix

Use when the user asks to prepare the repository for submission or release.

Actions:

- inspect;
- fix safe and clearly scoped defects;
- avoid speculative redesign;
- rerun affected checks;
- report every material change;
- leave risky or ambiguous issues as blockers.

Default to audit-and-fix only when the user explicitly asks to prepare, fix, complete, or make ready.

## Release Decision Levels

Use one final decision:

### READY

All required checks pass. No known release blocker remains.

### READY WITH LIMITATIONS

Core requirements pass, but documented non-blocking limitations remain, such as demo-only contact delivery or missing optional PDFs.

### NOT READY

One or more release blockers remain.

Do not use “READY” when:

- build was not executed;
- build failed;
- required locale is missing;
- required route is missing;
- concept disclosure is absent;
- contact behavior is misleading;
- critical navigation is broken;
- TypeScript or lint fails;
- known hydration errors remain;
- required automated tests fail.

## Severity Model

Classify findings.

### BLOCKER

Prevents submission, deployment, or truthful operation.

Examples:

- production build fails;
- required route missing;
- one locale missing for a required product;
- broken primary navigation;
- form falsely claims delivery;
- missing concept disclosure;
- private secret committed;
- fatal runtime error;
- product specifications contradict across pages.

### HIGH

Major functional, accessibility, SEO, or trust defect.

Examples:

- language switch loses dynamic route;
- invalid product slug renders blank page instead of 404;
- form lacks server validation;
- keyboard cannot use mobile navigation;
- canonical URLs are invalid;
- personal data logged;
- inaccessible product comparison.

### MEDIUM

Material quality problem that does not block core operation.

Examples:

- missing page description;
- weak empty state;
- inconsistent CTA wording;
- incomplete Open Graph metadata;
- untranslated secondary label;
- poorly sized images causing layout shift.

### LOW

Polish or maintainability issue.

Examples:

- inconsistent spacing;
- minor duplicate copy;
- obsolete comment;
- non-critical console warning;
- optional document unavailable but truthfully labeled.

## Required Audit Workflow

## Phase 1: Repository and instruction inspection

1. Read all applicable `AGENTS.md` and `AGENTS.override.md`.
2. Inspect `.agents/skills/maxibud-energy-site/`.
3. Determine whether `$nuxt4-production` is installed.
4. Inspect:
   - `package.json`;
   - lockfile;
   - Nuxt config;
   - Content config;
   - i18n config;
   - UI config;
   - TypeScript config;
   - lint config;
   - test configs;
   - deployment config;
   - `.env.example`;
   - README.
5. Check Git status.
6. Preserve unrelated user changes.
7. Detect package manager.
8. Record installed Nuxt and module versions.

## Phase 2: Run deterministic static audits

Run from repository root:

```bash
node .agents/skills/maxibud-release-check/scripts/check-content.mjs .
node .agents/skills/maxibud-release-check/scripts/check-routes.mjs .
node .agents/skills/maxibud-release-check/scripts/check-i18n.mjs .
```

Or run the orchestrator:

```bash
node .agents/skills/maxibud-release-check/scripts/audit.mjs .
```

Use `--json` when machine-readable output is useful.

Static scripts provide evidence, not absolute proof. Review findings manually.

## Phase 3: Product truth and content integrity

Read:

- `references/content-integrity-checklist.md`;
- project product data;
- project localized copy.

Verify:

- exactly three required products;
- both locales;
- stable slugs;
- consistent specifications;
- no fabricated certification, availability, pricing, reviews, partners, or customers;
- required concept disclosures;
- no missing live document links;
- no contradictory claims;
- no lorem ipsum or placeholder copy;
- no copied commercial product assets.

## Phase 4: Information architecture and routes

Verify required routes:

- `/`;
- `/products`;
- `/products/powerbox-2400`;
- `/products/homecore-5`;
- `/products/sitehub-10`;
- `/products/compare`;
- `/technology`;
- `/about`;
- `/contact`;
- `/legal`;
- localized English equivalents.

Check:

- direct URL entry;
- client navigation;
- active navigation;
- mobile navigation;
- breadcrumbs;
- related-product links;
- CTA destinations;
- 404 behavior.

## Phase 5: Accessibility review

Read:

- `references/accessibility-checklist.md`.

Perform:

- keyboard-only navigation;
- focus review;
- form label and error review;
- mobile navigation test;
- reduced-motion test;
- heading and landmark review;
- contrast review;
- 320 px layout review;
- comparison readability review.

Automated accessibility scores are supporting evidence, not a replacement for manual checks.

## Phase 6: SEO review

Read:

- `references/seo-checklist.md`.

Verify:

- server-rendered meaningful content;
- unique titles and descriptions;
- canonical URLs;
- language alternates;
- Open Graph metadata;
- robots behavior;
- sitemap behavior;
- structured data;
- product concept truth;
- no fabricated price, availability, ratings, reviews, GTIN, or SKU.

## Phase 7: Technical quality

Run the repository’s applicable scripts.

Preferred full sequence:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Use the detected package manager and existing scripts.

The orchestrator can run available scripts:

```bash
node .agents/skills/maxibud-release-check/scripts/audit.mjs . --run-project-checks
```

Do not use this as a substitute for reading command output.

## Phase 8: Runtime verification

Start production preview or deployment preview when possible.

Verify:

1. homepage;
2. all product pages;
3. comparison;
4. technology;
5. about;
6. contact;
7. legal;
8. 404;
9. locale switching;
10. contact validation;
11. demo success behavior;
12. console;
13. server logs;
14. metadata;
15. direct route entry.

## Phase 9: Fix and rerun

In audit-and-fix mode:

- fix safe blockers first;
- rerun focused checks after every fix group;
- rerun the full applicable quality suite;
- do not hide failures;
- do not weaken tests merely to obtain green output;
- do not delete required features to avoid fixing them.

## Required References

Read when relevant:

| Review area | Reference |
|---|---|
| full release acceptance | `references/acceptance-checklist.md` |
| product claims, products, locale content | `references/content-integrity-checklist.md` |
| keyboard, forms, responsive behavior | `references/accessibility-checklist.md` |
| metadata, canonical, structured data | `references/seo-checklist.md` |

## Deterministic Scripts

### `audit.mjs`

Purpose:

- detect package manager;
- run static project audits;
- optionally run repository scripts;
- aggregate exit codes;
- output text or JSON.

It must not edit files.

### `check-content.mjs`

Purpose:

- locate required product files;
- check both locales;
- detect required slugs;
- inspect concept disclosures;
- detect forbidden commercial claims;
- detect placeholder content;
- check obvious specification consistency;
- validate referenced local documents when detectable.

It is a heuristic auditor. Manual review remains required.

### `check-routes.mjs`

Purpose:

- inspect required page files;
- detect product dynamic route;
- inspect error page;
- inspect contact endpoint;
- inspect core configuration files;
- flag missing structural requirements.

### `check-i18n.mjs`

Purpose:

- locate English and Ukrainian locale JSON;
- recursively compare translation keys;
- report keys missing in either locale;
- detect malformed JSON;
- detect empty strings.

## Safe Auto-Fix Boundaries

May fix without additional confirmation in audit-and-fix mode:

- missing translation mirrored from an approved project reference;
- broken internal path caused by an obvious typo;
- missing concept disclosure copied from approved project references;
- inconsistent approved specification value;
- missing accessible label where intent is unambiguous;
- missing metadata based on approved page content;
- dead import or straightforward lint issue;
- test expectation that is stale because approved behavior changed.

Do not auto-fix without explicit evidence:

- product positioning;
- company history;
- legal claims;
- new dependencies;
- deployment provider;
- analytics;
- external email provider;
- database persistence;
- large visual redesign;
- real contact details;
- real certification information.

## Prohibited Release Tactics

Do not:

- mark checks as passed when not run;
- suppress failures;
- remove tests to obtain a pass;
- disable strict TypeScript;
- disable SSR to hide hydration defects;
- replace server validation with client validation;
- turn broken links into inert controls without truthful labels;
- create fake PDFs;
- fabricate production email delivery;
- add false testimonials;
- add fake partner logos;
- hide the concept disclosure;
- use Lighthouse scores as the only accessibility evidence;
- claim production readiness from a development server.

## Release Blockers

The repository is NOT READY when any applies:

- install from lockfile fails;
- lint fails;
- type check fails;
- required tests fail;
- production build fails;
- required product or locale missing;
- dynamic product route fails;
- required disclosure missing;
- form success message is false;
- required server endpoint fails;
- primary navigation is inaccessible;
- serious console error exists;
- secret or personal data exposure exists;
- commercial or certification claim is fabricated.

## Final Report Format

# Release decision

`READY`, `READY WITH LIMITATIONS`, or `NOT READY`.

## Executive summary

Two to five sentences explaining the decision.

## Checks executed

| Check | Command or method | Result |
|---|---|---|
| Repository audit | ... | PASS / FAIL / SKIPPED |
| Content integrity | ... | PASS / FAIL |
| Routes | ... | PASS / FAIL |
| Localization | ... | PASS / FAIL |
| Accessibility | ... | PASS / FAIL / PARTIAL |
| SEO | ... | PASS / FAIL / PARTIAL |
| Lint | ... | PASS / FAIL / SKIPPED |
| Type check | ... | PASS / FAIL / SKIPPED |
| Unit/integration tests | ... | PASS / FAIL / SKIPPED |
| E2E | ... | PASS / FAIL / SKIPPED |
| Build | ... | PASS / FAIL / SKIPPED |

## Findings

For each finding:

- identifier;
- severity;
- evidence;
- affected files or routes;
- user impact;
- recommended action;
- fixed or unresolved status.

## Changes made

Only in audit-and-fix mode.

## Remaining limitations

State real non-blocking limitations.

## Unverified areas

List every check that could not be completed.

Never omit skipped checks.
