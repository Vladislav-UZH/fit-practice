# Nuxt UI Implementation Map

## Purpose

Use this reference to implement the MAXIBUD ENERGY visual system with Nuxt 4 and the installed Nuxt UI version.

The installed repository remains authoritative. Verify component names, props, slots, theme APIs, and module versions before implementation.

## 1. Implementation Principle

Use three layers:

1. semantic HTML for document structure;
2. Nuxt UI primitives for accessible interactive behavior;
3. project-specific components for product presentation and brand composition.

Do not build the site by stacking default `UCard` components. Nuxt UI is an implementation foundation, not the visual concept.

## 2. Required Version Inspection

Before coding, inspect:

- `package.json`;
- the package-manager lockfile;
- installed `nuxt` version;
- installed `@nuxt/ui` version;
- installed Tailwind CSS version;
- installed `@nuxt/image` version;
- installed `@nuxt/content` version;
- installed `@nuxtjs/i18n` version;
- generated Nuxt types when available.

Do not assume that current online examples match the installed versions.

## 3. Application Shell

Use `UApp` when required by the installed Nuxt UI features.

Expected application composition:

```vue
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
```

Keep:

- skip link outside or at the start of the visual header;
- one `<main>` per page;
- global header and footer in the default layout;
- overlays inside the supported application provider.

## 4. Theme Architecture

### CSS entry

When compatible with the installed Nuxt UI version, keep the global CSS entry under `app/assets/css/main.css` and import the required Tailwind and Nuxt UI layers there.

### Semantic colors

Map the brand palette to semantic roles instead of scattering raw values through templates.

Recommended roles:

- `primary`: restrained lime scale;
- `neutral`: graphite or zinc-like scale adjusted for warm surfaces;
- `success`: accessible green distinct from the lime brand accent;
- `warning`: amber;
- `error`: red;
- `info`: cool blue only for actual informational state.

The primary accent must not become the body-text color.

### Global variables

Centralize, when supported:

- container width;
- header height;
- radius;
- body background;
- elevated surface;
- border color;
- focus ring;
- typography families.

Use `app/app.config.ts` and global CSS according to the installed Nuxt UI theming API.

### Radius

Use a restrained global radius. Increase it only for specific media stages or large feature surfaces.

Do not globally force pill-shaped controls.

## 5. Primitive Mapping

Component names below reflect common Nuxt UI 4 conventions. Verify against the installed version.

### Global header

Use:

- `UNavigationMenu` or the installed accessible navigation equivalent;
- `UButton` for the mobile trigger and consultation action;
- `UDrawer`, `USlideover`, or the installed overlay primitive for mobile navigation;
- `ULocaleSelect` only if installed and suitable, otherwise use an accessible menu or select built from supported primitives.

Requirements:

- active route state;
- Escape closes overlay;
- focus returns to trigger;
- body scroll handled by the primitive;
- labels remain visible or programmatically named.

### Buttons and links

Use `UButton` for actions and styled `NuxtLink` or locale-aware link components for navigation.

Define project variants centrally:

- primary solid;
- secondary outline or subtle;
- text link with directional icon;
- inverse variant for graphite sections.

Do not apply unrelated one-off classes to every button instance.

### Breadcrumbs

Use `UBreadcrumb` when it produces correct localized links and accessible markup. Otherwise render a semantic ordered list.

### Use-case selector

Preferred:

- `UTabs` when all labels fit and the panel relationship is meaningful;
- `UAccordion` for narrow layouts or long translated labels;
- native buttons with explicit state only when a custom visual treatment is necessary.

Do not use a carousel as a substitute for tabs.

### Product comparison

Desktop:

- semantic `<table>`;
- `UTable` only when the installed component preserves required markup and supports the desired responsive behavior.

Mobile:

- grouped description lists;
- accessible accordions;
- or a horizontally scrollable semantic table with an explicit cue.

Do not hide rows on mobile merely to fit the layout.

### Specifications

Use:

- semantic `<dl>` groups for compact product data;
- semantic tables for aligned comparisons;
- `UAccordion` for optional mobile grouping, not for hiding all core information by default;
- `UBadge` for compact qualifiers such as “Concept specification,” not for every label.

### Disclosure

Use `UAlert` only if its visual weight remains neutral and readable.

A custom disclosure component is acceptable when it provides:

- consistent icon and text treatment;
- semantic structure;
- localized copy;
- variants for footer, specification, and document contexts.

Do not style the concept disclosure as a severe safety warning.

### Contact form

Use installed equivalents of:

- `UForm`;
- `UFormField`;
- `UInput`;
- `UTextarea`;
- `USelect` or `USelectMenu`;
- `UCheckbox`;
- `UButton`;
- `UAlert` or status region.

Requirements:

- shared Zod schema where supported by repository architecture;
- server validation remains authoritative;
- visible labels;
- errors associated with fields;
- first invalid field focus or error summary;
- loading state does not remove the label without replacement;
- success state describes actual demo behavior.

