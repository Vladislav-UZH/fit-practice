# Homepage Comparison Preview Design Review

## Scope

- Routes: `/` and `/en`
- Section: homepage comparison preview
- Component: `ProductComparisonPreview`
- Desktop viewport: 1280 × 900
- Mobile viewport: 320 × 800
- Implementation branch: `feat/homepage-comparison-preview`

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | The heading, three product columns, and three repeated metrics explain the comparison purpose immediately. |
| Product hierarchy | 2/2 | Products remain in fixed portfolio order and use equal visual weight without invented winners. |
| Decision support | 2/2 | Capacity, rated output, format, product-detail actions, and a full-comparison action support the next decision. |
| Information hierarchy | 2/2 | Desktop values align by row; mobile values use the same ordered `dl` structure for every product. |
| Originality and restraint | 2/2 | A graphite technical surface separates the section from the light narrative chapters without rankings, score bars, or dashboard decoration. |
| Mobile usability | 2/2 | All products and metrics are stacked at 320 px with no horizontal table scrolling or page overflow. |
| Accessibility | 1/2 | The desktop table includes a caption, scoped row and column headers, descriptive links, and visible focus behavior. Manual screen-reader and contrast verification remain pending. |
| Performance and stability | 1/2 | The section is SSR-rendered, adds no image or remote-asset request, and production build passes. Formal LCP and CLS measurement remains pending. |
| Product truth and disclosure | 2/2 | Technical values remain explicitly illustrative and no certification, availability, runtime, price, or installation claims were added. |
| Implementation integrity | 2/2 | Values come from product records, interface text comes from locale files, input order is normalized, and CI passes. |

**Total: 18/20**

Passing threshold met. No criterion scored zero. No unresolved blocker.

## Problems in the Previous State

1. The homepage required visitors to scan three separate product chapters to compare the same technical fields.
2. There was no aligned view of capacity, output, and mobility format.
3. The comparison route existed only as a placeholder and had no useful homepage entry surface.
4. A conventional wide comparison table would have required horizontal scrolling on mobile.
5. Depending on API array order would have made portfolio presentation unstable.

## Corrections Applied

1. Added one compact technical section after use-case guidance.
2. Read all displayed values from `product.lineup.comparison`.
3. Restored PowerBox, HomeCore, SiteHub order inside the component.
4. Added a semantic desktop table with an accessible caption and scoped headers.
5. Added stacked mobile articles using `dl`, with no horizontal table scrolling.
6. Added one localized product path per product and one localized full-comparison action.
7. Added explicit concept-specification disclosure beside the section introduction.
8. Added component and E2E coverage for order, values, routes, responsive representation, and 320 px overflow.

## Remaining Risks

- Manual screen-reader verification remains pending.
- Dark-surface contrast should receive a formal manual audit.
- Formal LCP and CLS measurements remain pending.
- The full comparison route is still a placeholder and does not yet provide grouped specifications.
- The preview intentionally compares only three fields and must not expand into the complete matrix.

## Decision

**Approved with follow-up.**

The preview is suitable to merge as the homepage technical comparison layer. The next milestone should add the shared technology chapter and final homepage call to action, while the full comparison matrix remains a separate route-level milestone.
