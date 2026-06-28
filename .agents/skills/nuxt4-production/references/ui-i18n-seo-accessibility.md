# Nuxt UI, Internationalization, SEO, and Accessibility

## Purpose

Use this reference for UI integration, localization, page metadata, semantic structure, and inclusive interaction.

## 1. Nuxt UI Setup

Check the installed Nuxt UI major version before applying configuration.

Current Nuxt UI 4 setup commonly includes:

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css']
})
```

```css
@import "tailwindcss";
@import "@nuxt/ui";
```

When global overlay, toast, or tooltip providers are used:

```vue
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
```

Nuxt UI may register supporting modules such as icon, fonts, and color mode. Do not add duplicate module registrations without checking the installed version and generated config.

## 2. UI Engineering Rules

- Start with native semantic HTML.
- Use Nuxt UI when it removes repeated accessible behavior.
- Keep application-specific visual components separate from general primitives.
- Centralize theme tokens.
- Avoid arbitrary color duplication.
- Preserve keyboard behavior when customizing slots.
- Verify rendered HTML, not merely component names.
- Test dark and light themes when both are enabled.
- Avoid dynamic component names that defeat tree-shaking unless configured intentionally.

## 3. Component Boundaries

Create a component when it represents:

- reusable behavior;
- a meaningful domain visual;
- a repeated section pattern;
- a complex accessible interaction.

Do not create components that only rename one HTML element.

A page should mostly compose sections and route data, not contain every visual implementation detail.

## 4. Nuxt i18n Routing

Check the installed `@nuxtjs/i18n` major version.

For a default locale without a prefix and prefixed secondary locales, use:

```ts
export default defineNuxtConfig({
  i18n: {
    defaultLocale: 'uk',
    strategy: 'prefix_except_default'
  }
})
```

Routing strategies include:

- `no_prefix`;
- `prefix_except_default`;
- `prefix`;
- `prefix_and_default`.

Choose based on product and SEO requirements. Do not change strategy casually after URLs are public.

## 5. Locale-Aware Navigation

Prefer module utilities:

- `useLocalePath`;
- `useLocaleRoute`;
- `useSwitchLocalePath`;
- `NuxtLinkLocale`;
- `SwitchLocalePathLink`.

Example:

```vue
<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('en')">
    English
  </NuxtLink>
</template>
```

Do not manually concatenate `/en`.

For dynamic route parameters, ensure the equivalent translated route receives the correct params. Use the installed module’s supported dynamic-param API.

Do not assign locale directly when the module requires `setLocale` or locale-aware navigation. Correct APIs load messages, run hooks, and update locale persistence.

## 6. Translation Ownership

Use locale message files for:

- navigation;
- buttons;
- labels;
- form errors;
- status messages;
- short system copy.

Use Content or another content layer for:

- articles;
- product descriptions;
- long landing-page sections;
- localized SEO copy.

Do not duplicate the same paragraph in components and translation files.

## 7. Missing Translations

Treat these as defects:

- raw translation keys;
- fallback to the wrong language;
- English validation inside a Ukrainian page;
- untranslated metadata;
- broken language switch route;
- mixed-locale structured data.

Test all routes in every supported locale.

## 8. SEO Metadata

Use:

- `useSeoMeta` for typed metadata;
- `useHead` for link tags or structures not covered by `useSeoMeta`;
- route-specific server-rendered metadata;
- canonical URLs derived from validated site config;
- localized alternates;
- meaningful Open Graph images.

Example:

```ts
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: page.value.seoTitle,
  description: page.value.seoDescription,
  ogTitle: page.value.seoTitle,
  ogDescription: page.value.seoDescription,
  ogType: 'website'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: new URL(route.path, config.public.siteUrl).toString()
    }
  ]
})
```

Validate `siteUrl`. Avoid malformed canonical URLs caused by string concatenation.

## 9. Heading and Landmark Structure

Each page should have:

- one clear primary heading;
- logical heading levels;
- `<header>`, `<nav>`, `<main>`, and `<footer>` where appropriate;
- labeled navigation regions when multiple navs exist;
- a skip link;
- descriptive link text.

Do not choose heading levels for visual size. Style headings independently.

## 10. Forms

Requirements:

- visible labels;
- programmatic label association;
- instructions before errors when possible;
- field-level error text;
- `aria-describedby` linking control and error;
- `aria-invalid` when invalid;
- accessible submission status;
- focus movement to the first invalid field or an error summary for large forms;
- disabled and loading behavior that does not trap users;
- server validation.

Do not rely on placeholder text as a label.

## 11. Interactive Components

For menus, dialogs, tabs, accordions, and listboxes:

- prefer accessible Nuxt UI primitives;
- verify keyboard behavior;
- preserve focus;
- support Escape where expected;
- use correct roles only when native semantics do not suffice;
- keep touch targets usable;
- do not nest interactive elements.

## 12. Motion

- Respect `prefers-reduced-motion`.
- Keep transitions short and purposeful.
- Do not require motion to understand state.
- Avoid scroll-jacking.
- Avoid autoplay video.
- Avoid long page-entry sequences.

## 13. Images

- Use `NuxtImg` or `NuxtPicture` where appropriate.
- Supply dimensions or aspect ratio.
- Use descriptive alt text for informative images.
- Use empty alt text for decorative images.
- Do not repeat adjacent visible captions in alt text unnecessarily.
- Do not put essential text only inside images.
- Use local or approved providers.

## 14. Color and Focus

- Target WCAG 2.2 AA contrast.
- Keep focus visible in every theme.
- Do not remove outlines without an equivalent.
- Do not communicate state only with color.
- Test accent colors on all relevant surfaces.
- Ensure disabled states remain legible.

## 15. Structured Data

Use valid JSON-LD when it represents real page content.

Rules:

- do not fabricate reviews, ratings, prices, or availability;
- keep localized text aligned with the page locale;
- keep organization details consistent;
- use canonical page URLs;
- validate JSON-LD output;
- avoid duplicate conflicting entities.

## 16. Review Checklist

- Correct Nuxt UI version and setup?
- `UApp` used when required?
- Locale strategy intentional?
- Locale switch preserves equivalent route?
- No manual prefix concatenation?
- No untranslated keys?
- Unique title and description?
- Canonical URL valid?
- Correct language alternates?
- One primary heading?
- Keyboard navigation works?
- Forms expose errors accessibly?
- Reduced motion respected?
- Images sized and described?
