# Homepage Product Lineup Design Review

## Scope

- Routes: `/` and `/en`
- Section: homepage product portfolio
- Components: `ProductLineupChapter` and `ProductLineupVisual`
- Products: PowerBox 2400, HomeCore 5, SiteHub 10
- Automated mobile viewport: 320 × 800
- Implementation branch: `feat/homepage-product-lineup`

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | The section title, description, product names, contexts, and primary distinctions explain the portfolio without opening another route. |
| Product hierarchy | 2/2 | Three substantial chapters use consistent hierarchy and distinct technical silhouettes. |
| Decision support | 2/2 | Every chapter exposes context, distinction, two reasons, capacity, output, format, and one detail action. |
| Information hierarchy | 2/2 | Repeated metric order and restrained chapter structure make scanning predictable. |
| Originality and restraint | 2/2 | Original inline SVG diagrams replace the generic card grid without introducing ornamental dashboards or fabricated proof. |
| Mobile usability | 2/2 | All products remain visible without interaction and the automated 320 px check reports no horizontal overflow. |
| Accessibility | 1/2 | Semantic articles, heading order, text-first DOM order, visible focus, and accessible visual labels are present. Manual screen-reader review remains pending. |
| Performance and stability | 1/2 | Inline SVGs have explicit dimensions, add no external requests, and the SSR production build passes. Formal LCP and CLS measurement remains pending. |
| Product truth and disclosure | 2/2 | Concept status remains visible and no availability, certification, customer, pricing, or market-position claims were added. |
| Implementation integrity | 2/2 | Product copy lives in localized content, reusable labels live in locale files, comparison data is separately modeled, and CI passes. |

**Total: 18/20**

Passing threshold met. No criterion scored zero. No unresolved blocker.

## Problems in the Previous State

1. The homepage repeated the generic catalog card component.
2. Product differences were buried inside summaries and inconsistent highlight labels.
3. Comparable values were not modeled separately for decision-oriented presentation.
4. The previous layout did not prove support for a 320 px viewport.
5. Product visuals had no product-specific accessible descriptions.

## Corrections Applied

1. Added a dedicated localized `lineup` object to every product record.
2. Separated intended context, primary distinction, two reasons, and three comparable values.
3. Replaced the card grid with alternating asymmetric product chapters.
4. Preserved text-first DOM order while alternating visual position only at desktop widths.
5. Added one project-owned technical SVG silhouette per product format.
6. Added accessible visual descriptions outside the artwork.
7. Added bilingual portfolio-order, API-contract, and 320 px overflow tests.
8. Added a reusable skill reference for future homepage-lineup work.

## Remaining Risks

- The inline SVGs are conceptual placeholders, not final product renders.
- Manual screen-reader review remains pending.
- Formal LCP and CLS measurement remains pending.
- The lineup explains product differences but does not yet provide an interactive use-case recommendation.
- The dedicated comparison preview and full comparison matrix are not implemented.

## Decision

**Approved with follow-up.**

The product lineup is suitable to merge as the homepage portfolio decision layer. The next milestone should add the use-case recommendation section without duplicating the lineup content.
