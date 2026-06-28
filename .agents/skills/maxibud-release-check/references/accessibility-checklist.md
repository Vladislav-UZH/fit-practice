# Accessibility Checklist

## Target

WCAG 2.2 AA for the practical project scope.

Automated tools are useful but incomplete. Manual keyboard and responsive checks are mandatory.

## 1. Structure

- One page-level H1.
- Logical heading order.
- `header`, `nav`, `main`, and `footer`.
- Skip link targets the main content.
- Multiple navigation regions have distinct labels.
- Lists use list markup.
- Specifications use table or description-list semantics.
- Buttons are used for actions.
- Links are used for navigation.

## 2. Keyboard

Test without a mouse:

1. Load page.
2. Press Tab from browser chrome.
3. Activate skip link.
4. Traverse header.
5. Open and close mobile menu.
6. Use locale switch.
7. Use product filters.
8. Use use-case selector.
9. Reach product CTAs.
10. Complete contact form.
11. Submit invalid form.
12. Reach error summary or first invalid field.
13. Close dialogs with Escape.
14. Confirm focus returns.

Failures:

- invisible focus;
- focus trap;
- focus lost to body;
- tab enters hidden menu;
- card requires mouse;
- nested interactive controls;
- Enter or Space does nothing on a custom control.

## 3. Mobile navigation

Verify:

- trigger has accessible name;
- expanded state is exposed;
- menu is reachable;
- background focus is controlled when modal;
- Escape closes;
- route activation closes;
- focus returns to trigger;
- scroll behavior is controlled;
- no content is hidden behind fixed header.

## 4. Forms

Each control requires:

- visible label;
- correct input type;
- autocomplete where appropriate;
- required state;
- associated description;
- associated error;
- `aria-invalid` when invalid;
- clear optional marking;
- keyboard-operable selection;
- accessible loading state;
- accessible success or error status.

Check:

- placeholder is not the only label;
- errors are specific;
- invalid color is not the only cue;
- consent has complete label;
- hidden honeypot is hidden from legitimate users and assistive technology;
- submit button status remains understandable.

## 5. Product filters and selector

If tabs are used:

- valid tab semantics;
- arrow-key behavior where expected;
- selected state;
- panel association.

If buttons are used:

- pressed or selected state communicated;
- keyboard operation;
- visible label;
- no hidden content required for basic navigation.

Do not imitate tabs with inaccessible divs.

## 6. Images and SVG

Informative:

- concise meaningful alt text;
- identifies product and view when useful.

Decorative:

- empty alt or hidden from accessibility tree.

SVG:

- decorative SVG uses `aria-hidden="true"`;
- informative SVG has a text alternative;
- no duplicate spoken title and adjacent caption;
- no essential text only inside SVG.

## 7. Contrast

Verify:

- normal text;
- large text;
- muted text;
- links;
- focus ring;
- form borders;
- error text;
- disabled state;
- lime accent on light and dark surfaces;
- text over product images.

Do not assume brand colors pass.

## 8. Motion

With reduced motion enabled:

- no long entrance sequence;
- no auto-moving carousel;
- no decorative continuous floating;
- transitions are removed or reduced;
- content remains complete;
- status changes remain understandable.

## 9. Responsive layout

Test at:

- 320 × 568;
- 375 × 667;
- 768 × 1024;
- 1024 × 768;
- 1440 × 900.

Verify:

- no page-level horizontal overflow;
- no clipped text;
- no overlapping fixed elements;
- full product names visible;
- buttons do not truncate meaning;
- comparison remains usable;
- form fields fit;
- legal text remains readable.

## 10. Zoom and text resizing

At 200% browser zoom:

- navigation remains available;
- content does not overlap;
- text does not clip;
- form remains usable;
- no two-dimensional scrolling except genuinely tabular content;
- dialogs remain within viewport.

## 11. Comparison page

Desktop:

- column headers associated;
- row labels understandable;
- sticky headers do not hide focus.

Mobile:

- use stacked comparison or an explicitly signaled scroll region;
- preserve all values;
- maintain product identity;
- allow keyboard access to scroll region where needed.

## 12. Error and status handling

- 404 has heading and recovery links.
- Async errors appear in text.
- Success is announced.
- Loading is communicated.
- Rate limit is understandable.
- Server error does not move focus unpredictably.
- No status relies only on color or icon.

## 13. Language

- document `lang` matches locale;
- English route uses English language;
- Ukrainian route uses Ukrainian language;
- brand/model pronunciation is not over-engineered;
- locale switch names languages clearly;
- mixed-language fragments are avoided.

## 14. Manual evidence

Record:

- browser;
- viewport;
- keyboard path;
- reduced-motion setting;
- theme;
- locale;
- defects found;
- fixes made;
- remaining limitation.

Do not report accessibility PASS from Lighthouse alone.
