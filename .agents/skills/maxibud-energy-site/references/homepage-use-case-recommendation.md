# Homepage Use-Case Recommendation Contract

## Purpose

Use this reference when implementing or reviewing the homepage section that maps visitor context to one MAXIBUD ENERGY concept product.

The section is navigational guidance between fictional concepts. It is not engineering sizing, installation advice, or a commercial recommendation.

## Source of Truth

Use existing localized product records for:

- product name;
- category;
- primary distinction;
- exactly two reasons;
- product slug;
- accessible product-visual description.

Do not duplicate product reasons or distinctions in locale messages.

Use locale messages only for reusable interface copy and scenario descriptions.

## Required Context Mapping

| Use case | Product |
|---|---|
| home and small office | `homecore-5` |
| mobile work | `powerbox-2400` |
| construction site and mobile workshop | `sitehub-10` |

Do not change this mapping without updating product positioning and all localized content.

## Desktop Interaction

Use an accessible tabs or segmented-control pattern.

Required behavior:

- one tab is active on initial render;
- tabs expose `role="tab"`, `aria-selected`, `aria-controls`, and roving `tabindex`;
- the active panel exposes `role="tabpanel"` and `aria-labelledby`;
- Arrow Right and Arrow Left move through tabs and wrap;
- Home moves to the first tab;
- End moves to the last tab;
- keyboard selection moves focus to the newly selected tab;
- switching contexts must not create a visible panel-height jump.

The default context is home and small office.

## Mobile Fallback

At mobile widths:

- render all three recommendations as stacked articles;
- do not require tab, carousel, disclosure, or swipe interaction;
- preserve context order: home, mobile work, construction site;
- include exactly two product reasons and one product-detail action per article;
- include a comparison action;
- support 320 px without horizontal overflow.

Hidden desktop tabs must not be the only way to access content on mobile.

## Recommendation Panel

Each recommendation includes:

1. context label;
2. context title;
3. concise context description;
4. recommended-concept label;
5. product name;
6. product distinction from the product record;
7. exactly two reasons from the product record;
8. one localized product-detail action;
9. one localized comparison action;
10. original product visual on desktop.

## Truth Rules

Keep a visible statement that the section is portfolio navigation, not an engineering calculation for a real installation.

Do not add:

- runtime estimates;
- load calculations;
- installation suitability claims;
- certification claims;
- availability or pricing;
- claims that one product is universally best.

Relative portfolio wording such as compact, stationary, transportable, or highest-output is allowed only when supported by the project product records.

## Layout and Stability

- maintain a stable desktop panel minimum height;
- keep product text and actions in the same location across states;
- use one visual area with explicit dimensions;
- avoid animated height transitions;
- avoid auto-rotating tabs;
- respect reduced-motion settings;
- preserve visible keyboard focus.

## Acceptance Checks

- context mapping matches this reference;
- recommendation reasons come from product records;
- desktop keyboard navigation supports Arrow keys, Home, and End;
- active tab and panel ARIA attributes remain synchronized;
- panel height remains stable across context changes;
- mobile exposes all three contexts without interaction;
- Ukrainian and English versions remain semantically equivalent;
- 320 px has no horizontal overflow;
- localized product and comparison routes work;
- concept guidance disclaimer remains visible;
- lint, type checking, tests, E2E, and build pass.
