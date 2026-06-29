# Codex Branch and Pull Request Workflow

## Purpose

Use this reference before making repository changes through Codex or another automated coding environment.

The goal is to prevent stale branches, duplicate milestone implementations, merge conflicts, generated-file commits, and pull requests that accidentally reintroduce work already merged into `main`.

## Required Starting Check

Before editing any file:

1. read the root `AGENTS.md`;
2. read `PROJECT_CONTEXT.md` and `CURRENT_STATE.md` completely;
3. inspect the latest `main` branch rather than relying on chat memory;
4. confirm whether the requested milestone is already listed as completed;
5. inspect existing components, schemas, localized content, tests, and design reviews related to the request;
6. compare the selected working branch against `main`.

If `CURRENT_STATE.md` already records the milestone as complete, do not implement it again. Continue from the documented immediate next milestone unless the user explicitly requests a revision.

## Branch Base Rules

For a normal feature or fix:

1. fetch the latest repository state;
2. create a new branch from the current `main` head;
3. use a descriptive branch name such as `feat/full-product-details` or `fix/mobile-overflow`;
4. confirm the new branch is not behind or diverged from `main` before editing.

Do not create a branch from:

- an old task container;
- a previously merged feature branch;
- a local commit remembered from another chat;
- a stale Codex workspace;
- a branch whose merge base predates recently merged milestones.

A stacked pull request is allowed only when the user explicitly requests stacked work or when the dependency is documented clearly in the pull request body. Otherwise target `main`.

## Duplicate-Implementation Check

Before creating a new component, schema, page, or test suite:

1. search the current repository for the intended behavior;
2. inspect route-level and component-level implementations;
3. inspect recent merged pull requests and `CURRENT_STATE.md`;
4. prefer extending the current authoritative implementation over creating a parallel one.

Do not add a second implementation with a different name when the same milestone already exists. For example, do not create a new comparison component if the current comparison route already has an authoritative component and test suite.

## Repository Hygiene

Never commit local or generated artifacts such as:

- `.pnpm-store/`;
- `node_modules/`;
- `.nuxt/`;
- `.output/`;
- Playwright reports;
- test result directories;
- ad-hoc local configuration files that were not intentionally designed for the repository.

Do not add `.nuxtrc`, `.npmrc`, or similar tool configuration files unless their purpose is documented and the project actually requires them.

Before committing, inspect the changed-file list and remove unrelated files.

## Pull Request Preflight

Before opening or updating a pull request:

1. compare the branch with current `main`;
2. verify the branch is not behind or diverged;
3. inspect every changed filename;
4. confirm the diff contains only the requested milestone;
5. confirm previously merged implementation files are not reintroduced;
6. run the full validation sequence required by `AGENTS.md`;
7. update the relevant skill reference, design review, and `CURRENT_STATE.md` when the milestone requires them.

The pull request body must state:

- the exact base branch;
- the implemented scope;
- validation commands and results;
- known limitations;
- whether the work depends on another unmerged pull request.

## Conflict Recovery

When a branch is stale or diverged:

1. do not manually combine two competing implementations without first identifying the authoritative version;
2. inspect whether the branch contains genuinely new work;
3. preserve only unique, valid changes;
4. rebuild the branch from current `main` when the stale commit consists of duplicate or obsolete work;
5. never weaken schemas, tests, accessibility, localization, or truth boundaries merely to make the merge succeed.

If the stale branch contains no unique valid work, close or reset the pull request rather than merging a no-longer-relevant implementation.

## Acceptance Checks

- the branch starts from the current approved base;
- the branch is not behind or diverged before implementation begins;
- completed milestones are not duplicated;
- no generated or local dependency-store files are committed;
- the pull request contains one coherent scope;
- the changed-file list is reviewed;
- validation results are exact and truthful;
- the pull request is mergeable without discarding newer `main` behavior.
