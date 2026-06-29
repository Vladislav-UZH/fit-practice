# Full Product Detail Contract

## Purpose

Use this reference when implementing or reviewing:

- `/products/powerbox-2400`;
- `/products/homecore-5`;
- `/products/sitehub-10`;
- the equivalent English routes under `/en`.

The product-detail experience explains one concept product completely without creating separate page implementations or implying commercial availability.

## Source of Truth

Localized product records own:

- product tagline, summary, context, and distinction;
- detailed overview;
- features and intended conceptual applications;
- product visual description;
- highlights;
- every specification label, value, qualifier, note, and status;
- optional conceptual document metadata;
- product-specific disclosure;
- localized SEO title and description.

Locale messages own only reusable interface headings, actions, disclosures, and status labels.

Do not duplicate product values in Vue components or locale messages. The existing `comparison` object remains the source for the full comparison matrix and must not be replaced or copied into another comparison component.

## Shared Template

Use one dynamic route and one reusable content-driven template for all three products.

Required order:

1. product hero;
2. highlights;
3. detailed overview;
4. key features;
5. conceptual applications;
6. grouped specifications;
7. optional documents when real files exist;
8. related portfolio navigation;
9. demonstration consultation CTA.

The hero includes category, name, tagline, summary, context, distinction, original project-owned visual, comparison action, and product-aware consultation action.

## Specification Groups

Every product record provides exactly these groups in this order:

1. `energy` — Energy;
2. `output-input` — Input and output;
3. `physical` — Physical characteristics;
4. `environment` — Environment;
5. `controls` — Controls and monitoring.

Every item uses the shared structured value model:

- `value`;
- `configuration-dependent`;
- `unavailable`.

Ordinary values still use explicit `value` status after schema parsing. Configuration-dependent and unavailable states require localized visible labels.

Product-detail values must remain consistent with the existing comparison matrix. Equivalent values may use a more detailed display unit, such as `2,400 W` on the detail route and `2.4 kW` in comparison, but their meaning must be identical.

## Product Truth

Keep a visible illustrative-specification disclosure at the start of the technical section and beside every specification group.

Applications describe intended conceptual contexts. They do not establish:

- guaranteed runtime;
- support for every load;
- guaranteed compatibility;
- installation suitability;
- certified environmental protection;
- commercial availability.

Do not add prices, stock, delivery schedules, warranties, certifications, reviews, or unsupported suitability claims.

## Documents

Render a document section only when at least one localized product record declares a repository-owned conceptual file that exists.

Each document must:

- use a `/documents/` repository path;
- match the page locale and product;
- identify itself as conceptual;
- avoid certification or approval presentation.

When no file exists, keep `documents: []` and render no document section, disabled control, filename, or “coming soon” download.

## Accessibility and Responsive Behavior

- one page `h1`;
- logical `h2` and `h3` hierarchy;
- semantic sections and articles;
- highlights and specification groups use `dl`, `dt`, and `dd`;
- original product visual has a localized accessible name;
- navigation uses real localized links;
- visible focus remains available;
- no core content depends on hover or motion;
- all information remains in document flow on mobile;
- no wide detail table;
- long values wrap;
- no page-level horizontal overflow at 320 CSS pixels.

Desktop and mobile expose equivalent content.

## SEO and Errors

Every localized product route uses its product record for title and description and the shared SEO composable for canonical metadata.

Unknown slugs, unsupported slugs, and missing localized records retain intentional 404 behavior. Do not replace missing content with a redirect or silent fallback.

## Acceptance Checks

- one template serves all six localized routes;
- all records contain overview, features, applications, visual description, five specification groups, documents, and SEO;
- group order is schema-validated;
- all three value states are supported;
- comparison and product-detail values are consistent;
- no missing document action is rendered;
- comparison, products-index, consultation, and related-product links are localized;
- concept status remains visible near technical content;
- all six routes render localized content;
- unknown slug returns 404;
- keyboard actions retain visible focus;
- 320 × 800 has no horizontal overflow;
- lint, typecheck, unit tests, Nuxt-runtime tests, E2E, and production build pass.
