# Project Context

## 1. Repository

- Repository: `Vladislav-UZH/fit-practice`
- Default branch: `main`
- Project type: educational software practice project
- Primary implementation target: bilingual Nuxt 4 product showcase website

This file contains stable project context. Temporary progress, current blockers, and next actions belong in `CURRENT_STATE.md`.

## 2. Project Identity

The project is a bilingual product presentation website for **MAXIBUD ENERGY**, a fictional product line associated with **MAXIBUD LLC / ТОВ «МАКСІБУД»**.

The website presents three fictional concept products:

1. **MAXIBUD PowerBox 2400**
2. **MAXIBUD HomeCore 5**
3. **MAXIBUD SiteHub 10**

The product line and its specifications were created for an educational software demonstration.

## 3. Truth Boundary

The products must never be presented as:

- commercially available;
- certified;
- independently tested;
- legally approved;
- patented;
- used by real customers;
- covered by a real warranty;
- manufactured at a verified facility;
- compliant with named standards without evidence.

Required full disclosure:

> MAXIBUD ENERGY is a conceptual product line created for an educational software demonstration. Product specifications are illustrative and do not represent certified commercial hardware.

Ukrainian disclosure:

> MAXIBUD ENERGY — концептуальна продуктова лінійка, створена для навчальної демонстрації програмного забезпечення. Характеристики продуктів є ілюстративними та не описують сертифіковане комерційне обладнання.

## 4. Product Portfolio

### PowerBox 2400

Portable concept system for mobile contractors, field teams, temporary work, and short-duration household backup.

Approved primary values:

- 2.4 kWh;
- 2.4 kW rated output;
- 4.8 kW peak output;
- 28 kg;
- IP44 concept enclosure;
- up to 800 W solar input.

### HomeCore 5

Modular stationary concept system for homes, small offices, small retail locations, and essential-system backup.

Approved primary values:

- 5.12 kWh per module;
- up to 20.48 kWh;
- 5 kW system concept;
- 54 kg per module;
- IP54 concept enclosure;
- up to four modules.

### SiteHub 10

Rugged mobile professional concept system for construction sites, temporary facilities, mobile workshops, and professional field teams.

Approved primary values:

- 10.24 kWh;
- 6 kW rated output;
- 12 kW peak output;
- 118 kg;
- IP55 concept enclosure;
- up to 2.4 kW solar input.

The complete approved values and forbidden claims are defined in:

```text
.agents/skills/maxibud-energy-site/references/fictional-product-data.md
```

## 5. Product Goal

The website must help visitors:

1. understand the three product formats;
2. identify the product suited to their use case;
3. inspect clear technical specifications;
4. compare products;
5. understand the conceptual status;
6. submit a structured demonstration consultation request;
7. use stable Ukrainian and English routes.

The project is a product showcase and lead-generation demonstration, not an online store.

## 6. Required Routes

```text
/
/products
/products/powerbox-2400
/products/homecore-5
/products/sitehub-10
/products/compare
/technology
/about
/contact
/legal
```

Ukrainian is the default locale. English uses the configured English prefix, expected to be `/en`.

## 7. Intended Technical Stack

Use installed repository versions as the source of truth.

The intended stack is:

- Nuxt 4;
- Vue 3;
- TypeScript;
- SSR;
- Nitro;
- Nuxt UI;
- Nuxt Content;
- Nuxt Image;
- Nuxt i18n;
- Zod;
- Vitest;
- Playwright;
- ESLint;
- pnpm for a new repository.

Nuxt application code should use the Nuxt 4 `app/` structure unless repository configuration explicitly defines another source directory.

## 8. Skill Composition

### Root `AGENTS.md`

Permanent rules that apply to every task: working method, architecture boundaries, truth requirements, localization, accessibility, security, testing, Git safety, and completion reporting.

### `$maxibud-energy-site`

Project-specific source of truth for product strategy, audiences, information architecture, page requirements, visual direction, content model, product data, localized copy, and disclosures.

Repository path:

```text
.agents/skills/maxibud-energy-site/
```

### `$nuxt4-production`

Engineering guidance for Nuxt architecture, SSR and hydration, routing, data fetching, Nitro, Content, i18n, UI, testing, security, performance, and deployment.

Repository path:

```text
.agents/skills/nuxt4-production/
```

### `$maxibud-release-check`

Explicit final quality gate for product consistency, routes, localization, accessibility, SEO, lint, type checking, tests, build, and release decision.

Repository path:

```text
.agents/skills/maxibud-release-check/
```

This skill is explicit-only and must not be used as the default implementation workflow.

## 9. Scope Boundaries

Do not implement unless explicitly approved:

- shopping cart;
- checkout;
- payments;
- prices;
- availability;
- accounts;
- authentication;
- inventory;
- CRM or ERP;
- real telemetry;
- firmware;
- battery-management algorithms;
- real installation calculations;
- AI chatbot;
- fake PDF certificates;
- fake persistence;
- fabricated testimonials;
- fabricated partner logos.

## 10. Contact Flow

The contact form is a demonstration inquiry flow.

Required fields:

- name;
- email;
- optional phone;
- optional company;
- product interest;
- inquiry type;
- message;
- privacy consent;
- honeypot.

Required behavior:

- shared Zod validation;
- server-side validation;
- length limits;
- basic rate limiting;
- no sensitive production logging;
- truthful success message.

In demo mode, the UI must not claim that an email was sent, a sales team received the message, or data was permanently stored.

## 11. Design Direction

The design should be technical, restrained, durable, modern, product-focused, accessible, and original.

Use large original product visuals, graphite surfaces, restrained lime accent, clear technical data, strong typography, precise grids, and generous spacing.

Avoid copied commercial battery imagery, generic SaaS gradients, fake dashboards, excessive glass effects, excessive animation, stock-photo filler, fake social proof, and pricing tables.

The detailed design system is defined in:

```text
.agents/skills/maxibud-energy-site/references/design-system.md
```

## 12. Academic Value

The project should demonstrate more than a static landing page.

Relevant academic and engineering areas:

- information architecture;
- content modeling;
- dynamic product routes;
- bilingual routing;
- SSR and SEO;
- responsive design;
- accessibility;
- client/server validation;
- automated testing;
- release auditing.

## 13. Sources of Truth

Use this priority:

1. current user instruction;
2. applicable `AGENTS.override.md`;
3. nearest `AGENTS.md`;
4. this stable context;
5. current state file;
6. relevant project skill;
7. relevant reusable skill;
8. actual repository code and installed package types.

When documentation conflicts with code, identify the conflict. Do not silently choose whichever version is more convenient.

## 14. Context Maintenance

Update this file only when stable project decisions change.

Examples: product portfolio changes, scope changes, route model changes, permanent architecture decisions, or language strategy changes.

Do not update this file for one completed component, temporary blockers, the current branch, passing or failing tests, or the next implementation task. Those belong in `CURRENT_STATE.md`.
