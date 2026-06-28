# MAXIBUD ENERGY Design System

## 1. Design Objective

Create a product website that feels:

- engineered;
- durable;
- calm;
- modern;
- practical;
- visually original.

The design should support technical comprehension. It should not imitate a consumer electronics store, a generic SaaS template, or a science-fiction interface.

## 2. Visual Principles

### Product first

The product visual, category, key values, and intended use take priority over decorative copy.

### Restraint

Use one accent color and a narrow set of surfaces. Avoid decoration that competes with specifications.

### Technical clarity

Use structured grids, aligned values, clear labels, and consistent units.

### Scale

Use large product imagery and generous spacing. Do not fill every gap with a card.

### Originality

Create original product illustrations and layouts. A reference website may inform density and storytelling, but not be copied.

## 3. Color System

Suggested light tokens:

```css
:root {
  --me-bg: #f3f2ed;
  --me-surface: #ffffff;
  --me-surface-muted: #e8e8e1;
  --me-surface-strong: #171b19;
  --me-text: #111412;
  --me-text-muted: #5d655f;
  --me-border: #cfd4ce;
  --me-accent: #c8f43d;
  --me-accent-strong: #9fc900;
  --me-success: #1d7a45;
  --me-danger: #b42318;
}
```

Suggested dark tokens:

```css
.dark {
  --me-bg: #0d100f;
  --me-surface: #151917;
  --me-surface-muted: #1d221f;
  --me-surface-strong: #f0f3ed;
  --me-text: #f4f6f1;
  --me-text-muted: #a9b1aa;
  --me-border: #303731;
  --me-accent: #d4ff49;
  --me-accent-strong: #b8e52d;
}
```

Rules:

- accent is for primary actions, active state, key numbers, and limited highlights;
- never use lime for body text on a light background;
- do not paint full pages in accent;
- validate contrast for every text role;
- error and success colors require text or icon reinforcement.

## 4. Typography

Preferred:

- primary: Manrope, Inter, or another modern sans-serif with Cyrillic support;
- technical labels: IBM Plex Mono or another restrained monospace with Cyrillic support;
- system fallback required.

Roles:

### Display

- homepage and product hero;
- responsive `clamp`;
- compact line height;
- no excessive letter spacing.

### Heading

- strong hierarchy;
- medium or semibold weight;
- no artificial all-caps except small labels.

### Body

- minimum 16 px;
- comfortable line height;
- readable measure;
- avoid very light weight.

### Technical

- table values;
- model labels;
- compact metadata;
- tabular numerals where supported.

## 5. Spacing

Use a consistent spacing scale.

Suggested values:

- 4;
- 8;
- 12;
- 16;
- 24;
- 32;
- 48;
- 64;
- 96;
- 128 CSS pixels.

Section spacing should respond to viewport size.

Avoid:

- random one-off spacing;
- fixed-height content sections;
- dense mobile cards;
- large empty areas that do not serve composition.

## 6. Layout

### Content width

- general content: 1280 to 1440 px maximum;
- long prose: 680 to 760 px;
- specification tables: use available width;
- full-bleed visual sections allowed with constrained inner content.

### Grid

- 12-column desktop;
- 6-column tablet;
- single-column mobile;
- consistent gaps;
- align product values across cards where practical.

### Mobile

- no horizontal page overflow at 320 px;
- product visuals retain meaningful detail;
- tables adapt without data loss;
- CTAs remain reachable;
- fixed elements do not hide content.

## 7. Shape Language

Product bodies:

- subtle corner radius;
- reinforced edges;
- visible material breaks;
- purposeful handles, panels, vents, or status areas;
- no over-rounded toy appearance.

UI surfaces:

- small to medium radius;
- limited shadow;
- visible border where needed;
- large sections may use flat surfaces rather than cards.

Do not place every section inside a rounded container.

## 8. Product Image Direction

### Shared family traits

All products should share:

- graphite primary enclosure;
- lime accent detail;
- restrained status display;
- consistent logo placement;
- strong silhouette;
- realistic proportions;
- no copied port arrangement.

