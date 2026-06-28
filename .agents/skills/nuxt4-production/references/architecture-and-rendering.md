# Nuxt 4 Architecture and Rendering

## Purpose

Use this reference for directory structure, routing, layouts, SSR, hydration, route rules, and browser/server boundaries.

## 1. Determine the Actual Project Shape

Before changing structure, inspect:

- `package.json`;
- installed Nuxt version;
- `srcDir` in `nuxt.config.ts`;
- `app/`;
- `server/`;
- `shared/`;
- layers;
- generated aliases;
- repository-specific conventions.

Nuxt 4 uses `app/` as the default application source directory. A repository may customize `srcDir`; do not relocate files blindly.

## 2. Recommended Nuxt 4 Structure

```text
.
├── app/
│   ├── app.vue
│   ├── app.config.ts
│   ├── error.vue
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   ├── plugins/
│   └── utils/
├── content/
├── public/
├── server/
├── shared/
├── nuxt.config.ts
└── package.json
```

Responsibilities:

- `app/pages`: route-level composition;
- `app/layouts`: shared page shells;
- `app/components`: reusable UI;
- `app/composables`: reusable reactive logic;
- `app/utils`: stateless utilities;
- `app/plugins`: framework or library initialization;
- `server/api`: `/api/*` endpoints;
- `server/routes`: non-`/api` server routes;
- `server/middleware`: server request middleware;
- `shared`: types and utilities safe in both app and server contexts;
- `content`: content sources;
- `public`: files served unchanged.

## 3. app.vue and Layouts

When `app/pages/` exists, Nuxt can provide a default app shell, but add `app/app.vue` when global wrappers are required.

Typical structure:

```vue
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
```

Use `UApp` only when Nuxt UI is installed and its global providers are needed.

A default layout:

```vue
<template>
  <div class="min-h-screen">
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
```

Keep route-specific content out of the global app shell.

## 4. File-Based Routing

Use `app/pages/`.

Examples:

```text
app/pages/index.vue              -> /
app/pages/about.vue              -> /about
app/pages/products/index.vue     -> /products
app/pages/products/[slug].vue    -> /products/:slug
app/pages/[...slug].vue          -> catch-all route
```

Use:

- `NuxtLink` for normal internal routing;
- locale-aware link utilities when i18n is installed;
- `definePageMeta` for route metadata;
- `createError` for intentional route failures;
- route middleware only for route concerns.

Do not put business logic into route middleware.

## 5. Universal Rendering

Nuxt defaults to universal rendering.

Initial request:

1. server executes compatible setup code;
2. server returns HTML;
3. browser loads JavaScript;
4. Vue hydrates the existing HTML;
5. interactivity becomes active.

The initial server and client render must match.

Keep universal rendering for:

- marketing sites;
- product sites;
- documentation;
- blogs;
- public catalog pages;
- indexable content.

Use client-only rendering only when the product requirement justifies it.

## 6. Hydration Safety

Treat hydration warnings as defects.

Common causes:

### Browser-only APIs

Incorrect:

```ts
const theme = localStorage.getItem('theme')
```

Safer options:

- `useCookie`;
- Nuxt color mode;
- `onMounted`;
- guarded dynamic import;
- `<ClientOnly>` for truly client-only content.

### Random values

Incorrect:

```vue
<template>{{ Math.random() }}</template>
```

Use deterministic state or generate once through an SSR-transferred mechanism such as `useState`.

### Current time

Server and browser may disagree because of time zone or execution time.

Use:

- server-provided values;
- explicit serialized timestamps;
- `NuxtTime`;
- client-only display with a stable fallback.

### Responsive markup

Do not branch server markup using `window.innerWidth`.

Prefer CSS media queries. Render one semantic structure that adapts visually.

### Browser libraries

If a dependency requires DOM globals:

- load it in a `.client` plugin;
- dynamically import in `onMounted`;
- isolate it in a client-only component.

Do not wrap large SEO-critical sections in `<ClientOnly>` merely for convenience.

## 7. Route Rules and Rendering Modes

Use `routeRules` only when the route behavior is intentional and tested.

Examples:

```ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/products/**': { prerender: true },
    '/api/**': { cors: false }
  }
})
```

Possible uses:

- prerender stable public pages;
- cache server-rendered pages;
- add route-specific headers;
- redirect legacy routes.

Do not combine static-only deployment with required Nitro endpoints unless those endpoints are hosted separately.

## 8. Error Handling

For route content:

```ts
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}
```

Requirements:

- localized user-facing error page;
- no production stack trace;
- useful recovery links;
- correct HTTP status;
- no silent empty page.

Use `showError` or `createError` according to the control flow and installed Nuxt API.

## 9. Plugins

Use a plugin only when global initialization or injection is necessary.

Prefer:

- `.client.ts` for browser-only libraries;
- `.server.ts` for server-only initialization;
- object syntax only when its hooks or metadata provide value.

Avoid plugins for simple reusable functions. Use composables or utilities instead.

## 10. Composables and State

Use `useState` for small SSR-safe shared state.

Use a state library only when the application has real cross-route state complexity.

Composables should:

- have one clear responsibility;
- return typed state and actions;
- avoid hidden side effects;
- accept dependencies explicitly when practical;
- use stable data-fetching keys;
- not duplicate server validation logic.

## 11. Review Checklist

- Is code placed in the correct Nuxt 4 directory?
- Is `srcDir` respected?
- Is primary content server-rendered?
- Are browser APIs guarded?
- Is initial markup deterministic?
- Are route errors intentional?
- Are layouts semantic?
- Are internal links locale-aware where needed?
- Are no hydration warnings present?
- Does the page work at direct URL entry and client navigation?
