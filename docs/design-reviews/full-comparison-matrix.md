# Full Comparison Matrix Design Review

## Scope

- Routes: `/products/compare` and `/en/products/compare`
- Component: `FullProductComparison`
- Desktop viewport: 1280 × 900
- Mobile viewport: 320 × 800
- Implementation branch: `feat/full-comparison-matrix`

## Page Job

Help a visitor compare all three concept formats against equivalent criteria and continue to a product detail route or the demonstration consultation flow.

The route does not rank products and does not perform engineering selection.

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | One direct heading, three product columns, and four named groups establish the comparison purpose immediately. |
| Product hierarchy | 2/2 | PowerBox 2400, HomeCore 5, and SiteHub 10 retain fixed portfolio order and equal visual weight. |
| Decision support | 2/2 | Twelve equivalent criteria, product-detail routes, the products index, and consultation path support the next decision. |
| Information hierarchy | 2/2 | Desktop values align by semantic rows; mobile repeats the same four groups for each product. |
| Originality and restraint | 2/2 | The page uses a restrained technical table, graphite product context, thin dividers, and no rankings or decorative scoring. |
| Mobile usability | 2/2 | Three product articles expose four groups and twelve values each at 320 px without horizontal scrolling. |
| Accessibility | 1/2 | The table has a caption, scoped column, row, and group headers; mobile uses headings and description lists. Manual screen-reader review remains pending. |
| Performance and stability | 1/2 | Content is server-rendered, adds no media or client dependency, and the production build passes. Formal LCP and CLS measurement remains pending. |
| Product truth and disclosure | 2/2 | Each group repeats an illustrative-specification disclosure; unavailable and configuration-dependent values are explicit. |
| Implementation integrity | 2/2 | Localized product records own values, the shared schema requires every key, order is normalized, and automated checks pass. |

**Total: 18/20**

Passing threshold met. No criterion scored zero. No unresolved blocker.

## First Direction Problems

1. A conventional wide table would compress twelve criteria into unreadable mobile columns.
2. Reusing homepage preview strings would leave important criteria unavailable and couple two different page contracts.
3. Blank cells or dashes would hide the difference between unavailable capability and configuration-dependent output.
4. Group disclosure only at page level would be too far from later technical values.
5. Depending on endpoint order would make product context unstable.

## Corrections Applied

1. Added a dedicated structured comparison object to each localized product record.
2. Added explicit `value`, `configuration-dependent`, and `unavailable` states to the shared schema.
3. Restored portfolio order inside the comparison component.
4. Used one semantic desktop table with sticky product context, aligned values, and scoped headers.
5. Used product-by-product mobile articles with four `dl` groups and no horizontal dependency.
6. Repeated the illustrative-specification disclosure beside every technical group.
7. Added localized product-detail, products-index, and consultation routes.
8. Added component, schema, bilingual E2E, and 320 px overflow coverage.

## Responsive and Accessibility Review

- Desktop: one semantic table with persistent product headings.
- Mobile: three ordinary document-flow articles; no carousel, collapsed values, or swipe requirement.
- 320 px measurement: `window.innerWidth = 320`, `document.documentElement.scrollWidth = 320`.
- Mobile content: 3 products, 12 groups total, and 36 criterion values.
- Keyboard access: all actions are ordinary localized links with shared visible focus styling.
- Reduced motion: the route adds no motion dependency.

## Remaining Risks

- Manual screen-reader verification remains pending.
- Formal contrast measurement remains pending.
- Formal LCP and CLS measurement remains pending.
- Product-detail routes still contain only the initial hero and highlights rather than full grouped specifications.

## Decision

**Approved with follow-up.**

The full comparison route meets the milestone contract. The next product-content milestone should implement complete product-detail sections and grouped specifications using the same authoritative localized records.
