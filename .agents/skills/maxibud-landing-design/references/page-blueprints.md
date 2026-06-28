# MAXIBUD ENERGY Page Blueprints

## Purpose

Use this reference to compose pages after the page job, product truth, and content requirements are known.

These are implementation blueprints, not rigid templates. Preserve the hierarchy and user decision flow. Change section order only for a documented reason.

## 1. Global Shell

### Header

Desktop structure:

- MAXIBUD ENERGY wordmark;
- Products;
- Compare;
- Technology;
- About;
- locale switch;
- one consultation CTA.

Behavior:

- 64 to 80 px visual height;
- opaque or strongly legible surface;
- active route visible;
- no oversized mega-menu for the current route count;
- optional sticky behavior only when it does not consume excessive mobile space;
- focus remains visible;
- mobile menu closes on Escape and returns focus.

Do not overlay low-contrast navigation on a detailed product render.

### Footer

Use a structured factual footer with:

- brand description;
- concept-product disclosure;
- product links;
- company and legal links;
- language links;
- current year.

Do not add empty newsletter forms, social icons without real destinations, partner logos, or invented office locations.

## 2. Homepage

### Page job

Help a new visitor understand the product family and choose the next relevant path.

### Section 1: Product-family hero

Desktop composition:

- 5 columns for message and CTA;
- 7 columns for original portfolio visual;
- product-family label above H1;
- one direct H1;
- one concise lead paragraph;
- primary and secondary CTA;
- compact concept label;
- optional vertical product-index labels near the visual.

The visual should show all three formats at believable relative scale, without embedding text into the image.

Mobile order:

1. product-family label;
2. H1;
3. lead;
4. CTA group;
5. portfolio visual;
6. compact product labels or key contexts.

Hero constraints:

- no autoplay video;
- no full specification table;
- no decorative dashboard;
- no fake installation photograph;
- no viewport-height requirement;
- no large paragraph.

### Section 2: Portfolio evidence strip

Use four concise factual project attributes:

- three use-focused formats;
- portable and stationary concepts;
- shared LiFePO4 concept platform;
- Ukrainian and English product information.

Presentation:

- horizontal rail on desktop;
- two-by-two or stacked grid on mobile;
- small labels and one-line values;
- no animated counters;
- no claims about customers, years, production, or market position.

### Section 3: Product lineup

Preferred desktop pattern:

- three substantial product chapters;
- each chapter uses an asymmetric grid;
- product visual occupies 45 to 60 percent of the section;
- one dominant distinction per product;
- two or three comparable values;
- one detail link.

Recommended chapter logic:

1. PowerBox 2400: mobility and temporary backup;
2. HomeCore 5: home and small-business modularity;
3. SiteHub 10: site-oriented output and transport format.

Alternative pattern:

Use a difference-first three-column lineup when the available visual assets cannot support large chapters. Keep values aligned and avoid dense card chrome.

Do not hide products in a carousel.

### Section 4: Use-case decision section

Use three accessible choices:

- Home;
- Mobile work;
- Construction site.

Each selected state shows:

- the context;
- recommended product;
- two reasons;
- product link;
- small comparison link.

Desktop:

- tabs or segmented controls on one side;
- stable product panel on the other;
- avoid large layout shifts between selections.

Mobile:

- tabs only when labels fit and remain keyboard-operable;
- otherwise use stacked disclosure sections or an accordion;
- all options remain discoverable without horizontal swiping.

This is guidance, not a runtime engineering calculator.

### Section 5: Comparison preview

Compare only the values needed for an initial decision:

- intended use;
- energy capacity;
- rated output;
- mobility or installation format.

Desktop:

- aligned grid or semantic table;
- product names remain visible;
- selected accents are restrained.

Mobile:

- product-by-product groups or a clearly cued horizontal table;
- no compressed three-column text.

End with one link to the full comparison page.

### Section 6: Shared technology

Use a dark graphite contrast section with:

- one concise platform statement;
- three or four technical concept pillars;
- original line illustration or simplified product-family detail;
- link to the technology page;
- concept disclaimer.

Suitable pillars:

- LiFePO4 concept chemistry;
- charging path concepts;
- protection-oriented design concept;
- monitoring concept;
- form-factor-specific architecture.

Do not provide installation, assembly, repair, or wiring instructions.

### Section 7: Final CTA

Use one concrete question:

- Which format fits your use case?

Include:

- one sentence explaining the demonstration consultation flow;
- primary consultation CTA;
- secondary comparison link;
- no urgency timer;
- no fake availability claim.

## 3. Products Index

### Page job

Present the full portfolio and make differences easy to scan.

### Recommended sequence

1. compact page hero;
2. category or use-context summary;
3. full lineup;
4. comparison prompt;
5. concept disclosure;
6. consultation CTA.

Only three products exist. Keep filtering lightweight.

When category controls are retained:

