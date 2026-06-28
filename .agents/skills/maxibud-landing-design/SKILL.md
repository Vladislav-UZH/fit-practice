---
name: maxibud-landing-design
description: Design, critique, refine, and implement the MAXIBUD ENERGY landing pages and product presentation system. Use for visual direction, page composition, responsive behavior, product storytelling, Nuxt UI component selection, design-system implementation, motion, visual QA, and design review. Use only for this repository and together with maxibud-energy-site and nuxt4-production. Do not use for generic SaaS dashboards, unrelated brands, real battery engineering, or fabricated commercial claims.
---

# MAXIBUD ENERGY Landing Design

## Purpose

Use this skill to turn the repository's product strategy and information architecture into a coherent, professional, accessible product website.

This skill refines the broad visual direction already defined by `maxibud-energy-site`. It does not replace:

- `AGENTS.md`;
- `$maxibud-energy-site` for product truth, content, routes, and localization;
- `$nuxt4-production` for Nuxt architecture, installed-version verification, SSR, testing, and deployment.

Apply all three for implementation work.

## Design Thesis

Build an **industrial editorial product website**, not a generic SaaS landing page and not a consumer-electronics storefront.

The interface should combine:

- the clarity of a technical product catalogue;
- the pacing of an editorial product story;
- the confidence of restrained industrial design;
- the usability of a conventional information website.

A visitor should understand within the first screen:

1. what MAXIBUD ENERGY represents;
2. which contexts the product line addresses;
3. that three concept products form one portfolio;
4. what action is available next;
5. that the products and specifications are conceptual.

## Activation Boundaries

Use this skill for:

- homepage visual design;
- products index composition;
- product detail page composition;
- comparison-page presentation;
- technical and about-page visual systems;
- contact-page visual hierarchy;
- responsive design decisions;
- Nuxt UI component mapping;
- product-render art direction;
- typography, color, spacing, shape, and motion;
- design critique and revision;
- visual acceptance review.

Do not use this skill for:

- choosing or changing fictional specifications;
- validating electrical or battery engineering;
- inventing certifications, clients, reviews, awards, or sales data;
- e-commerce checkout or pricing interfaces;
- generic dashboards;
- copying another company's product body, layout, copy, or imagery;
- adding animation merely to make a page feel expensive.

## Required Skill Composition

For any implementation task, apply:

1. repository instructions;
2. `$maxibud-energy-site`;
3. `$maxibud-landing-design`;
4. `$nuxt4-production`.

Resolve conflicts in that order unless a nearer repository instruction states otherwise.

## Required Workflow

### 1. Reconstruct the current state

Before proposing or implementing design:

1. Inspect the repository structure.
2. Read applicable repository instructions.
3. Read the current page, component, content, translation, and asset files.
4. Inspect installed Nuxt, Nuxt UI, Tailwind CSS, Nuxt Image, Nuxt Content, and i18n versions when present.
5. Identify existing tokens, components, and conventions.
6. Record missing implementation foundations instead of pretending they exist.
7. Preserve unrelated work.

### 2. Define the page job

For each page, state:

- primary user;
- primary question;
- primary action;
- required evidence;
- required disclosure;
- content that may be deferred.

Do not begin with sections. Begin with the user's decision.

### 3. Produce a first design direction

The first direction must define:

- visual thesis;
- page hierarchy;
- hero composition;
- content rhythm;
- product-visual strategy;
- CTA hierarchy;
- mobile behavior;
- component strategy;
- performance risks.

### 4. Critique the first direction

Reject or revise the direction when it relies on:

- dark styling as a substitute for hierarchy;
- large empty areas without compositional purpose;
- generic feature-card grids;
- fake social proof;
- decorative metrics;
- excessive product animation;
- hidden technical information;
- desktop-only composition;
- inaccessible tabs, carousels, menus, or tables;
- copied competitor layouts;
- Nuxt UI default styling presented as brand design.

### 5. Produce the corrected direction

The corrected direction must explicitly address every material weakness found in the critique.

### 6. Map design to implementation

Before coding, define:

- semantic section structure;
- reusable domain components;
- Nuxt UI primitives used for accessible behavior;
- content ownership;
- image formats and responsive sizes;
- token changes;
- localization impact;
- loading, empty, error, and validation states;
- tests and visual checks.

### 7. Review the implemented result

Use `references/design-review-checklist.md`.

