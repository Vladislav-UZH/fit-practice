---
name: maxibud-energy-site
description: Build, extend, review, or refine the MAXIBUD ENERGY bilingual product showcase website for the fictional PowerBox 2400, HomeCore 5, and SiteHub 10 product line. Use for project-specific product strategy, information architecture, page requirements, content, visual direction, localization, product comparison, inquiry flows, and concept-product disclosures. Use only in this repository. Do not use for generic Nuxt engineering, real battery engineering, certification claims, e-commerce checkout, or unrelated brands.
---

# MAXIBUD ENERGY Product Website

## Purpose

Use this skill for product-specific decisions and implementation work related to the **MAXIBUD ENERGY** educational website.

The website presents a fictional product line associated with **MAXIBUD LLC / ТОВ «МАКСІБУД»**:

- MAXIBUD PowerBox 2400
- MAXIBUD HomeCore 5
- MAXIBUD SiteHub 10

This skill defines:

- product positioning;
- target audiences;
- information architecture;
- page requirements;
- design direction;
- content ownership;
- localized copy;
- comparison logic;
- inquiry flow;
- truth and disclosure rules.

It does not replace the reusable `nuxt4-production` skill. For Nuxt architecture, SSR, Nitro, Content APIs, i18n APIs, testing, security, and deployment, also apply `$nuxt4-production` when available.

## Product Status

All three products are fictional concepts created for an educational software project.

Never state or imply that they are:

- commercially available;
- certified;
- independently tested;
- legally approved;
- patented;
- deployed by real customers;
- covered by a real warranty;
- manufactured at a verified facility;
- compliant with a named standard without evidence.

Allowed phrasing:

- concept product;
- illustrative specification;
- designed for;
- intended use;
- product concept;
- demonstration website.

Required disclosure:

> MAXIBUD ENERGY is a conceptual product line created for an educational software demonstration. Product specifications are illustrative and do not represent certified commercial hardware.

Ukrainian version:

> MAXIBUD ENERGY — концептуальна продуктова лінійка, створена для навчальної демонстрації програмного забезпечення. Характеристики продуктів є ілюстративними та не описують сертифіковане комерційне обладнання.

Keep this disclosure visible in the footer and legal page. Show a concise disclosure near technical specifications and downloadable documents.

## Activation Boundaries

Use this skill for:

- homepage and product-site planning;
- product catalog and product detail pages;
- product comparison;
- use-case recommendation;
- product copy;
- Ukrainian and English content;
- visual identity and component direction;
- product visuals;
- contact and consultation flow;
- technology and about pages;
- legal disclosure;
- conceptual datasheet content;
- project-specific UX review.

Do not use this skill for:

- general Nuxt troubleshooting;
- dependency upgrades unrelated to MAXIBUD;
- real battery assembly, repair, wiring, or safety instructions;
- hardware calculations used for actual installations;
- checkout, payment, inventory, authentication, or CRM;
- fabricated testimonials, certificates, clients, awards, or partner logos;
- unrelated company websites.

## Instruction Priority

Follow:

1. current user request;
2. applicable `AGENTS.override.md`;
3. applicable `AGENTS.md`;
4. this project skill;
5. explicitly invoked reusable engineering skills;
6. existing repository conventions.

If the current repository already contains approved project content, preserve it unless the user requests a change or it conflicts with product-truth rules.

## Required Workflow

### 1. Inspect the current product state

Before editing:

1. Read applicable repository instructions.
2. Inspect existing routes, components, content files, translations, and assets.
3. Determine which product requirements already exist.
4. Identify incomplete, duplicated, contradictory, or fabricated claims.
5. Preserve unrelated user work.

### 2. Classify the task

Choose the smallest relevant category:

- product positioning;
- page structure;
- product content;
- localization;
- visual design;
- product image or SVG direction;
- comparison;
- contact flow;
- legal disclosure;
- UX review;
- full initial implementation.

### 3. Read only the relevant references

| Task | Required references |
|---|---|
| brand, audience, scope | `references/product-brief.md` |
| routes, page sections, user journeys | `references/information-architecture.md` |
| visual system, components, imagery | `references/design-system.md` |
| content collections and domain fields | `references/content-model.md` |
| exact fictional specifications | `references/fictional-product-data.md` |
| approved interface and marketing copy | `references/copy-and-localization.md` |
| full comparison matrix | `references/full-comparison-matrix.md` |

### 4. Resolve truth level

For every claim, classify it as:

- **verified company fact**: explicitly supported by repository evidence;
- **project decision**: approved requirement for the website;
- **fictional product concept**: allowed only with concept disclosure;
- **unknown**: omit, label as placeholder, or request source material.

Never convert an unknown claim into a verified fact through confident wording.

### 5. Implement the smallest complete user flow

A complete product-site change includes relevant:

- page structure;
- content;
- responsive behavior;
- localization;
- accessible interaction;
- empty, loading, success, and error states;
- SEO copy;
- concept disclosure;
- tests.

Do not add decorative sections that have no user or communication purpose.

### 6. Review against acceptance criteria

Before completion, verify:

- product names and specifications are consistent;
- no false commercial claim exists;
- Ukrainian and English versions match semantically;
- navigation and calls to action are coherent;
- every page has a clear primary purpose;
- product differences are understandable;
- concept disclosure remains visible;
- no broken placeholder or fake document link exists.

## Product Positioning

### Brand