### PowerBox 2400

Visual features:

- compact rectangular body;
- recessed top or side handles;
- front display;
- grouped AC and DC outputs;
- protective port cover;
- slightly rugged feet.

### HomeCore 5

Visual features:

- slim vertical module;
- wall-mount or floor-stand concept;
- minimal status strip;
- modular side-by-side or stacked illustration;
- architectural surface finish.

### SiteHub 10

Visual features:

- wheeled industrial cabinet;
- reinforced frame or corners;
- protected connection panel;
- physical emergency stop;
- lifting points or transport handles;
- larger scale cues.

## 9. Image Composition

Homepage portfolio visual:

- show the three formats at believable relative scale;
- avoid fake industrial environments;
- use clean studio or abstract architectural background;
- preserve product edge contrast.

Product hero:

- product occupies 45 to 60 percent of desktop composition;
- specification highlights remain readable;
- mobile stacks content before or after visual based on priority;
- no text embedded into the render.

Technical visual:

- use callouts sparingly;
- avoid implying internal engineering accuracy;
- label as “Concept design” where needed.

## 10. Iconography

Use one coherent icon family.

Rules:

- line or simple solid icons;
- consistent stroke;
- no decorative emoji;
- icons support labels, never replace them;
- technical values do not need icons when typography is clearer;
- do not import a complete icon set into the client bundle.

## 11. Component Direction

### Header

- compact;
- clear active state;
- solid background after scroll if hero overlay is used;
- one primary CTA;
- mobile navigation accessible.

### Product card

Contains:

- category;
- visual;
- name;
- summary;
- three values;
- detail link.

Use the card as a coherent link only when no nested interactive element exists.

### Specification highlight

- large value;
- short label;
- optional qualifier;
- tabular numerals;
- no ambiguous unit.

### Feature block

- icon;
- short title;
- two-sentence maximum description.

### Comparison

- emphasize differences through type and spacing;
- not through aggressive colors;
- mobile content remains complete.

### Disclosure

- small but readable;
- neutral surface;
- icon optional;
- no alarming warning styling unless legally necessary.

### Contact form

- clear labels;
- logical grouping;
- explicit optional fields;
- helpful error text;
- visible submission status.

## 12. Motion

Allowed:

- short fade and translate;
- subtle product card elevation;
- status indicator animation;
- section reveal only when content remains present without it;
- header background transition.

Forbidden:

- scroll hijacking;
- 3D rotation required for reading;
- endless floating products;
- autoplay background video;
- long load intro;
- parallax that harms text stability.

Respect `prefers-reduced-motion`.

## 13. Theme

If two themes are implemented:

- system preference is default;
- explicit toggle persists;
- no flash of wrong theme;
- product renders work on both surfaces;
- contrast is verified;
- dark mode is not simply color inversion.

A single theme is acceptable when project scope prioritizes delivery and consistency.

## 14. Responsive Behavior

### 320 to 639 px

- single-column;
- compact header;
- readable hero;
- stacked highlights;
- no compressed comparison columns;
- form fields full width.

### 640 to 1023 px

- two-column cards where space permits;
- product hero may remain stacked;
- comparison can use grouped rows.

### 1024 px and above

- asymmetric product hero;
- three-column product overview;
- full comparison table;
- wider technical grids.

## 15. Accessibility

- visible focus in both themes;
- minimum practical target size around 44 px;
- no hover-only information;
- no color-only state;
- semantic headings;
- adequate contrast;
- decorative SVG hidden from assistive technology;
- informative visuals receive meaningful alternative text;
- reduced motion respected.

## 16. Anti-Patterns

Reject:

- generic blue-purple gradient hero;
- six identical feature cards;
- “trusted by” logo wall without real partners;
- fake dashboard screenshots;
- tiny gray body text;
- full-screen video;
- copied commercial product body;
- glossy 3D render inconsistent across products;
- excessive border radius;
- all-lime interface;
- animated counters with fake numbers;
- pricing cards;
- review carousel.
