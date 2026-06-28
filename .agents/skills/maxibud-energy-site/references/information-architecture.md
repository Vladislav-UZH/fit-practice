# Information Architecture

## 1. Navigation Model

Primary navigation:

- Products
- Compare
- Technology
- About
- Contact

Utility controls:

- language switcher;
- theme control, if the repository supports two themes;
- primary consultation call to action.

Do not place every route in the main navigation. Legal belongs in the footer.

## 2. Route Map

| Route | Primary purpose | Primary CTA |
|---|---|---|
| `/` | introduce the portfolio and route visitors by use case | View products |
| `/products` | present all products and category differences | Compare systems |
| `/products/[slug]` | explain one product in detail | Request consultation |
| `/products/compare` | support direct product decision | Discuss a project |
| `/technology` | explain common product concepts responsibly | Explore products |
| `/about` | explain project and company context | Contact us |
| `/contact` | capture a structured inquiry | Submit request |
| `/legal` | disclose concept and privacy behavior | Return to products |

## 3. Global Header

Required:

- MAXIBUD ENERGY wordmark;
- primary navigation;
- locale switch;
- consultation CTA;
- mobile menu button.

Behavior:

- header remains readable over the hero;
- mobile menu opens as an accessible overlay or sheet;
- active route is visible;
- focus returns to trigger after close;
- Escape closes the menu;
- body scroll is managed correctly;
- CTA is not duplicated excessively on narrow screens.

## 4. Global Footer

Required columns:

### Brand

- wordmark;
- one-sentence description;
- concept disclosure.

### Products

- PowerBox 2400;
- HomeCore 5;
- SiteHub 10;
- comparison.

### Company

- about;
- technology;
- contact;
- legal.

### Utility

- language links;
- current year;
- no fabricated social links.

## 5. Homepage

The homepage must answer:

1. What is this?
2. Who is it for?
3. What are the three products?
4. How do they differ?
5. What should the visitor do next?

### 5.1 Hero

Required content:

- product-line label;
- concrete headline;
- concise subheading;
- primary CTA;
- secondary CTA;
- original portfolio visual;
- compact concept label.

Approved message direction:

Ukrainian:

> Автономна енергія для дому, роботи та будівництва

English:

> Independent power for home, work, and construction

The hero must not contain a large specification table.

### 5.2 Portfolio proof strip

Use factual project attributes:

- three use-focused product formats;
- LiFePO4 concept platform;
- modular and mobile options;
- bilingual product information.

Do not use fake statistics such as “10,000 customers.”

### 5.3 Product overview

Show all three products.

Each item includes:

- product visual;
- category;
- product name;
- one-sentence summary;
- three key highlights;
- detail CTA.

Recommended highlights:

PowerBox 2400:

- 2.4 kWh;
- 2.4 kW;
- 28 kg.

HomeCore 5:

- 5.12 kWh;
- up to 20.48 kWh;
- 5 kW.

SiteHub 10:

- 10.24 kWh;
- 6 kW;
- IP55 concept.

### 5.4 Use-case selector

Options:

- Home;
- Mobile work;
- Construction site.

For each option show:

- problem context;
- recommended product;
- two reasons;
- link to product.

The selector must work with keyboard and without motion.

### 5.5 Shared technology

Explain at a high level:

- LiFePO4 concept chemistry;
- charging from grid and solar concept inputs;
- battery protection concept;
- monitoring concept;
- portfolio-specific form factors.

Do not provide construction, repair, or wiring instructions.

### 5.6 Comparison preview

Show four rows:

- capacity;
- output;
- mobility;
- intended use.

Link to full comparison.

### 5.7 Consultation CTA

Use a concrete final prompt:

Ukrainian:

> Не впевнені, який формат підходить вашому сценарію?

English:

> Not sure which format fits your use case?

CTA:

- Request consultation / Отримати консультацію.

## 6. Products Index

Required:

- page heading and introduction;
- simple category filters;
- all product cards;
- comparison CTA;
- concept disclosure.

Categories:

- All;
- Portable;
- Home;
- Professional.

Only three products exist. Do not create complex faceted search, pagination, or fake stock filters.

Recommended empty-state behavior:

- reset filters;
- explain that no product matches;
- preserve page layout.

## 7. Product Detail Page

### 7.1 Breadcrumbs

Pattern:

- Home;
- Products;
- Product name.

Localized and structured-data compatible.

