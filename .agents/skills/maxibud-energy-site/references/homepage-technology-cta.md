# Homepage Technology and Final CTA Contract

## Purpose

Use this reference when implementing or reviewing the shared-technology chapter and final call to action on the homepage.

The technology chapter explains the portfolio model at a high level. The final CTA gives the visitor one clear next step without implying a real commercial transaction.

## Approved Shared Principles

The homepage may state only these shared portfolio principles:

1. all three concepts use the approved fictional LiFePO4 platform concept;
2. enclosure, connection approach, charging or compatible-system path, and placement vary by form factor;
3. every product includes a status or monitoring concept appropriate to its working context.

Do not claim that the products share one verified controller, inverter, battery-management implementation, communications protocol, certification, or physical electrical architecture.

## Source of Truth

Use `references/fictional-product-data.md` for product-platform facts and prohibited claims.

Use locale messages for:

- section headings;
- principle titles and explanatory copy;
- diagram labels and notes;
- technology-route action copy;
- final CTA copy;
- consultation-flow disclosure.

Do not move product specifications or electrical values into locale messages.

## Shared Technology Chapter

Required content:

1. platform eyebrow;
2. direct section heading;
3. concise statement distinguishing shared principles from product-specific architecture;
4. exactly three principle rows;
5. one original project-owned technical diagram;
6. one localized route to the technology page;
7. one visible statement that the section is not installation, wiring, repair, or electrical-design guidance.

### Principle Order

Render principles in this order:

1. LiFePO4 concept platform;
2. form-factor-specific architecture;
3. context-specific status and monitoring.

Do not render the principles as generic equal marketing cards. Use a restrained editorial or technical list with visible order.

## Technical Diagram

The diagram must:

- be project-owned and original;
- use inline SVG or another local asset;
- contain no copied commercial product layout;
- represent portfolio relationships rather than a real circuit;
- expose one accessible `role="img"` label;
- keep decorative SVG content hidden from assistive technology;
- keep textual labels in normal DOM content rather than embedding them into the SVG;
- state that the diagram does not describe electrical connections.

Do not include wiring paths, connector pinouts, voltage labels, assembly steps, or repair information.

## Visual Direction

The comparison preview already uses a full-width graphite surface. To preserve section separation, the technology chapter may use the warm neutral surface with a contained graphite diagram panel.

Required visual behavior:

- no card-grid wall;
- no decorative dashboard;
- no remote image request;
- thin borders instead of shadows;
- lime used as a restrained technical accent;
- clear visible focus on the technology action;
- diagram dimensions remain stable during rendering.

## Final CTA

Use one concrete question about the visitor's use case.

Required actions:

1. primary action to the localized contact route;
2. secondary action to the localized products route.

Required disclosure:

- the inquiry is part of an educational demonstration flow;
- it does not replace engineering calculation, system design, or compatibility verification;
- it makes no claim about price, delivery, stock, or commercial availability.

Do not add urgency timers, limited-stock wording, quote promises, purchase language, or fake response-time claims.

## Mobile Behavior

At 320 px:

- principle rows remain normal document content;
- diagram labels remain readable without horizontal scrolling;
- the technical diagram does not overflow the viewport;
- CTA actions stack vertically when needed;
- both actions remain visible and keyboard-accessible;
- no content depends on hover, swipe, or disclosure interaction.

## Localization

- Ukrainian and English versions remain semantically equivalent;
- technology, contact, and products actions use localized routes;
- technical terms preserve the same conceptual strength in both locales;
- neither locale introduces stronger safety, compatibility, or commercial claims.

## Acceptance Checks

- exactly three approved principles are rendered in the documented order;
- no unapproved shared-hardware claim appears;
- the diagram has an accessible label and is explicitly non-electrical;
- the technology action routes to `/technology` and `/en/technology`;
- the consultation action routes to `/contact` and `/en/contact`;
- the products action routes to `/products` and `/en/products`;
- concept status is visible in the final CTA;
- 320 px has no horizontal overflow;
- Ukrainian and English content remain semantically equivalent;
- lint, type checking, tests, E2E, and production build pass.
