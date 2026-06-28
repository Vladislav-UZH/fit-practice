# Data Fetching, Nuxt Content, Nitro, and Runtime Config

## Purpose

Use this reference for server-compatible data loading, Content collections, Nitro endpoints, validation, and environment configuration.

## 1. Choose the Correct Data Primitive

### useFetch

Use for HTTP requests, especially Nitro endpoints:

```ts
const { data, status, error } = await useFetch('/api/products')
```

Benefits:

- SSR-compatible;
- payload transfer to client;
- request-aware server behavior;
- reactive options.

### useAsyncData

Use for:

- Nuxt Content queries;
- SDK query functions;
- combining multiple async calls;
- custom data sources.

```ts
const { data, status, error } = await useAsyncData(
  `product:${locale.value}:${slug.value}`,
  () => queryCollection('products')
    .where('locale', '=', locale.value)
    .where('slug', '=', slug.value)
    .first()
)
```

Use an explicit key in reusable wrappers.

### $fetch

Use:

- inside event handlers;
- inside server code;
- within a `useAsyncData` handler;
- for imperative requests where SSR payload transfer is not required.

Do not call `$fetch` directly during page setup for primary SSR data when `useFetch` or `useAsyncData` should manage transfer and deduplication.

## 2. Data Fetching Rules

- Handle `data` as nullable.
- Handle `status` and `error`.
- Use `lazy` only when navigation should not block and the UI has a loading state.
- Keep identical `useAsyncData` keys consistent in handler and structural options.
- Do not use data-fetching composables for side effects.
- Use abort signals where supported for expensive or replaceable requests.
- Avoid waterfall requests when independent calls can run concurrently.
- Do not fetch the same source separately in multiple child components without a reason.

## 3. Typed Nuxt Content Collections

Define collections in root `content.config.ts`.

Example:

```ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'page',
      source: 'products/**/*.md',
      schema: z.object({
        locale: z.enum(['uk', 'en']),
        slug: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        order: z.number().int(),
        featured: z.boolean().default(false)
      }),
      indexes: [
        { columns: ['locale', 'slug'], unique: true },
        { columns: ['locale', 'order'] }
      ]
    })
  }
})
```

Check the installed Nuxt Content version before using schema helpers or index syntax.

Once `content.config.ts` exists, only content matched by declared collections is imported. Review source patterns carefully.

## 4. Page vs Data Collections

Use `type: 'page'` when content has a route-like path and renderable body.

Use `type: 'data'` for structured records without page-body semantics.

Do not choose a type based solely on file extension.

## 5. Querying Content

Use `queryCollection`.

List:

```ts
const { data: products } = await useAsyncData(
  `products:${locale.value}`,
  () => queryCollection('products')
    .where('locale', '=', locale.value)
    .order('order', 'ASC')
    .all()
)
```

Single item:

```ts
const { data: product } = await useAsyncData(
  `product:${locale.value}:${slug.value}`,
  () => queryCollection('products')
    .where('locale', '=', locale.value)
    .where('slug', '=', slug.value)
    .first()
)

if (!product.value) {
  throw createError({ statusCode: 404 })
}
```

Use `select` when a listing does not need body content or large fields.

Do not assume `first()` returns a value.

## 6. Content Integrity

- Validate required fields.
- Prefer unique stable slugs.
- Keep locale explicit for localized collections.
- Keep images local or use an approved image provider.
- Fail during development or build for malformed content.
- Do not silently render placeholder values for required fields.
- Do not place secrets in content files.
- Sanitize or avoid untrusted rendered HTML.

## 7. Nitro Route Structure

Examples:

```text
server/api/contact.post.ts
server/api/products/[slug].get.ts
server/routes/health.get.ts
server/middleware/request-id.ts
server/utils/validation.ts
```

File suffixes can constrain HTTP methods when supported by the installed Nitro/Nuxt version.

Example:

```ts
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)

  return {
    ok: true,
    id: crypto.randomUUID()
  }
})
```

Verify helper availability in installed types. If `readValidatedBody` is unavailable or incompatible, use `readBody` followed by explicit schema validation.

## 8. Server Input Validation

For every external payload:

1. enforce request method;
2. parse safely;
3. validate with an authoritative schema;
4. normalize strings;
5. enforce size limits;
6. reject unexpected values;
7. return a structured error;
8. avoid sensitive logging.

Example error shape:

```ts
{
  ok: false,
  code: 'VALIDATION_ERROR',
  fields: {
    email: 'Invalid email address'
  }
}
```

Do not expose raw Zod internals if the client contract expects localized messages.

## 9. Shared Schemas

Place environment-neutral schemas under `shared/` when both app and server use them.

Example:

```text
shared/
└── schemas/
    └── contact.ts
```

Do not import browser-only code into shared schemas.

Infer types:

```ts
export type ContactInput = z.infer<typeof contactSchema>
```

Server validation remains authoritative even when client validation exists.

## 10. Runtime Config

Declare intended values in `nuxt.config.ts`.

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    contactApiKey: '',
    public: {
      siteUrl: 'http://localhost:3000',
      siteName: 'Nuxt Application'
    }
  }
})
```

Environment override convention:

```dotenv
NUXT_CONTACT_API_KEY=
NUXT_PUBLIC_SITE_URL=https://example.com
NUXT_PUBLIC_SITE_NAME=Example
```

Rules:

- server secrets stay outside `public`;
- public runtime values are visible to the browser;
- do not read arbitrary environment variables directly throughout application code;
- validate required server variables when a provider is enabled;
- provide `.env.example` with blank secrets;
- never commit `.env`.

## 11. API Security Baseline

For public forms and endpoints, consider:

- server validation;
- length limits;
- rate limiting;
- honeypot;
- CSRF implications for cookie-authenticated mutations;
- authorization for private resources;
- safe content types;
- request identifiers;
- minimal logs;
- generic production errors.

Do not build security theater. Implement controls that match the actual endpoint.

## 12. Caching

Cache only when data semantics allow it.

Before caching, determine:

- public or private data;
- update frequency;
- user-specific variation;
- locale variation;
- invalidation strategy;
- deployment adapter behavior.

Never cache authenticated or personal data as a public response.

## 13. Review Checklist

- Correct data primitive selected?
- Stable explicit keys for wrapped `useAsyncData`?
- Nullable data handled?
- Content schema matches actual files?
- Content source patterns correct?
- Missing content produces 404?
- Server input validated?
- Secrets private?
- Public runtime values intentional?
- Sensitive data excluded from logs?
- Endpoint behavior truthful?
