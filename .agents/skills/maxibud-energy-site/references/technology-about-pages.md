# Technology and About Page Contract

## Purpose

Use this reference when implementing or reviewing the complete localized routes:

- `/technology` and `/en/technology`;
- `/about` and `/en/about`.

The technology page explains the portfolio model responsibly. The about page explains the educational software project and its limits without fabricating a company history.

## Technology Page

Required order:

1. localized page introduction;
2. shared portfolio principles;
3. one original project-owned conceptual diagram;
4. product-format interpretation;
5. explicit information boundaries;
6. localized product and comparison actions.

### Approved principles

The page may explain:

- the shared fictional LiFePO4 platform concept;
- grid and solar inputs as product-specific charging scenarios;
- enclosure and protection concepts that vary by form factor;
- local display and web-monitoring concepts;
- portable, stationary modular, and wheeled professional formats.

Do not claim one verified controller, inverter, BMS implementation, protocol, circuit, or physical architecture across every product.

### Safety and truth boundaries

The page must not provide:

- wiring diagrams;
- connector pinouts;
- installation steps;
- repair instructions;
- real runtime calculations;
- equipment sizing;
- compatibility guarantees;
- certification or standards-compliance claims;
- guaranteed cycle life or commercial availability.

The original diagram must represent information relationships rather than an electrical circuit. Expose one localized accessible image label and hide decorative SVG content from assistive technology.

## About Page

Required order:

1. localized page introduction;
2. project identity and concept disclosure;
3. verified implementation facts;
4. engineering capabilities demonstrated by the repository;
5. documented working method;
6. explicit project-scope boundaries;
7. localized product, contact, and legal navigation.

### Approved identity

MAXIBUD ENERGY is a fictional concept product line associated in the educational context with `MAXIBUD LLC / ТОВ «МАКСІБУД»`.

The page may describe verified repository facts such as:

- three concept products;
- Ukrainian and English routes;
- Nuxt 4 and SSR;
- Nitro endpoints;
- structured content and Zod validation;
- accessibility work;
- automated unit, Nuxt-runtime, build, and Playwright checks.

Do not invent:

- company history;
- employees or founders;
- factories or manufacturing capacity;
- partners or distributors;
- markets or sales;
- customers or testimonials;
- awards, patents, certificates, or warranties.

## Localization Ownership

Long-form page content may live in a typed localized content module when both locales are defined together and selected reactively from the active Nuxt i18n locale.

Reusable interface actions remain in the shared locale messages.

Requirements:

- Ukrainian and English remain semantically equivalent;
- SEO title and description are localized;
- localized route helpers are used for products, comparison, contact, legal, and product details;
- neither locale introduces stronger technical or company claims.

## Accessibility and Responsive Behavior

- one `h1` per page;
- logical `h2` and `h3` hierarchy;
- semantic sections, articles, lists, and description lists;
- original diagrams use one localized `role="img"` label;
- decorative SVG content uses `aria-hidden="true"`;
- links remain real localized navigation;
- visible keyboard focus is preserved;
- no important content depends on hover or motion;
- long localized text wraps safely;
- 320 CSS pixels has no horizontal overflow;
- desktop and mobile expose equivalent information.

## Visual Direction

- preserve the warm neutral, graphite, and restrained lime system;
- use ordered editorial rows rather than a generic card wall;
- use thin borders instead of shadows;
- diagrams must be original and local;
- avoid stock photography, fake dashboards, partner logos, or decorative statistics;
- verified project facts may use a compact factual strip.

## Acceptance Checks

- all four localized routes render complete content;
- each page has exactly one `h1`;
- technology renders four approved principles and three product formats;
- technology diagram has a localized accessible label and explicit non-electrical note;
- about identifies the educational software project and concept-product status;
- about avoids company-history, manufacturing, customer, and commercial claims;
- product, comparison, contact, legal, and detail links are localized;
- concept disclosure remains visible;
- 320 × 800 has no horizontal overflow;
- lint, type checking, unit tests, Nuxt-runtime tests, production build, and Playwright E2E pass.
