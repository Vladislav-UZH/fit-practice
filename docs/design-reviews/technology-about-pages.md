# Technology and About Pages Design Review

## Scope

- Routes: `/technology`, `/en/technology`, `/about`, `/en/about`
- Implementation branch: `feat/technology-about-pages`
- Desktop reference viewport: 1280 × 900
- Mobile reference viewport: 320 × 800

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | Technology states that the platform shares principles rather than verified universal hardware. About identifies an educational software project rather than a manufacturer history. |
| Product hierarchy | 2/2 | The three formats retain distinct roles and equal portfolio weight without a winner, score, or invented platform advantage. |
| Decision support | 2/2 | Technology routes visitors to the portfolio and full comparison. About routes visitors to products, the demonstration inquiry, and legal disclosures. |
| Information hierarchy | 2/2 | Each page uses one H1, ordered sections, concise introductions, editorial rows, explicit boundaries, and a final action area. |
| Originality and restraint | 2/2 | Technology uses a project-owned line diagram and restrained technical surfaces. About avoids stock imagery, generic company-history blocks, partner logos, and decorative dashboards. |
| Mobile usability | 2/2 | Long labels wrap, diagram labels reflow, actions stack, and the hydrated 320 px layouts are covered by browser tests. |
| Accessibility | 1/2 | Semantic headings, lists, links, visible focus, one accessible diagram label, and hidden decorative SVG content are implemented. Manual screen-reader and 200% zoom review remain pending. |
| Performance and stability | 1/2 | Pages are SSR-rendered, use no remote media, and keep diagram dimensions stable. Formal LCP and CLS measurement remain pending. |
| Product truth and disclosure | 2/2 | Technology rejects wiring, repair, certification, compatibility, and sizing claims. About rejects fabricated company history, facilities, staff, customers, partners, and commercial history. |
| Implementation integrity | 2/2 | Ukrainian and English content are defined together in a typed module, routes use locale helpers, Nuxt-runtime tests pass, and the production build passes. |

**Total: 18/20**

Passing threshold met. No criterion scored zero. No unresolved milestone blocker.

## Problems in the Previous State

1. `/technology` and `/about` contained only generic page introductions.
2. The technology route did not explain the portfolio platform or distinguish shared principles from product-specific architecture.
3. The about route did not explain the software-project purpose, verified repository capabilities, or scope boundaries.
4. Adding company-style content without explicit constraints could have fabricated history, staff, factories, partners, customers, or market activity.
5. The first E2E pass measured 320 px layout before Vue hydration and used an unscoped consultation-link locator, producing unstable assertions rather than evidence about the final interface.

## Corrections Applied

1. Added complete Ukrainian and English content for both routes in one typed localized content module.
2. Added four approved technology principles, three product-format interpretations, an original accessible SVG diagram, and explicit technical boundaries.
3. Added verified project facts, four engineering-capability rows, a four-step working method, and explicit project-scope boundaries.
4. Added a dedicated Codex contract that prohibits hardware, certification, compatibility, company-history, manufacturing, and commercial fabrication.
5. Added Nuxt-runtime coverage for structure, routes, diagram semantics, facts, capabilities, process, and disclosures.
6. Added Playwright coverage for all four localized routes and 320 px stability.
7. Updated browser tests to wait for hydrated controls before width measurement and scoped duplicate action names to their route-level containers.

## Remaining Risks

- Manual screen-reader verification remains pending.
- Manual 200% zoom and complete keyboard walkthrough remain pending.
- Formal contrast measurement remains pending.
- Formal LCP and CLS measurement remains pending.
- Existing SVG product silhouettes remain the final available project-owned visuals until the optional render milestone is completed.

## Decision

**Approved with follow-up.**

The informational routes are complete for the educational application scope. The remaining application work, excluding deployment, is a final visual-assets decision and release-readiness audit.
