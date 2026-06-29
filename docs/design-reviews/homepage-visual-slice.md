# Homepage Visual Slice Design Review

## Scope

- Routes: `/` and `/en`
- Components: global header, mobile navigation, homepage hero, product-family stage, portfolio proof strip
- Locales: Ukrainian and English
- Automated viewport: 390 × 844 for the mobile interaction flow
- Implementation branch: `feat/homepage-visual-slice`

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | Hero identifies the category, three-format portfolio, main contexts, primary action, and concept status. |
| Product hierarchy | 2/2 | One original SVG stage presents all three formats at relative scale with separate product labels and contexts. |
| Decision support | 1/2 | Product and comparison paths are clear, but the use-case selector is not implemented yet. |
| Information hierarchy | 2/2 | One H1, restrained CTA hierarchy, product evidence beside the claim, and a factual proof strip. |
| Originality and restraint | 2/2 | Original local SVG, light-dominant composition, one graphite stage, no logo wall, testimonials, pricing, or fake metrics. |
| Mobile usability | 1/2 | The 390 px interaction flow passes. A dedicated 320 px visual regression review remains pending. |
| Accessibility | 1/2 | Semantic structure, accessible SVG label, visible focus, Escape close, and focus restoration are covered. Manual screen-reader and contrast review remain pending. |
| Performance and stability | 1/2 | SSR build passes, the stage is inline SVG with explicit dimensions, and no remote font or image request is added. Formal LCP and CLS measurements remain pending. |
| Product truth and disclosure | 2/2 | Concept label is visible and no availability, certification, customer, partner, pricing, or market claims were introduced. |
| Implementation integrity | 2/2 | Nuxt UI is used for the Drawer behavior, project components own presentation, both locales are complete, and CI passes. |

**Total: 16/20**

Passing threshold met. No criterion scored zero. No unresolved blocker.

## First-Pass Weaknesses Found

1. The initial `UDrawer` trigger composition rendered correctly but did not open reliably in Playwright.
2. A visible SSR button could be clicked before Vue hydration completed, causing the interaction to be lost.
3. The first custom component prop name collided with Vue attribute handling and failed type checking.
4. CI did not preserve Playwright diagnostics after browser-test failure.

## Corrections Applied

1. Replaced implicit `DrawerTrigger as-child` activation with explicit controlled Drawer state.
2. Disabled the mobile trigger until `onMounted`, preventing pre-hydration clicks.
3. Added explicit focus restoration after the Drawer closes.
4. Renamed the SVG accessibility prop to `accessibleLabel`.
5. Added Playwright failure-report artifacts to CI.
6. Kept all product names and contexts outside the SVG artwork for localization and accessibility.

## Remaining Risks

- The SVG is an approved conceptual placeholder, not the final product-render family.
- The 320 px viewport requires a dedicated visual regression pass.
- Typography still uses a system-first stack; a final font-loading decision remains open.
- Full use-case guidance, comparison preview, and product chapters are not part of this slice.
- Manual screen-reader, contrast, LCP, and CLS checks remain pending.

## Decision

**Approved with follow-up.**

The slice is suitable to merge as the visual and interaction foundation for the next homepage sections. It is not a completed homepage or final product visual system.