Do not call the design complete when any critical criterion scores zero.

## Corrected Visual Direction

### Overall character

The approved direction is:

- light-dominant;
- product-first;
- editorial rather than dashboard-like;
- technical without becoming sterile;
- industrial without becoming militarized;
- confident without fabricated claims;
- visually distinct without novelty navigation.

Use dark graphite sections selectively for technical contrast, not as the default page background.

### Color proportion

Use approximately:

- 70 to 80 percent warm neutral or white surfaces;
- 15 to 25 percent graphite or muted technical surfaces;
- no more than 5 to 8 percent lime accent in a typical viewport.

The lime accent is reserved for:

- primary CTA emphasis;
- active navigation state;
- selected use case;
- one key numeric value per composition;
- small product-family details.

Do not use lime for paragraphs, full panels, or repeated decoration.

### Typography

Use a modern sans-serif with complete Ukrainian Cyrillic support for interface and editorial text.

Preferred direction:

- sans: Manrope, Inter, or an equivalent verified installed font;
- technical labels: IBM Plex Mono or an equivalent verified installed monospace;
- system fallbacks required.

Recommended responsive roles:

- display: `clamp(2.75rem, 6vw, 5.75rem)`;
- page heading: `clamp(2.25rem, 4.5vw, 4.5rem)`;
- section heading: `clamp(1.75rem, 3vw, 3rem)`;
- lead: `clamp(1.125rem, 1.5vw, 1.375rem)`;
- body: 1rem to 1.125rem;
- technical label: 0.75rem to 0.875rem.

Use compact display line height and readable body line height. Avoid thin weights and excessive uppercase.

### Layout

Use:

- maximum content width of 1360 to 1440 px;
- responsive page gutters with `clamp`;
- 12-column desktop grid;
- 6-column tablet grid;
- single-column mobile flow;
- editorial asymmetry on large screens;
- predictable vertical rhythm.

Recommended section spacing:

- desktop: 96 to 160 px;
- tablet: 72 to 112 px;
- mobile: 56 to 80 px.

Do not make every section full viewport height.

### Shape language

Use:

- restrained radii;
- visible borders where grouping matters;
- flat surfaces before shadows;
- reinforced edges and technical dividers;
- consistent product-image stages.

Avoid:

- pill-shaped everything;
- floating glass cards;
- large soft shadows;
- nested rounded containers;
- ornamental grids behind every section.

## Homepage Composition

Use the detailed blueprint in `references/page-blueprints.md`.

The preferred sequence is:

1. compact global header;
2. product-family hero;
3. concise portfolio evidence strip;
4. three product chapters or a difference-first lineup;
5. use-case decision section;
6. comparison preview;
7. shared technology section;
8. final consultation CTA;
9. factual footer with concept disclosure.

Do not insert a logo wall, testimonial carousel, pricing table, animated counters, or generic blog preview merely because templates usually contain them.

## Product Presentation Rules

### Product family

All three products must share:

- camera angle family;
- lighting direction;
- graphite material language;
- lime detail placement;
- logo scale;
- stage background;
- shadow softness;
- visual scale logic.

### Product cards

Cards are allowed only when they improve scanning.

A product card should include:

- category;
- product visual;
- model name;
- one-sentence positioning;
- three comparable values;
- one clear detail link.

Do not use three identical cards as the only portfolio story. The homepage should also explain why each format exists.

### Product chapters

Prefer one substantial product chapter per model on the homepage when asset quality permits.

Each chapter should show:

- product at a meaningful scale;
- intended environment;
- one primary distinction;
- two or three supporting values;
- a clear link.

Alternate composition only when reading order remains obvious.

## Information Hierarchy

Use this order inside major product sections:

1. context or category;
2. product name or section claim;
3. concise explanation;
4. product visual or evidence;
5. comparable numeric values;
6. next action;
7. disclosure where required.

Do not lead with unexplained numbers.

## CTA Hierarchy

Each page has one primary CTA style and one secondary style.

Primary CTA examples:

- View products;
- Request consultation;
- Discuss a project.

Secondary CTA examples:

- Compare systems;
- View specifications;
- Learn about the platform.

Rules:

- do not repeat the primary CTA in every section;
- do not place more than two competing CTA styles in one viewport;
- use links for navigation and buttons for actions;
- keep labels concrete;
- preserve truthful demo-flow wording.

## Responsive Strategy

### Mobile first content order