- use them as a simple orientation aid;
- show all products by default;
- provide a visible reset;
- do not build faceted-search behavior;
- do not introduce pagination;
- do not create fake availability filters.

The page should remain useful with JavaScript disabled.

## 4. Product Detail Page

### Page job

Explain one product concept, its intended context, key differences, and next decision.

### Section 1: Breadcrumb and local context

Include:

- localized breadcrumb;
- product category;
- optional local section navigation after the hero.

A local sticky navigation is allowed when:

- it links to real page sections;
- it remains keyboard-accessible;
- it does not obscure headings;
- it becomes a simple jump menu on mobile.

### Section 2: Product hero

Desktop composition:

- 5 columns for content;
- 7 columns for product visual;
- category and model;
- direct positioning statement;
- concise summary;
- primary consultation CTA;
- secondary comparison link;
- concept label.

Place three to five highlights below the main hero content or along a stable data rail.

Do not place all specifications in the hero.

### Section 3: Context and distinction

Explain:

- intended environment;
- primary user;
- central value;
- difference from the other two formats.

Use one strong visual or one editorial composition. Avoid a generic grid of six equal cards.

### Section 4: Feature evidence

Use four to six meaningful features.

Preferred presentation:

- two-column editorial rows;
- alternating detail image and copy;
- grouped technical callouts;
- limited icons.

Every feature should connect a product characteristic to an intended use. Avoid vague labels such as “Powerful,” “Smart,” or “Innovative” without explanation.

### Section 5: Intended applications

Show realistic conceptual scenarios.

Each scenario contains:

- context;
- product role;
- limitation or qualification where necessary;
- no guaranteed runtime promise.

Do not use generic stock photographs as evidence.

### Section 6: Specifications

Group by:

- energy;
- output and input;
- physical;
- environment;
- communication and controls.

Desktop:

- semantic description lists or tables;
- clear row rhythm;
- tabular numerals;
- consistent units.

Mobile:

- grouped sections;
- optional accessible accordions;
- all values remain present;
- no tiny comparison columns.

Place a concise concept-specification disclosure directly beside the section heading or first group.

### Section 7: Documents

Render only files that exist.

Each item shows:

- document type;
- language;
- file format;
- conceptual status;
- file size when available.

Do not style a conceptual overview as a certification document.

### Section 8: Related formats

Show the other two products with a contextual explanation of when they are more suitable.

Avoid repeating the full homepage card grid.

### Section 9: Final CTA

Preselect the current product in the consultation flow.

Explain actual form behavior. Do not imply a sales representative, email delivery, or persistent storage unless configured.

## 5. Comparison Page

### Page job

Help a visitor select the format that matches their context.

### Recommended sequence

1. concise comparison hero;
2. context labels for each product;
3. primary comparison matrix;
4. grouped explanation of major differences;
5. concept disclosure;
6. project consultation CTA.

Desktop matrix:

- semantic table;
- product headings may become sticky only after accessibility testing;
- values align by row;
- differences use type weight and spacing before color.

Mobile patterns in preference order:

1. grouped criterion sections with all three products;
2. product-by-product summaries followed by a compact matrix;
3. horizontal table with an explicit scroll cue.

Never remove values from mobile to make the table fit.

Use contextual labels:

- suited to mobile work;
- suited to home backup concepts;
- suited to professional site concepts.

Do not label one product universally best.

## 6. Technology Page

### Page job

Explain the shared product-platform concepts without providing real engineering instructions.

### Recommended composition

1. platform hero with family visual;
2. concept principles;
3. energy and charging concept;
4. protection-oriented concept;
5. monitoring concept;
6. form-factor comparison;
7. concept disclaimer;
8. product links.

Use diagrams only when they are clearly labeled conceptual and do not imply engineering accuracy.

## 7. About Page

### Page job

Explain the educational software project and the relationship to MAXIBUD LLC without inventing corporate history.

Use:

- direct project statement;
- project goals;
- design and software scope;
- product communication approach;
- product and contact links.

Do not use founder portraits, team counts, factory images, timeline milestones, or office maps without verified evidence.

## 8. Contact Page

### Page job

Collect a structured demonstration inquiry with transparent data behavior.

Desktop composition:

- 4 columns for context and expectations;
- 8 columns for form;
- one clear submission action.

Form grouping:

1. contact details;
2. product and inquiry context;
3. message;
4. privacy consent;
5. submission status.

Keep labels visible. Make optional fields explicit. Show server and validation errors near the relevant field and provide an accessible summary when needed.

Success state must describe what actually happened.

## 9. Legal Page

Use readable prose width, clear headings, and a persistent route back to products.

Do not over-design legal content. The purpose is comprehension.

## 10. Error Page

Use:

- localized status;
- concise explanation;
- product-system visual connection;
- homepage link;
- products link.

Do not show stack traces, fake telemetry, or humorous copy that obscures recovery.
