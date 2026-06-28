# Deployment and Diagnostics

## Purpose

Use this reference for production builds, prerendering, hosting compatibility, environment setup, and systematic debugging.

## 1. Build Modes

### Server deployment

Use:

```bash
nuxi build
```

Nuxt and Nitro produce a deployable `.output` directory.

Use server deployment when the application requires:

- Nitro API routes;
- server-rendering at request time;
- private runtime configuration;
- authenticated server operations;
- dynamic server middleware.

### Static generation

Use:

```bash
nuxi generate
```

Static generation produces pre-rendered files.

Do not use static-only deployment when required server endpoints must remain in the same deployment. A generated static output does not include the normal runtime server endpoint behavior.

### Hybrid rendering

Use route rules when some routes should be prerendered or cached while server functionality remains available.

## 2. Deployment Decision

Before choosing a target, determine:

- server endpoints required?
- request-time secrets required?
- content changes after build?
- user-specific rendering?
- target platform adapter?
- image provider compatibility?
- filesystem assumptions?
- edge runtime restrictions?
- region or data requirements?

Do not select a hosting mode based solely on convenience.

## 3. Runtime Configuration

Verify production variables:

- all required `NUXT_*` overrides;
- no private value under `NUXT_PUBLIC_*`;
- canonical site URL;
- provider credentials;
- email destinations;
- deployment-specific flags.

Validate configuration on startup or first provider use. Fail clearly when a required production provider is enabled without credentials.

## 4. Prerendering

Prerender routes that are:

- public;
- stable at build time;
- discoverable;
- not user-specific.

Dynamic content routes may require explicit discovery or route generation.

After prerendering, verify:

- each expected HTML file exists;
- localized routes exist;
- dynamic slugs exist;
- canonical metadata is correct;
- internal links do not point to ungenerated routes;
- no API route is expected from static output.

## 5. Platform Adapters

Use the deployment platform’s supported Nitro preset or automatic detection.

Before forcing a preset:

- inspect platform docs;
- inspect existing deployment config;
- verify module compatibility;
- run a production build locally;
- test a preview deployment when available.

Do not assume Node filesystem APIs work on edge runtimes.

## 6. Diagnostics Workflow

### Step 1: Reproduce

Record:

- command;
- environment;
- route;
- browser;
- exact error;
- whether direct load and client navigation differ.

### Step 2: Minimize

Determine whether the issue comes from:

- Nuxt core;
- a module;
- a plugin;
- content;
- browser-only code;
- server endpoint;
- deployment adapter;
- environment config.

### Step 3: Inspect generated context

Useful sources:

- terminal output;
- browser console;
- server logs;
- `.nuxt` generated types;
- route manifest;
- build output;
- network panel;
- response HTML;
- deployment logs.

Do not manually edit generated files.

### Step 4: Verify installed APIs

Inspect package versions and types. Compare with matching official documentation.

### Step 5: Create a minimal test

Add a focused test or minimal reproduction before a broad rewrite.

### Step 6: Fix root cause

Do not hide the error with client-only rendering, catch-all fallbacks, or disabled validation unless that is the correct product behavior.

## 7. Common Failure Patterns

### Hydration mismatch

Check:

- browser globals;
- random numbers;
- timestamps;
- locale differences;
- server/client data differences;
- invalid HTML;
- third-party DOM mutation.

### Content item missing

Check:

- collection source glob;
- locale field;
- slug;
- `content.config.ts`;
- collection type;
- query operators;
- build-time validation;
- direct route behavior.

### Environment variable unavailable

Check:

- declared runtime config path;
- correct `NUXT_` name;
- private vs public scope;
- deployment environment;
- build-time vs runtime assumptions.

### Works in dev, fails in build

Check:

- case-sensitive paths;
- browser-only imports;
- generated types;
- missing environment values;
- prerender route discovery;
- dynamic imports;
- edge incompatibility;
- static/server mode mismatch.

### Locale switch resets route

Check:

- `useSwitchLocalePath`;
- dynamic route params;
- locale strategy;
- translated content slug model;
- module version behavior.

### Duplicate requests

Check:

- direct `$fetch` during setup;
- inconsistent `useAsyncData` keys;
- child component fetching;
- `server: false`;
- watch sources;
- both plugin and page fetching.

## 8. Production Verification

At minimum:

1. install from lockfile;
2. run lint;
3. run type check;
4. run tests;
5. run production build;
6. start or preview output;
7. open primary routes;
8. open localized routes;
9. open a dynamic route directly;
10. exercise server endpoint;
11. inspect console and server logs;
12. inspect metadata and response HTML.

## 9. Deployment Report

State:

- target platform;
- output mode;
- Nitro preset if explicitly configured;
- required environment variables;
- commands executed;
- preview routes checked;
- server endpoints checked;
- known adapter limitations;
- rollback or recovery information when relevant.

Do not report a successful deployment based only on a local development server.