On narrow screens:

1. category or eyebrow;
2. heading;
3. summary;
4. CTA group;
5. product visual;
6. key values.

Change that order only when the image is essential to understanding the heading.

### Mobile constraints

- no horizontal page overflow at 320 px;
- no desktop comparison table compressed into unreadable columns;
- no essential hover state;
- no text embedded into product imagery;
- no fixed CTA covering content;
- no hero dependent on viewport-height calculations;
- no carousel required to discover all three products.

### Tablet

Use two-column composition only where each column remains readable. Product heroes may stay stacked longer than generic breakpoints suggest.

## Motion

Motion is optional.

Allowed:

- short opacity and translate transitions;
- header surface transition;
- selected-tab indicator;
- subtle image-stage parallax only when it does not move text or harm performance;
- product detail emphasis triggered after content is already visible.

Forbidden:

- scroll hijacking;
- mandatory horizontal scroll storytelling;
- long page-intro animation;
- endless floating products;
- autoplay video;
- animated counters;
- 3D rotation required to inspect a product;
- motion that delays interaction.

Respect `prefers-reduced-motion` and keep the complete reading experience available without animation.

## Nuxt and Nuxt UI Direction

Use `references/nuxt-ui-implementation.md`.

Principles:

- semantic HTML defines page structure;
- Nuxt UI provides accessible interaction primitives;
- domain components define the brand presentation;
- design tokens live centrally;
- page files compose sections and data;
- product content remains outside components;
- primary content is server-rendered;
- responsive images use Nuxt Image when installed;
- no dependency is added for trivial visual effects.

## Asset Direction

Preferred product assets:

- original transparent WebP or AVIF render;
- original SVG silhouette or line drawing where suitable;
- responsive source sizes;
- consistent aspect ratio per product class;
- meaningful alt text for informative renders;
- empty alt text for purely decorative duplicates.

For every render define:

- model;
- angle;
- lens and perspective feel;
- lighting;
- material;
- accent placement;
- background stage;
- relative scale;
- crop-safe area;
- mobile crop.

Do not generate three unrelated product images and call them a product family.

## Performance Guardrails

- Prioritize only the actual LCP image.
- Use explicit dimensions or aspect ratio.
- Lazy-load below-the-fold media.
- Avoid full-resolution transparent images where a smaller raster is sufficient.
- Prefer CSS for simple transitions.
- Do not ship a 3D viewer for a static concept product unless explicitly required.
- Do not load decorative video.
- Keep icon imports selective.
- Inspect cumulative layout shift and hydration warnings.

## Accessibility Guardrails

Target WCAG 2.2 AA.

Required:

- skip link;
- semantic landmarks;
- one H1 per page;
- logical heading levels;
- visible focus;
- keyboard-operable navigation and tabs;
- approximately 44 px touch targets where practical;
- no color-only state;
- sufficient contrast;
- accessible comparison presentation;
- accessible form errors and status;
- reduced-motion support.

Visual ambition never overrides reading order, keyboard access, or contrast.

## Design Decisions That Must Remain Explicit

Document deliberate choices concerning:

- light-only versus light and dark themes;
- hero product composition;
- product image source and ownership;
- sticky local navigation;
- comparison behavior on mobile;
- use-case interaction pattern;
- font loading strategy;
- motion dependency;
- contact-form delivery state.

## Definition of Complete

A design task is complete only when:

- the page job is clear;
- the first direction was critically reviewed;
- the corrected direction addresses identified risks;
- desktop and mobile compositions are defined;
- product differences are understandable;
- concept status remains visible;
- Nuxt UI primitives are mapped intentionally;
- custom styling does not destroy accessible behavior;
- product assets form one visual family;
- no fabricated proof appears;
- performance and reduced-motion constraints are defined;
- the design-review score passes.

## Final Report

Report:

### Design direction

- final visual thesis;
- page hierarchy;
- material deviations from existing references.

### Critical review

- weaknesses found in the first direction;
- corrections applied;
- remaining visual risks.

### Implementation mapping

- Nuxt UI primitives;
- domain components;
- content and asset ownership;
- responsive and accessibility behavior.

### Validation

- design checklist result;
- browser sizes reviewed;
- keyboard and reduced-motion checks;
- performance checks actually run.

### Repository limitations

- missing application scaffold;
- missing assets;
- missing content;
- missing installed-version evidence;
- checks that could not be executed.
