# Official Documentation Map

## Purpose

Use these sources to verify version-sensitive Nuxt behavior.

The repository’s installed versions remain the source of truth. Documentation pages may describe a newer release than the project uses.

## Codex Skills

- Agent Skills:
  https://developers.openai.com/codex/skills
- AGENTS.md:
  https://developers.openai.com/codex/guides/agents-md

Current relevant skill behavior:

- `SKILL.md` requires `name` and `description`.
- `scripts/`, `references/`, `assets/`, and `agents/openai.yaml` are optional.
- Codex initially sees skill name, description, and path.
- Full `SKILL.md` is loaded after activation.
- Clear scope and boundaries improve implicit activation.

## Nuxt 4

- Introduction:
  https://nuxt.com/docs/4.x/getting-started/introduction
- Directory structure:
  https://nuxt.com/docs/4.x/directory-structure
- app.vue:
  https://nuxt.com/docs/4.x/directory-structure/app/app
- Pages:
  https://nuxt.com/docs/4.x/directory-structure/app/pages
- Server:
  https://nuxt.com/docs/4.x/directory-structure/server
- Rendering:
  https://nuxt.com/docs/4.x/guide/concepts/rendering
- Hydration:
  https://nuxt.com/docs/4.x/guide/best-practices/hydration
- Data fetching:
  https://nuxt.com/docs/4.x/getting-started/data-fetching
- Runtime config:
  https://nuxt.com/docs/4.x/guide/going-further/runtime-config
- SEO and meta:
  https://nuxt.com/docs/4.x/getting-started/seo-meta
- Testing:
  https://nuxt.com/docs/4.x/getting-started/testing
- Prerendering:
  https://nuxt.com/docs/4.x/getting-started/prerendering
- Deployment:
  https://nuxt.com/docs/4.x/getting-started/deployment

At the time this skill was authored, the official Nuxt documentation displayed Nuxt 4.4.4. Do not assume the target repository uses that exact release.

## Nuxt Content

- Installation:
  https://content.nuxt.com/docs/getting-started/installation
- Define collections:
  https://content.nuxt.com/docs/collections/define
- Query collections:
  https://content.nuxt.com/docs/utils/query-collection

Current model:

- collections are defined in root `content.config.ts`;
- `defineContentConfig` and `defineCollection` define the model;
- schemas provide validation and inferred types;
- `queryCollection` queries defined collections;
- `first()` may return `null`.

Verify the installed `@nuxt/content` version before using a schema helper or query API.

## Nuxt i18n

- Installation:
  https://i18n.nuxtjs.org/docs/getting-started
- Routing strategies:
  https://i18n.nuxtjs.org/docs/guide
- Language switcher:
  https://i18n.nuxtjs.org/docs/guide/lang-switcher
- SEO:
  https://i18n.nuxtjs.org/docs/guide/seo

At the time this skill was authored, the official documentation displayed Nuxt i18n 10.4.0.

Important APIs may include:

- `useLocalePath`;
- `useLocaleRoute`;
- `useSwitchLocalePath`;
- `useLocaleHead`;
- `setLocale`.

Verify installed types before use.

## Nuxt UI

- Nuxt installation:
  https://ui.nuxt.com/docs/getting-started/installation/nuxt
- Theming:
  https://ui.nuxt.com/docs/getting-started/theme
- Components:
  https://ui.nuxt.com/docs/components

Current Nuxt UI 4 guidance includes:

- `@nuxt/ui` module;
- Tailwind and Nuxt UI CSS imports;
- `UApp` for global providers such as toast and overlays;
- built-in registration of some supporting modules.

Do not add preview releases from continuous-release URLs to production unless explicitly required.

## Verification Procedure

Before using any version-sensitive API:

1. inspect `package.json`;
2. inspect lockfile resolution;
3. inspect installed types;
4. open the matching official major-version documentation;
5. run type check;
6. run a minimal test;
7. run production build.

Do not cite a documentation version as proof that the repository has the same installed version.
