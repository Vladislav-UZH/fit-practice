# Homepage Product Lineup Contract

## Purpose

Use this reference for the homepage section that helps visitors distinguish PowerBox 2400, HomeCore 5, and SiteHub 10 without opening every detail page.

The section is not a catalog-card grid and must not become a carousel.

## Required Product Data

Store the following localized object in each product record:

```ts
interface ProductLineup {
  context: string
  distinction: string
  reasons: [string, string]
  comparison: {
    capacity: string
    output: string
    format: string
  }
  visualDescription: string
}
```

Meaning:

- `context`: primary working situation;
- `distinction`: strongest difference from the other products;
- `reasons`: exactly two factual reasons;
- `comparison`: separately modeled display values;
- `visualDescription`: accessible description of the concept visual.

Do not derive comparison values by parsing prose or specification rows.

## Content Ownership

Keep product-specific copy and values in localized product content.

Keep reusable labels such as Capacity, Output, Format, and View product in locale messages.

Product names and slugs remain stable across locales.

## Chapter Order

Each chapter contains:

1. portfolio number;
2. category and concept label;
3. product name;
4. primary distinction;
5. intended context;
6. concise summary;
7. two reasons;
8. Capacity, Output, and Format values;
9. one detail action;
10. one original product visual.

Use the same hierarchy for all three products.

## Layout

Desktop:

- use an asymmetric 5/7 or 7/5 grid;
- alternate visual position;
- keep text and metric order unchanged;
- give the visual 45 to 60 percent of the chapter width.

Mobile:

- preserve DOM order as text first and visual second;
- stack comparison values;
- support 320 px without horizontal overflow;
- keep all three products visible without interaction.

## Visual Rules

- use original project-owned SVG or image assets;
- keep localized product names outside artwork;
- give every visual a meaningful accessible label;
- make silhouettes different while preserving one product-family language;
- use graphite and lime selectively.

Current inline SVG diagrams are concept placeholders, not final product renders.

## Claim Rules

Allowed content includes intended context, relative portfolio distinction, illustrative capacity, output, mass, mobility, and modularity.

Do not add certification, availability, customer, pricing, delivery, or market-leadership claims without repository evidence.

## Acceptance Checks

- portfolio order is PowerBox 2400, HomeCore 5, SiteHub 10;
- every product has a distinct context and distinction;
- comparison labels and units are consistent within each locale;
- Ukrainian and English versions remain semantically equivalent;
- 320 px has no horizontal overflow;
- visuals have accessible descriptions;
- detail links use localized routes;
- concept status remains visible;
- lint, type checking, tests, E2E, and build pass.
