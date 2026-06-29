# Homepage Comparison Preview Contract

## Purpose

Use this reference when implementing or reviewing the compact comparison section on the homepage.

The preview must help visitors scan the three product formats quickly before opening the full comparison route. It is not a replacement for the complete comparison matrix.

## Source of Truth

Use the existing localized product records for:

- product name;
- category;
- product slug;
- capacity;
- rated output;
- format.

Read the technical values from `product.lineup.comparison`.

Do not duplicate product values or units in locale messages. Locale messages own only section headings, explanatory text, disclosure copy, table labels, and action labels.

## Portfolio Order

Always render products in this order:

1. `powerbox-2400`;
2. `homecore-5`;
3. `sitehub-10`.

Do not trust input array order. Restore the portfolio order inside the component.

## Required Metrics

Render exactly these metrics in this order:

1. capacity;
2. rated output;
3. format.

Do not add runtime, charging time, certification, pricing, or installation claims to the homepage preview.

## Desktop Structure

Use a semantic HTML table at desktop widths.

Required behavior:

- include an accessible caption;
- use one row-header column for metric labels;
- use one product column per product;
- use `scope="col"` for product headers;
- use `scope="row"` for metric labels;
- align every product against the same metric rows;
- include one localized product-detail action per product;
- include one primary action to the full comparison route;
- avoid ranking badges, score bars, winners, or decorative checkmark noise.

The table must fit the desktop container without horizontal scrolling.

## Mobile Structure

At mobile widths:

- hide the desktop table from visual presentation;
- render all three products as stacked articles;
- use a `dl` with capacity, output, and format for each product;
- preserve portfolio order;
- include one product-detail action per article;
- include the full-comparison action after the cards;
- support 320 px without horizontal overflow.

Do not use a horizontally scrolling table, carousel, swipe-only interaction, or collapsed disclosure for the core values.

## Visual Direction

Use a graphite technical section to separate comparison from the preceding light sections.

- keep the section predominantly dark graphite;
- use lime only for eyebrow text and restrained accents;
- use thin borders instead of card shadows;
- keep technical values more prominent than labels;
- preserve strong visible focus states;
- do not add product imagery to this compact preview.

## Truth and Disclosure

Keep visible disclosure near the metrics stating that the values are illustrative specifications for educational concepts and are not certified commercial parameters.

Do not imply:

- certification;
- current market availability;
- suitability for a real installation;
- validated runtime;
- product superiority;
- pricing or delivery terms.

## Localization

- Ukrainian and English values come from their respective product records;
- decimal separators and units must remain internally consistent within each locale;
- product names and slugs remain stable;
- action routes must use localized paths.

## Acceptance Checks

- portfolio order is PowerBox 2400, HomeCore 5, SiteHub 10;
- capacity, output, and format come from product records;
- desktop uses one semantic table with aligned rows;
- mobile exposes all three products as stacked articles;
- mobile does not require horizontal scrolling;
- 320 px has no horizontal overflow;
- product-detail actions use localized routes;
- full-comparison action uses the localized comparison route;
- Ukrainian and English values remain semantically equivalent;
- disclosure remains visible near the comparison surface;
- lint, type checking, tests, E2E, and production build pass.
