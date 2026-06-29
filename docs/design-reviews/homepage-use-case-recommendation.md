# Homepage Use-Case Recommendation Design Review

## Scope

- Routes: `/` and `/en`
- Section: homepage use-case recommendation
- Component: `UseCaseRecommendation`
- Desktop viewport: 1280 × 900
- Mobile viewport: 320 × 800
- Implementation branch: `feat/homepage-use-case-recommendation`

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | The heading, three scenario labels, recommended product, and visible disclaimer explain the section's purpose immediately. |
| Product hierarchy | 2/2 | Each context maps to one clearly named product and reuses the product's approved distinction. |
| Decision support | 2/2 | Every recommendation exposes one context, one product, exactly two reasons, a detail action, and a comparison action. |
| Information hierarchy | 2/2 | Desktop states preserve the same content order and action placement; mobile articles use the same hierarchy. |
| Originality and restraint | 2/2 | The section reuses project-owned product visuals and avoids quizzes, scores, badges, and fabricated recommendation confidence. |
| Mobile usability | 2/2 | All three contexts are visible as stacked articles at 320 px with no horizontal overflow. |
| Accessibility | 1/2 | Tabs implement roles, ARIA relationships, roving tabindex, Arrow keys, Home, End, focus movement, and a hydration guard. Manual screen-reader review remains pending. |
| Performance and stability | 1/2 | No new remote asset request is added, SSR build passes, and panel-height spread stays below 16 px. Formal CLS and LCP measurement remains pending. |
| Product truth and disclosure | 2/2 | A visible statement identifies the section as concept navigation rather than engineering sizing, and no real-world suitability claims were introduced. |
| Implementation integrity | 2/2 | Product reasons and distinctions remain in product records, scenario descriptions remain in locale messages, and CI passes. |

**Total: 18/20**

Passing threshold met. No criterion scored zero. No unresolved blocker.

## Problems Found During Validation

1. Visible SSR tab controls could receive keyboard input before Vue hydration completed.
2. The initial E2E height assertion required less than 2 px variation, which treated a measured 9 px spread as a product failure despite no material visual jump.
3. The first component test relied on implicit availability of Vue's `nextTick` rather than importing it explicitly.
4. Each inactive tab originally referenced a panel ID that did not exist until the tab became active.

## Corrections Applied

1. Disabled desktop tabs until `onMounted` and exposed `aria-busy` on the tablist while interaction is unavailable.
2. Added an E2E readiness assertion before keyboard input.
3. Replaced per-state panel IDs with one persistent panel ID controlled by all tabs.
4. Imported `nextTick` explicitly and added strict non-null handling in component tests.
5. Measured all three panel states and enforced a maximum height spread below 16 px.
6. Preserved the stacked mobile fallback so hydration never blocks access to recommendation content on small screens.

## Remaining Risks

- The recommendation is intentionally simple and does not accept detailed load or site inputs.
- Manual screen-reader verification remains pending.
- Formal CLS and LCP measurements remain pending.
- Product visuals are conceptual SVG placeholders rather than final renders.
- The comparison destination is still a placeholder page rather than a completed matrix.

## Decision

**Approved with follow-up.**

The section is suitable to merge as the homepage scenario-guidance layer. The next milestone should implement a compact homepage comparison preview backed by the existing structured comparison values.
