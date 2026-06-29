# Full Comparison Matrix Contract

## Purpose

Use this reference when implementing or reviewing `/products/compare` and `/en/products/compare`.

The route helps visitors compare the three educational concept formats against equivalent criteria. It does not rank products or perform engineering selection.

## Source of Truth

Use localized product records for:

- product name, category, slug, and context;
- every displayed comparison value;
- explicit value status.

Use locale messages only for:

- page headings and explanatory copy;
- group and row labels;
- status labels;
- disclosures and actions.

Do not parse values from highlights, prose, or the homepage preview. Do not duplicate product values in Vue components or locale messages.

## Portfolio Order

Always restore this order:

1. `powerbox-2400`;
2. `homecore-5`;
3. `sitehub-10`.

Do not trust API or input array order.

## Required Groups and Rows

Render these groups and rows in this order:

1. Use context
   - primary use;
   - intended user.
2. Energy and output
   - energy;
   - rated output;
   - peak output.
3. Format and placement
   - mobility;
   - placement format;
   - approximate weight;
   - enclosure concept.
4. Charging, expansion, and status
   - charging sources;
   - expansion;
   - monitoring.

Every product record must provide every key. The shared schema must reject incomplete matrices.

## Value Status

Every value uses one of:

- `value`: an approved illustrative specification;
- `configuration-dependent`: the value depends on compatible system configuration;
- `unavailable`: the current concept does not provide the capability.

Show localized status text with the product value. Do not replace unavailable values with ambiguous dashes or checkmarks.

Required truthful exceptions:

- HomeCore 5 peak output is configuration-dependent;
- PowerBox 2400 expansion is unavailable in the current concept;
- SiteHub 10 expansion is unavailable in the current concept.

## Desktop Structure

Use one semantic table at `lg` and above:

- accessible caption;
- one criterion column;
- one column for each product;
- `scope="col"` product headers;
- `scope="row"` criterion headers;
- `scope="colgroup"` group headings;
- aligned equivalent values;
- persistent product context while scrolling;
- localized product-detail links.

Do not compress the desktop table into mobile widths.

## Mobile Structure

Below `lg`, render product-by-product articles:

- one article for each product;
- all four groups in every article;
- one `dl` per group;
- all twelve values;
- localized product-detail action;
- no horizontal scrolling, carousel, or swipe dependency.

The complete route must remain stable at 320 CSS pixels.

## Truth and Disclosure

Show a concise localized illustrative-specification disclosure beside every group.

Do not add:

- rankings, winners, scores, or universal recommendations;
- prices, stock, availability, delivery, or warranty;
- certifications or verified compliance;
- guaranteed compatibility, runtime, or installation suitability;
- inferred technical values.

The final consultation action must state that the demonstration flow does not provide engineering sizing, installation design, compatibility verification, pricing, or availability.

## Localization

- Ukrainian is the default route.
- English uses `/en`.
- Product names and slugs remain unchanged.
- Decimal and unit conventions remain internally consistent within each locale.
- Product, products-index, and contact actions use locale-aware routing utilities.

## Acceptance Checks

- product records own all matrix values;
- schema rejects missing values and unsupported statuses;
- fixed portfolio order is preserved;
- desktop table semantics and aligned rows are correct;
- product context remains available while scrolling;
- mobile exposes three products, four groups, and twelve values per product;
- configuration-dependent and unavailable states are explicit;
- disclosures appear near every group;
- localized product-detail, products-index, and consultation routes work;
- no forbidden claim or ranking appears;
- no horizontal overflow occurs at 320 px;
- lint, typecheck, component tests, E2E, and build pass.
