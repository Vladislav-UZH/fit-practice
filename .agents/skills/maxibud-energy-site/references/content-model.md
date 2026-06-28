# MAXIBUD ENERGY Content Model

## 1. Content Ownership

Use structured content for product and page data.

The model must support:

- Ukrainian and English;
- three current products;
- future product addition;
- product comparison;
- SEO;
- conceptual documents;
- consistent specification display.

The implementation may use Nuxt Content, but exact framework APIs belong to the reusable Nuxt skill.

## 2. Product Entity

Required domain shape:

```ts
type ProductCategory = 'portable' | 'home' | 'professional'
type ProductLocale = 'uk' | 'en'

interface ProductRecord {
  locale: ProductLocale
  slug: 'powerbox-2400' | 'homecore-5' | 'sitehub-10'
  title: string
  model: string
  category: ProductCategory
  eyebrow: string
  tagline: string
  summary: string
  description: string
  heroImage: string
  gallery: string[]
  featured: boolean
  order: number
  conceptProduct: true
  recommendationLabel: string
  highlights: ProductHighlight[]
  features: ProductFeature[]
  applications: ProductApplication[]
  specifications: ProductSpecificationGroup[]
  comparison: ProductComparison
  documents: ProductDocument[]
  seo: ProductSeo
}
```

## 3. Supporting Types

```ts
interface ProductHighlight {
  label: string
  value: string
  qualifier?: string
}

interface ProductFeature {
  title: string
  description: string
  icon: string
}

interface ProductApplication {
  title: string
  description: string
  icon: string
}

interface ProductSpecificationGroup {
  id: string
  title: string
  items: Array<{
    key: string
    label: string
    value: string
    note?: string
  }>
}

interface ProductComparison {
  intendedUse: string
  energy: string
  ratedOutput: string
  peakOutput: string
  mobility: string
  installation: string
  charging: string
  protection: string
  weight: string
  expansion: string
  monitoring: string
  recommendedUser: string
}

interface ProductDocument {
  title: string
  type: 'overview' | 'datasheet' | 'presentation'
  url: string
  language: ProductLocale
  conceptual: true
  available: boolean
}

interface ProductSeo {
  title: string
  description: string
  ogImage: string
}
```

## 4. Product Identity Rules

`slug` and `model` are stable.

| Product | Slug | Category | Order |
|---|---|---|---|
| MAXIBUD PowerBox 2400 | `powerbox-2400` | `portable` | 1 |
| MAXIBUD HomeCore 5 | `homecore-5` | `home` | 2 |
| MAXIBUD SiteHub 10 | `sitehub-10` | `professional` | 3 |

Do not translate slugs or model names unless the routing strategy explicitly supports localized slugs and every route mapping is complete.

## 5. Units

Use consistent display forms:

- energy: `kWh`;
- power: `W` or `kW`;
- voltage: `V`;
- current: `A`;
- frequency: `Hz`;
- weight: `kg`;
- temperature: `°C`;
- ingress protection: `IP44`, `IP54`, `IP55`.

In Ukrainian copy, use a non-breaking space between value and unit where practical:

- `2.4 kWh` is acceptable in technical UI;
- `2,4 кВт·год` may be used in fully localized prose.

Choose one display convention per UI surface and remain consistent.

Do not mix decimal comma and decimal point inside one technical table.

## 6. Specification Groups

Use stable group identifiers:

- `energy`;
- `output-input`;
- `physical`;
- `environment`;
- `controls`.

Recommended order:

1. energy;
2. output and input;
3. physical;
4. environment;
5. communication and controls.

Comparison values should be separately modeled rather than parsed from human-readable specification rows.

## 7. Page Content Entity

Long-form pages may use:

```ts
interface PageRecord {
  locale: ProductLocale
  slug: 'technology' | 'about' | 'legal'
  title: string
  description: string
  sections: PageSection[]
  seo: ProductSeo
}
```

Possible section types:

- prose;
- feature list;
- comparison explanation;
- callout;
- disclosure;
- CTA.

Do not build a universal page-builder schema unless the project genuinely needs one. Three structured pages do not justify a miniature CMS.

## 8. Interface Messages

Store interface messages in locale files.

Groups:

```text
navigation.*
actions.*
products.*
comparison.*
contact.*
validation.*
status.*
errors.*
legal.*
accessibility.*
```

Examples:

```json
{
  "actions": {
    "viewProducts": "Переглянути продукти",
    "compare": "Порівняти системи",
    "requestConsultation": "Отримати консультацію"
  }
}
```

Do not place long product descriptions in interface locale JSON.

## 9. Contact Model

```ts
type ProductInterest =
  | 'powerbox-2400'
  | 'homecore-5'
  | 'sitehub-10'
  | 'unsure'

type InquiryType =
  | 'consultation'
  | 'technical'
  | 'distribution'
  | 'cooperation'
  | 'other'

interface ContactInput {
  name: string
  email: string
  phone?: string
  company?: string
  productSlug: ProductInterest
  inquiryType: InquiryType
  message: string
  consent: true
  website?: string
  locale: ProductLocale
}
```

Field rules belong to the shared validation schema. Server validation remains authoritative.

## 10. Use-Case Recommendation Model

The homepage selector can use a static mapping:

```ts
type UseCase = 'home' | 'mobile-work' | 'construction-site'

const recommendationByUseCase = {
  home: 'homecore-5',
  'mobile-work': 'powerbox-2400',
  'construction-site': 'sitehub-10'
} as const
```

Each localized use case requires:

- title;
- problem statement;
- recommendation explanation;
- two supporting reasons;
- CTA label.

Do not build an algorithm or questionnaire for a three-option mapping.

## 11. Document Handling

A document entry may only use `available: true` when the file exists.

Conceptual document naming:

```text
public/documents/uk/powerbox-2400-concept-datasheet.pdf
public/documents/en/powerbox-2400-concept-datasheet.pdf
```

Every generated document must contain:

- concept-product label;
- illustrative-specification note;
- language;
- product model;
- generation or revision date;
- no certification seal;
- no false company signature.

If a file is unavailable, show a disabled state or omit the entry. Do not create a broken link.

## 12. SEO Model

Every route requires:

- unique title;
- unique description;
- canonical URL derived at runtime;
- localized alternate;
- Open Graph image;
- product-specific data where relevant.

Product structured data must not include:

- real price;
- availability;
- aggregate rating;
- review;
- GTIN;
- commercial SKU;
- verified certification.

## 13. Content Validation Rules

Reject content when:

- locale is unsupported;
- slug is unknown;
- title or summary is empty;
- conceptProduct is not `true`;
- required highlight count is outside 3 to 5;
- specification groups are missing;
- comparison data is incomplete;
- document is marked available but URL is missing;
- SEO title or description is absent;
- duplicate locale and slug exist.

## 14. Content File Organization

Recommended:

```text
content/
└── products/
    ├── en/
    │   ├── homecore-5.md
    │   ├── powerbox-2400.md
    │   └── sitehub-10.md
    └── uk/
        ├── homecore-5.md
        ├── powerbox-2400.md
        └── sitehub-10.md
```

Keep file names and slugs aligned.

## 15. Content Review Checklist

- Both locales present?
- Slug and model stable?
- Summary distinct from description?
- Highlights numerically consistent?
- Specification values consistent with comparison?
- Applications do not promise guaranteed runtime?
- Concept status present?
- Document links real?
- SEO copy unique?
- No unsupported commercial claim?