**Name:** MAXIBUD ENERGY  
**Parent company label:** MAXIBUD LLC / ТОВ «МАКСІБУД»  
**Category:** Concept energy-storage and backup-power product line  
**Core proposition:** Practical power systems for home, mobile work, and construction environments.

### Product ladder

| Product | Primary context | Position |
|---|---|---|
| PowerBox 2400 | mobile work and temporary backup | portable entry product |
| HomeCore 5 | homes and small businesses | modular stationary system |
| SiteHub 10 | construction and professional sites | rugged high-output system |

The three products must feel like one coherent portfolio, not three unrelated cards.

### Brand personality

- technical;
- direct;
- durable;
- calm;
- practical;
- modern;
- credible without inflated claims.

Avoid:

- futuristic nonsense;
- militarized language;
- fear-based outage marketing;
- vague “revolutionary energy” slogans;
- excessive ecological claims;
- luxury positioning;
- fabricated social proof.

## Product-Site Goals

The website must help a visitor:

1. understand the product line quickly;
2. identify the product suited to their context;
3. inspect key specifications;
4. compare products;
5. understand that the products are concepts;
6. request a consultation through a truthful demonstration flow;
7. share or revisit a stable product URL;
8. use the site in Ukrainian or English.

## Required Routes

- `/`
- `/products`
- `/products/powerbox-2400`
- `/products/homecore-5`
- `/products/sitehub-10`
- `/products/compare`
- `/technology`
- `/about`
- `/contact`
- `/legal`

Ukrainian is the default locale. English uses the repository’s configured English route prefix.

Do not create extra top-level routes without a defined user need.

## Required Product Experience

Each product page must include:

- category and product name;
- concise positioning;
- original product visual;
- three to five key numeric highlights;
- overview;
- features;
- intended applications;
- grouped technical specifications;
- conceptual status notice;
- documentation area;
- related products;
- consultation call to action.

The specification section must clearly state that values are illustrative.

## Contact Flow

The website is a lead-generation demonstration, not an ordering system.

Required inquiry types:

- product consultation;
- technical information;
- distributor inquiry;
- project cooperation;
- other.

Required product choices:

- PowerBox 2400;
- HomeCore 5;
- SiteHub 10;
- not sure.

Do not use “Buy now,” “Order,” or transactional wording unless commerce is genuinely implemented.

Preferred calls to action:

- View products;
- Compare systems;
- Request consultation;
- Discuss a project;
- Get product information.

## Content Ownership

Store:

- long product descriptions;
- features;
- applications;
- specification groups;
- localized SEO copy;
- technology and about-page content

outside Vue components, using the repository’s content layer.

Use translation messages for:

- navigation;
- buttons;
- form labels;
- validation;
- status text;
- short reusable UI strings.

Do not duplicate the same product paragraph across components and locale files.

## Visual Direction

The site should resemble a serious technology product presentation, not a generic SaaS landing page.

Use:

- large product visuals;
- restrained industrial palette;
- strong typography;
- clear technical data;
- precise grids;
- generous spacing;
- lime accent used selectively;
- dark graphite product enclosures;
- original local assets.

Avoid:

- copied commercial battery imagery;
- fake lifestyle testimonials;
- excessive glassmorphism;
- neon cyberpunk styling;
- animation on every section;
- generic stock images of engineers;
- random dashboard screenshots;
- meaningless gradients;
- crowded product cards.

## Product Visual Rules

Product renders must be original.

Allowed approaches:

- original SVG illustration;
- CSS-assisted vector composition;
- original 3D render owned by the project;
- generated image specifically created for the project and reviewed for brand consistency.

Do not:

- copy EcoFlow, BLUETTI, Anker, Tesla, Zendure, or other commercial product photos;
- remove another brand’s logo and reuse the body design;
- imply a real industrial design registration;
- show unsafe exposed cells or wiring;
- create misleading certification marks.

## Localization Rules

Supported locales:

- `uk`: default;
- `en`: secondary.

Requirements:

- product model names remain unchanged;
- units remain technically consistent;
- translations preserve meaning, not word order;
- Ukrainian copy should sound native and professional;
- English copy should be direct and international;
- do not mix languages on one page;
- preserve equivalent product routes when switching locale;
- localize metadata, validation, disclosure, and error states.

## Non-Goals

Unless explicitly requested, exclude:

- prices;
- availability;
- checkout;
- financing;
- stock status;
- dealer map;
- account area;
- product configurator;
- runtime calculator;
- installation instructions;
- wiring diagrams;
- live telemetry;
- AI assistant;
- real downloads presented as certified documents;
- customer reviews.

## Definition of Complete

A project-specific task is complete when:

- it satisfies the intended user need;
- product language is internally consistent;
- all relevant content exists in both locales;
- concept status is visible;
- no false commercial claim remains;
- product hierarchy is clear;
- CTA wording matches the demonstration flow;
- required routes and links work;
- no missing visual or document is presented as available;
- implementation passes the repository’s applicable checks.

## Final Report

Report:

### Completed

- project-specific behavior and content;
- routes or sections changed;
- content and asset files changed.

### Product decisions

- positioning or UX decisions made;
- any deliberate deviation from references.

### Validation

- implementation checks actually run;
- locale and route checks;
- unresolved warnings.

### Remaining limitations

- placeholder or missing assets;
- demo-only contact delivery;
- conceptual documents not generated;
- unverified company facts intentionally omitted.
