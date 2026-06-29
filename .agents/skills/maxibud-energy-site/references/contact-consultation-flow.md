# Contact Consultation Flow Contract

## Purpose

Use this reference when implementing or reviewing:

- `/contact`;
- `/en/contact`;
- `POST /api/contact`;
- product-detail consultation links using the `product` query parameter.

The contact flow is a demonstration inquiry service for the educational MAXIBUD ENERGY website. It is not an order form, sales delivery system, CRM integration, or persistent storage feature.

## Source of Truth

Shared schema:

- owns approved product query values;
- owns inquiry type values;
- trims and normalizes string inputs;
- enforces length limits;
- requires consent;
- rejects filled honeypot values.

Locale messages own:

- field labels;
- option labels;
- validation messages;
- status messages;
- page and legal explanatory copy.

Product content records own product facts. Do not add product specifications or commercial facts to the contact form or locale messages.

## Required Fields

- name;
- email;
- optional phone;
- optional company;
- product of interest;
- inquiry type;
- message;
- consent;
- hidden honeypot.

Approved product values:

- `powerbox-2400`;
- `homecore-5`;
- `sitehub-10`;
- `unsure`.

Approved inquiry types:

- `consultation`;
- `technical`;
- `distribution`;
- `cooperation`;
- `other`.

## Query Preselection

Product-detail CTAs may link to:

```text
/contact?product={slug}
/en/contact?product={slug}
```

Only approved values may preselect the product field. Unknown, malformed, or repeated query values must not redirect or throw; they fall back to `unsure`.

## Server Endpoint

`POST /api/contact` must:

- validate the body with the shared schema;
- trim and normalize strings authoritatively;
- return structured success and error responses;
- apply basic rate limiting;
- avoid logging personal data;
- avoid returning personal data in the response;
- reject malformed product, inquiry type, consent, length, and honeypot values;
- avoid stack traces and raw internal errors.

Successful demo response describes acceptance by the demonstration service only. It must not claim that an email was sent, a sales team received the request, or the data was permanently stored.

## UI States

The page must expose:

- initial;
- validating;
- submitting;
- success;
- field-error;
- server-error;
- rate-limit.

Every state must be localized. Error states must identify fields, associate controls with error text, and move focus to the first invalid field after client validation.

## Accessibility and Responsive Behavior

- one page `h1`;
- visible labels for all controls;
- instructions before validation errors;
- `aria-invalid` and `aria-describedby` for invalid controls;
- status text in a live region;
- error summary for multiple field errors;
- keyboard-operable controls;
- visible focus;
- no required content available only through hover;
- no page-level horizontal overflow at 320 CSS pixels;
- form controls disabled until hydration to prevent pre-hydration input loss;
- desktop and mobile expose equivalent content.

## Product Truth and Legal Copy

The contact page and legal page must state:

- the flow is demonstrational;
- no real sales delivery is configured;
- no permanent storage is configured;
- no engineering sizing, compatibility verification, price, availability, delivery, or order action is provided.

Do not introduce:

- buy, order, checkout, quote, stock, warranty, certification, delivery, or CRM language;
- fake success IDs that imply persistence;
- fake document downloads;
- sensitive-data logging.

## Acceptance Checks

- product-detail links preselect approved slugs;
- invalid query values fall back to `unsure`;
- valid demo requests return `ok: true` with only non-personal echo fields;
- invalid, malformed, honeypot, and rate-limited requests return safe structured errors;
- form labels, error associations, status messages, and focus behavior are verified;
- Ukrainian and English routes expose semantically equivalent content;
- legal page describes demo contact-data behavior;
- 320 × 800 viewport has no horizontal overflow;
- unit, Nuxt-runtime, endpoint/API, E2E, lint, typecheck, and build checks pass.