### Dialogs and modals

Use `UModal` only for secondary tasks.

Do not place core product specifications, legal disclosure, or primary contact flow exclusively inside a modal.

### Cards

Use `UCard` sparingly for:

- document items;
- compact related-product items;
- small technical summaries;
- form side notes.

Do not use it as the default wrapper for every section.

### Carousel

Do not use `UCarousel` for the primary product lineup, comparison, or essential content.

It is acceptable only for non-essential supporting visuals when:

- controls are labeled;
- keyboard operation works;
- content remains understandable without interaction;
- motion can be reduced;
- all items remain reachable.

## 6. Domain Components

Create project components only when they represent meaningful visual or behavioral concepts.

Recommended candidates:

- `SiteHeader`;
- `SiteFooter`;
- `ProductFamilyHero`;
- `ProductStage`;
- `ProductChapter`;
- `ProductCard`;
- `SpecHighlight`;
- `SpecGroup`;
- `UseCaseSelector`;
- `ComparisonPreview`;
- `ConceptDisclosure`;
- `ConsultationCta`;
- `ContactInquiryForm`.

Do not create wrappers such as `BaseDiv`, `SectionWrapper`, or `TextBlock` that add no behavior or semantic value.

## 7. Component API Rules

Domain components should receive structured data, not duplicate product copy.

Prefer props such as:

```ts
interface SpecHighlight {
  label: string
  value: string
  qualifier?: string
}
```

Avoid:

- passing large arbitrary HTML strings;
- using `v-html` for product content;
- duplicating localized paragraphs in component files;
- boolean props that create many undocumented visual combinations;
- exposing raw Tailwind class props as the main component API.

Use slots for deliberate composition, not to avoid defining a stable component contract.

## 8. Content Ownership

Use Nuxt Content or the repository's chosen content layer for:

- product summaries;
- long descriptions;
- features;
- applications;
- grouped specifications;
- technology content;
- about content;
- localized SEO copy;
- document metadata.

Use i18n messages for:

- navigation;
- buttons;
- form labels;
- validation;
- state messages;
- short repeated interface copy.

Do not store the same paragraph in both content and locale messages.

## 9. Images

Use `NuxtImg` or `NuxtPicture` when compatible with the installed Nuxt Image version.

For each product visual:

- define width and height or aspect ratio;
- provide responsive `sizes`;
- use modern formats where supported;
- prioritize only the LCP visual;
- lazy-load below-the-fold renders;
- keep transparent source dimensions reasonable;
- provide informative alt text once per meaningful visual;
- mark decorative duplicates with empty alt text.

Do not use `ClientOnly` around primary images or content to avoid SSR work.

## 10. Responsive Composition

Use CSS grid and flexbox before JavaScript layout logic.

Recommended implementation:

- container and gutters from central tokens;
- grid-template areas for intentional desktop composition;
- source order that remains correct on mobile;
- container queries only when supported and materially useful;
- no layout decisions based on `window.innerWidth` during initial render.

Avoid fixed heights for text-bearing sections.

## 11. Motion Implementation

Prefer CSS transitions for:

- hover and focus;
- selected states;
- header surface changes;
- small reveal effects.

Do not add a motion dependency unless the required behavior cannot be implemented reliably with CSS and the dependency cost is justified.

When JavaScript motion exists:

- render complete content before enhancement;
- avoid hydration differences;
- stop or simplify under `prefers-reduced-motion`;
- avoid continuous animation;
- test low-powered mobile devices.

## 12. SEO and SSR

Use server-rendered primary content.

Use installed Nuxt APIs for:

- localized titles and descriptions;
- canonical URLs;
- language alternates;
- Open Graph metadata;
- product-page breadcrumbs;
- truthful structured data.

Do not fabricate price, availability, rating, review, SKU, or certification data.

## 13. Testing Map

### Unit or component tests

Use for:

- comparison data formatting;
- locale-safe units;
- use-case selection logic;
- component states with meaningful behavior.

### End-to-end tests

Cover:

- global navigation;
- mobile menu keyboard behavior;
- locale switching;
- product routes;
- comparison visibility;
- contact validation and status;
- invalid product slug;
- concept disclosure presence;
- 320 px layout without horizontal overflow.

### Visual review

Review at minimum:

- 320 x 568;
- 390 x 844;
- 768 x 1024;
- 1280 x 800;
- 1440 x 900;
- one wide desktop viewport.

Test both locales because Ukrainian and English create different line lengths.

## 14. Rejected Implementation Patterns

Reject:

- one giant homepage component;
- a page made entirely of `UCard` grids;
- client-only primary content;
- copied Nuxt UI landing template with brand colors changed;
- a dependency for basic fade-in effects;
- arbitrary raw color values repeated across templates;
- hidden mobile specification rows;
- dynamic random decoration during SSR;
- generic icon cards replacing product evidence;
- external hotlinked product images;
- default component styling left unreviewed.
