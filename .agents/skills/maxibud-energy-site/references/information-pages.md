# Technology and About Information Pages Contract

## Purpose

Use this reference when implementing or reviewing:

- `/technology`;
- `/en/technology`;
- `/about`;
- `/en/about`.

These pages complete the informational layer of the educational MAXIBUD ENERGY website without inventing company history, engineering instructions, certifications, or commercial claims.

## Technology Page

Required content:

1. one localized page heading;
2. a visible concept-product disclosure;
3. exactly three approved shared portfolio principles;
4. a project-owned portfolio diagram with one accessible image label;
5. a three-format architecture explanation;
6. explicit technical claim boundaries;
7. localized product and comparison actions.

Approved shared principles:

- LiFePO4 as an educational storage concept;
- form-factor-specific architecture;
- context-specific status and monitoring.

Do not claim a shared verified controller, inverter, BMS, protocol, certification, warranty, lifetime, installation method, wiring design, compatibility, price, stock, delivery schedule, or commercial availability.

The diagram represents portfolio relationships only. It must not contain wiring paths, pinouts, voltage values, repair steps, or assembly instructions.

## About Page

Required content:

1. one localized page heading;
2. a visible educational-project disclosure;
3. an explanation of what software was developed;
4. exactly four development goals;
5. a transparent technology-stack section;
6. exactly three quality-control areas;
7. explicit boundaries of verified claims;
8. localized product and contact actions.

The page may describe verified repository behavior:

- Nuxt 4 and Vue 3 application architecture;
- SSR and Nitro routes;
- structured localized product content;
- Zod validation;
- accessibility-oriented UI behavior;
- Vitest, Nuxt runtime, Playwright, and GitHub Actions checks.

Do not invent or imply:

- company founding history;
- employee counts or named staff;
- factories or production capacity;
- partners or customer relationships;
- sales regions;
- commercial product manufacturing;
- awards, certifications, reviews, or market position.

## Localization

- Ukrainian and English structures remain equivalent;
- both locales expose the same number of principles, goals, architecture items, quality items, and claim boundaries;
- route actions use `useLocalePath`;
- SEO title and description are localized;
- neither locale may strengthen technical or commercial claims.

## Accessibility

- exactly one `h1` per page;
- logical `h2` and `h3` hierarchy;
- semantic `article`, `section`, lists, and real links;
- the technology diagram exposes one `role="img"` label;
- decorative SVG content is hidden from assistive technology;
- visible focus remains available through the shared button system;
- no content depends on hover, animation, or client-only disclosure controls.

## Responsive Behavior

At 320 CSS pixels:

- no page-level horizontal overflow;
- long headings and claim boundaries wrap safely;
- the technology diagram does not impose an intrinsic width larger than the viewport;
- actions stack when needed;
- all content remains in normal document flow.

## Acceptance Checks

- all four localized routes render complete content;
- technology renders exactly three principles and three product formats;
- about renders exactly four goals, eleven stack items, and three quality areas;
- the diagram has one accessible localized label;
- technical and company-history boundaries are visible;
- localized product, comparison, and contact routes are correct;
- one main landmark remains provided by the layout;
- 320 × 800 has no horizontal overflow;
- lint, typecheck, unit/Nuxt tests, E2E, and production build pass.
