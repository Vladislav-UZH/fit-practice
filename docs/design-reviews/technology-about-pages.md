# Technology and About Pages Design Review

## Scope

- Routes: `/technology`, `/en/technology`, `/about`, `/en/about`
- Branch: `feat/technology-about-pages`
- Desktop reference: 1280 × 900
- Mobile reference: 320 × 800

## Result

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | 2/2 | Technology distinguishes shared concepts from product-specific architecture. About identifies an educational software project. |
| Product hierarchy | 2/2 | The three formats retain distinct roles without rankings or invented superiority. |
| Decision support | 2/2 | Technology links to products and comparison. About links to products, contact, and legal information. |
| Information hierarchy | 2/2 | Each page uses one H1, ordered sections, editorial rows, explicit boundaries, and final actions. |
| Originality and restraint | 2/2 | Technology uses a project-owned diagram. About avoids generic corporate decoration and unsupported history. |
| Mobile usability | 2/2 | Long labels and headings wrap, actions stack, and hydrated 320 px scroll-width checks pass. |
| Accessibility | 1/2 | Semantic headings, lists, links, focus styles, and accessible diagram semantics exist. Manual screen-reader and 200% zoom review remain. |
| Performance and stability | 1/2 | Pages are SSR-rendered, use no remote media, and keep stable diagram dimensions. Formal LCP and CLS measurements remain. |
| Product truth and disclosure | 2/2 | Technology rejects unsupported installation and certification claims. About stays within verified repository facts. |
| Implementation integrity | 2/2 | Typed bilingual content, localized routes, Nuxt-runtime tests, build, and Playwright pass. |

**Total: 18/20**

Passing threshold met. No zero criterion. No unresolved milestone blocker.

## Problems Found

1. Technology and About previously contained only generic introductions.
2. The first browser assertions measured layout before hydration and used an unscoped duplicate action label.
3. The Contact legal action inherited nowrap behavior and expanded a narrow grid track.
4. The long Ukrainian Technology H1 produced text-paint overflow because of large type and negative letter spacing.
5. Nuxt DevTools added irrelevant UI to CI browser runs.

## Corrections Applied

1. Added complete Ukrainian and English content through one typed module.
2. Added four technology principles, three format explanations, an original accessible diagram, and explicit information boundaries.
3. Added verified project facts, engineering capabilities, the working method, and project-scope boundaries.
4. Added a dedicated Codex contract for Technology and About work.
5. Added Nuxt-runtime and Playwright coverage for all four localized routes.
6. Browser tests now wait for hydration, scope duplicate actions, and report overflow diagnostics.
7. Contact grids use `min-w-0`; the long legal action allows wrapping.
8. `PageIntro` headings use safe word wrapping.
9. Nuxt DevTools are disabled when `CI` is set.

## Validation

Passed:

- frozen dependency installation;
- ESLint;
- Nuxt and Vue type checking;
- unit and Nuxt-runtime tests;
- production Nuxt and Nitro build;
- Chromium installation;
- Playwright E2E, including hydrated 320 px checks.

## Remaining Risks

- Manual screen-reader verification remains pending.
- Manual 200% zoom and complete keyboard walkthrough remain pending.
- Formal contrast measurement remains pending.
- Formal LCP and CLS measurement remains pending.
- Existing SVG product silhouettes remain the final project-owned visuals until the optional render milestone is resolved.

## Decision

**Approved with follow-up.**

The informational routes are complete for the educational application scope. Remaining work, excluding deployment, is a final visual-assets decision and release-readiness audit.
