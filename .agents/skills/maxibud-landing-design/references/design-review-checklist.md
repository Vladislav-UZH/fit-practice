# MAXIBUD ENERGY Design Review Checklist

## Purpose

Use this checklist after the first design direction and again after implementation.

Score every criterion:

- `0`: absent, misleading, inaccessible, or materially broken;
- `1`: present but incomplete or inconsistent;
- `2`: clear, coherent, and verified.

Passing threshold:

- at least 16 of 20 points;
- no criterion scored `0`;
- no unresolved blocker.

A high total does not cancel a critical zero.

## 1. Five-Second Comprehension

Can a new visitor identify:

- the product category;
- the three-product portfolio;
- the main intended contexts;
- the next action;
- the conceptual status?

Score: `0 / 1 / 2`

## 2. Product Hierarchy

Are PowerBox 2400, HomeCore 5, and SiteHub 10 visibly related but clearly differentiated?

Check:

- visual family;
- intended context;
- comparable values;
- model naming;
- relative scale.

Score: `0 / 1 / 2`

## 3. Decision Support

Does the page help users choose a relevant route or product instead of merely displaying features?

Check:

- use-case guidance;
- comparison access;
- contextual recommendations;
- clear next steps.

Score: `0 / 1 / 2`

## 4. Information Hierarchy

Is the reading order obvious without relying on color or animation?

Check:

- one H1;
- useful headings;
- concise lead copy;
- evidence close to claims;
- restrained CTA competition;
- technical values introduced with context.

Score: `0 / 1 / 2`

## 5. Originality and Restraint

Does the design avoid generic template output and copied competitor composition?

Reject:

- blue-purple gradient hero;
- logo wall;
- testimonial carousel;
- six identical feature cards;
- decorative dashboard;
- all-dark page without reason;
- excessive glass effects;
- full-page lime treatment;
- copied commercial product body.

Score: `0 / 1 / 2`

## 6. Mobile Usability

Verify:

- 320 px viewport without page overflow;
- readable hero;
- complete product information;
- usable comparison;
- reachable CTA;
- no hover-only content;
- no fixed element obscuring content;
- translated labels fit or wrap correctly.

Score: `0 / 1 / 2`

## 7. Accessibility

Verify:

- keyboard navigation;
- visible focus;
- menu and overlay focus management;
- correct semantic landmarks;
- logical heading order;
- labels and form errors;
- no color-only state;
- sufficient contrast;
- reduced-motion behavior;
- meaningful image alternatives.

Score: `0 / 1 / 2`

## 8. Performance and Stability

Verify:

- one intentional LCP asset;
- explicit image dimensions or aspect ratios;
- below-the-fold lazy loading;
- no unnecessary video;
- no unnecessary motion library;
- no obvious layout shift;
- no hydration warning;
- no oversized transparent render;
- selective icon loading.

Score: `0 / 1 / 2`

## 9. Product Truth and Disclosure

Verify:

- concept status visible;
- specifications labeled illustrative;
- no certification claim;
- no price or availability claim;
- no fake review, rating, client, partner, award, or metric;
- contact success text describes actual behavior;
- no missing document link.

Score: `0 / 1 / 2`

## 10. Implementation Integrity

Verify:

- installed package versions checked;
- semantic HTML remains authoritative;
- Nuxt UI used for accessible behavior;
- brand styling centralized;
- product content not duplicated in components;
- primary content server-rendered;
- locale routes and copy remain complete;
- tests cover changed behavior;
- no unrelated dependency added.

Score: `0 / 1 / 2`

## Blockers

Any blocker prevents approval:

- missing or misleading concept disclosure;
- fabricated commercial proof;
- copied product imagery or copied page design;
- inaccessible primary navigation;
- primary content unavailable without client rendering;
- unreadable mobile comparison;
- missing Ukrainian or English user-facing content;
- visible horizontal page overflow at 320 px;
- contact form claims delivery or storage that does not exist;
- critical build, hydration, or runtime failure.

## First-Pass Critique Questions

Before implementation, answer:

1. Is the design relying on dark surfaces to appear premium?
2. Does the hero contain too many products, values, or CTA options?
3. Can the product differences be explained without images?
4. Are product visuals consistent enough to form a family?
5. Is any section present only because landing-page templates usually contain it?
6. Does every interactive element remain understandable without animation?
7. Is Nuxt UI being used as a component library or mistaken for the brand design?
8. Are mobile reading order and comparison behavior explicitly defined?
9. Are Ukrainian line lengths likely to break the composition?
10. Is any claim stronger than the repository evidence?

## Corrected-Pass Questions

After revision, answer:

1. Which first-pass weaknesses were removed?
2. Which weaknesses were reduced but remain?
3. What became simpler?
4. What became more explicit?
5. Which implementation risks still need a prototype?
6. Which assets must exist before the design can be judged fairly?
7. Which behavior requires browser testing rather than static review?

## Review Record Template

```md
# Design Review

## Scope

- Route or component:
- Locale coverage:
- Viewports reviewed:
- Implementation commit:

## Score

| Criterion | Score | Evidence |
|---|---:|---|
| Five-second comprehension | /2 | |
| Product hierarchy | /2 | |
| Decision support | /2 | |
| Information hierarchy | /2 | |
| Originality and restraint | /2 | |
| Mobile usability | /2 | |
| Accessibility | /2 | |
| Performance and stability | /2 | |
| Product truth and disclosure | /2 | |
| Implementation integrity | /2 | |

Total: `/20`

## Blockers

- None / list blockers.

## First-pass weaknesses

- 

## Corrections applied

- 

## Remaining risks

- 

## Decision

- Approved;
- Approved with follow-up;
- Rework required.
```