### 7.2 Hero

Required:

- category;
- product name;
- tagline;
- summary;
- product visual;
- primary consultation CTA;
- secondary comparison link;
- three to five highlights;
- concept label.

### 7.3 Overview

Explain:

- intended environment;
- central value;
- what distinguishes the product;
- who should consider it.

### 7.4 Features

Use four to six meaningful features.

Each feature contains:

- short title;
- two-sentence explanation;
- restrained icon.

Do not use twelve tiny cards merely to fill the screen.

### 7.5 Applications

Show realistic conceptual use cases.

Separate “intended use” from “guaranteed runtime.” Do not promise that a product powers a specific device for a specific time unless an approved illustrative calculator exists.

### 7.6 Specifications

Group by:

- energy;
- output and input;
- physical;
- environment;
- communication and controls.

Requirements:

- semantic table or description list;
- clear units;
- no hidden mobile data;
- concept disclaimer;
- no fake certification row.

### 7.7 Documents

Allowed document types:

- conceptual product overview;
- conceptual datasheet;
- project presentation.

Every downloadable file must:

- exist;
- identify itself as conceptual;
- match the selected language;
- avoid certification-style design.

Never render a live link to a missing file.

### 7.8 Related products

Show the other two products with one sentence explaining when they are more suitable.

### 7.9 Final CTA

Preselect the current product in the contact flow.

## 8. Comparison Page

Compare:

- category;
- primary use;
- usable or nominal energy;
- rated output;
- peak output;
- mobility;
- installation format;
- charging sources;
- protection concept;
- approximate weight;
- expansion;
- monitoring;
- recommended user.

Desktop:

- structured table;
- sticky product headings only if implemented accessibly.

Mobile:

- stacked sections or horizontally scrollable table with an explicit cue;
- no illegible compressed columns.

Do not label one product “best.” Use contextual labels:

- Best for mobile work;
- Best for home backup;
- Best for professional sites.

## 9. Technology Page

Purpose:

- explain the portfolio’s shared concepts;
- establish technical coherence;
- avoid real engineering instructions.

Required sections:

1. platform overview;
2. LiFePO4 as a concept choice;
3. modularity;
4. charging paths;
5. monitoring;
6. protection-oriented design;
7. form-factor differences;
8. concept disclaimer.

Forbidden:

- cell assembly;
- wiring diagrams;
- inverter installation;
- BMS bypass;
- repair steps;
- fire-response instructions presented as professional guidance;
- unsupported safety guarantees.

## 10. About Page

Required:

- MAXIBUD LLC / ТОВ «МАКСІБУД» label;
- explanation that the product website is an educational software project;
- focus on practical product communication;
- project goals;
- link to products;
- link to contact.

Do not invent:

- company history beyond verified evidence;
- employee count;
- factory;
- export markets;
- R&D center;
- production volume;
- named partners.

## 11. Contact Page

### 11.1 Intro

Explain:

- what information the form accepts;
- that this is a demonstration consultation flow;
- whether data is stored or delivered.

### 11.2 Fields

- name;
- email;
- phone, optional;
- company, optional;
- product of interest;
- inquiry type;
- message;
- privacy consent;
- hidden honeypot.

### 11.3 States

- initial;
- validating;
- submitting;
- success;
- field errors;
- server error;
- rate-limited.

Success text must describe actual behavior. In demo mode, do not claim an email was sent.

## 12. Legal Page

Required sections:

- educational project status;
- fictional product status;
- illustrative specifications;
- no warranty or commercial offer;
- contact-form data behavior;
- asset ownership;
- third-party trademark notice if relevant.

## 13. Error Page

Required:

- localized heading;
- clear status;
- concise explanation;
- homepage link;
- products link;
- no stack trace;
- visual connection to the product system.

## 14. User Journeys

### Homeowner

Homepage → Home use case → HomeCore 5 → Compare → Contact.

### Contractor

Homepage → PowerBox 2400 → Specifications → Contact.

### Site manager

Products → SiteHub 10 → Compare → Project cooperation inquiry.

### English-language partner

English homepage → Products → Product page → Distributor inquiry.

## 15. Content Hierarchy Rules

Each page must contain:

- one primary purpose;
- one H1;
- one primary CTA;
- no more than two competing CTA styles;
- descriptive section headings;
- visible concept status where relevant.

Do not add sections solely because a landing-page template usually has them.
