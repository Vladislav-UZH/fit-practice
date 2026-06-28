# SEO Checklist

## Goal

Ensure public pages are server-rendered, discoverable, uniquely described, localized, and truthful.

## 1. Server-rendered content

For each required public route:

- fetch page HTML directly;
- confirm H1 is present;
- confirm meaningful product or page copy is present;
- confirm title and description are present;
- confirm content is not dependent on client mount.

A loading shell alone is not sufficient.

## 2. Titles

Every route needs a unique title.

Recommended patterns:

### Homepage

UK:

> MAXIBUD ENERGY — концептуальні системи автономного живлення

EN:

> MAXIBUD ENERGY — concept independent power systems

### Product

UK:

> {Product} — концептуальна система живлення | MAXIBUD ENERGY

EN:

> {Product} concept power system | MAXIBUD ENERGY

### Comparison

UK:

> Порівняння продуктів | MAXIBUD ENERGY

EN:

> Product comparison | MAXIBUD ENERGY

Avoid:

- identical title for every page;
- model name omitted from product page;
- title stuffed with repeated keywords;
- “Best battery Ukraine” style claims.

## 3. Descriptions

Each page description should:

- explain page purpose;
- include product or use context;
- remain human-readable;
- be unique;
- include concept context for product pages;
- avoid availability and certification claims.

## 4. Canonical URLs

Verify:

- absolute URL;
- correct production base;
- current locale path;
- no query string for canonical unless intentional;
- no duplicate slash;
- no localhost in production;
- dynamic product slug correct;
- HTTPS in production.

Do not construct canonicals through unsafe string concatenation when `URL` can be used.

## 5. Language alternates

For each localized page:

- `uk` alternate;
- `en` alternate;
- optional `x-default` if strategy defines it;
- equivalent route, not homepage fallback;
- correct absolute URL;
- no unsupported locale.

Dynamic product pages must switch to the equivalent product.

## 6. Open Graph

Required:

- `og:title`;
- `og:description`;
- `og:type`;
- `og:url`;
- `og:image`;
- locale;
- alternate locale where applicable.

Verify image:

- exists;
- correct aspect ratio;
- readable title;
- no fabricated certification;
- no missing external dependency;
- product matches route.

## 7. Twitter/X card

Use a summary large image card when appropriate.

Do not add a fabricated account handle.

## 8. Robots

Verify:

- production is indexable when intended;
- preview and staging can be blocked when intended;
- `/legal` indexing decision is intentional;
- API routes do not need search indexing;
- no accidental site-wide `noindex`;
- no development robots file reaches production unintentionally.

## 9. Sitemap

Verify:

- required routes present;
- English equivalents present;
- all three product routes present;
- no broken route;
- no API route;
- no preview-only route;
- canonical paths used.

If generated automatically, inspect actual output.

## 10. Structured data

### Organization

Use only known details.

Do not invent:

- legal address;
- founding date;
- logo URL that does not exist;
- social profiles;
- telephone;
- sameAs links.

### WebSite

Use:

- site name;
- canonical URL;
- language behavior.

### BreadcrumbList

Verify:

- order;
- localized names;
- absolute URLs;
- current page included.

### Product

Allowed:

- name;
- description;
- image;
- brand;
- category;
- additional properties;
- concept-status property.

Do not include:

- offers;
- price;
- price currency;
- availability;
- aggregate rating;
- review;
- GTIN;
- MPN;
- real SKU;
- certification;
- shipping details.

If search-engine validation expects commercial fields, do not fabricate them merely to remove a warning.

## 11. Heading structure

- one H1;
- product model in H1;
- descriptive H2 sections;
- no skipped hierarchy caused by style;
- no hidden keyword heading;
- no duplicate H1 in header logo.

## 12. Internal linking

Verify:

- descriptive anchor text;
- product index links to products;
- products link to comparison;
- related products interlink;
- technology links to product context;
- contact receives product context;
- footer links all required pages;
- no orphan required page.

Avoid repeated “click here.”

## 13. Images

- alt text supports accessibility, not keyword stuffing;
- filenames descriptive;
- width and height or aspect ratio set;
- responsive source generated;
- social images distinct from page hero when useful;
- no competitor trademark in image.

## 14. Performance-related SEO

Check:

- LCP image;
- layout shift;
- blocking fonts;
- excessive client JavaScript;
- hydration errors;
- slow third-party scripts;
- missing image optimization.

Do not sacrifice content or accessibility for a synthetic score.

## 15. Validation evidence

Record:

- inspected route;
- server HTML result;
- title;
- description;
- canonical;
- alternates;
- structured-data validation;
- sitemap presence;
- robots result;
- unresolved warnings.
