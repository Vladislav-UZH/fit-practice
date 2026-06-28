# Release Acceptance Checklist

## Use

This is the master submission and release checklist.

Mark an item as:

- PASS;
- FAIL;
- NOT APPLICABLE;
- NOT VERIFIED.

Do not mark an item PASS without evidence.

## 1. Repository

- [ ] Root `AGENTS.md` exists and was read.
- [ ] Repository-local project skill exists.
- [ ] One package-manager lockfile exists.
- [ ] `package.json` defines correct scripts.
- [ ] Node engine is declared.
- [ ] README reflects actual setup.
- [ ] `.env.example` exists when runtime values are used.
- [ ] No `.env` or secret is committed.
- [ ] No unrelated generated artifact is committed.
- [ ] Git working tree changes are understood.
- [ ] No required file is represented only by an untracked local artifact.

## 2. Required technology behavior

- [ ] Application uses the installed Nuxt 4-compatible architecture.
- [ ] SSR is enabled for indexable pages.
- [ ] Primary page content appears in server HTML.
- [ ] Nitro endpoint behavior matches deployment mode.
- [ ] Nuxt Content or equivalent content source is validated.
- [ ] i18n strategy is intentional.
- [ ] TypeScript strictness remains enabled.
- [ ] Runtime config separates private and public values.
- [ ] No browser-only API causes server failure.
- [ ] No known hydration mismatch remains.

## 3. Required routes

- [ ] `/`
- [ ] `/products`
- [ ] `/products/powerbox-2400`
- [ ] `/products/homecore-5`
- [ ] `/products/sitehub-10`
- [ ] `/products/compare`
- [ ] `/technology`
- [ ] `/about`
- [ ] `/contact`
- [ ] `/legal`
- [ ] English equivalents
- [ ] Branded 404
- [ ] Direct entry works
- [ ] Client navigation works

## 4. Navigation

- [ ] Header contains required navigation.
- [ ] Footer contains required links.
- [ ] Mobile navigation works.
- [ ] Active route is visible.
- [ ] Language switching preserves equivalent route.
- [ ] Product cards link to correct product.
- [ ] Comparison links work.
- [ ] Related-product links work.
- [ ] Contact CTA preselects product where intended.
- [ ] No dead internal link exists.

## 5. Homepage

- [ ] Hero explains product line immediately.
- [ ] Hero has one primary CTA.
- [ ] All three products are visible.
- [ ] Product values match approved data.
- [ ] Use-case selector maps correctly.
- [ ] Technology section avoids engineering instructions.
- [ ] Comparison preview is accurate.
- [ ] Final consultation CTA is clear.
- [ ] Concept status is visible.
- [ ] No fake social proof exists.

## 6. Products index

- [ ] All three products exist.
- [ ] Category filters work.
- [ ] Empty state is usable.
- [ ] Product summaries are distinct.
- [ ] Product values are consistent.
- [ ] Comparison CTA works.
- [ ] Concept disclosure exists.
- [ ] No pricing or availability is fabricated.

## 7. Product detail pages

For each product:

- [ ] Correct category.
- [ ] Correct name and slug.
- [ ] Correct tagline.
- [ ] Correct summary.
- [ ] Original product visual.
- [ ] Three to five highlights.
- [ ] Feature content.
- [ ] Application content.
- [ ] Grouped specifications.
- [ ] Values match approved product data.
- [ ] Illustrative-value disclosure.
- [ ] Documents are real or truthfully unavailable.
- [ ] Related products.
- [ ] Consultation CTA.
- [ ] Localized metadata.
- [ ] Missing slug returns 404.

## 8. Comparison

- [ ] All three products are shown.
- [ ] Primary use is correct.
- [ ] Energy values are correct.
- [ ] Rated output values are correct.
- [ ] Peak output values are correct.
- [ ] Mobility is correct.
- [ ] Installation format is correct.
- [ ] Charging concepts are correct.
- [ ] Protection values include concept context.
- [ ] Weights are correct.
- [ ] Expansion is correct.
- [ ] Monitoring descriptions are correct.
- [ ] Mobile view remains readable.
- [ ] No product is labeled universally “best.”

## 9. Technology

- [ ] Platform explanation is high level.
- [ ] LiFePO4 wording is conceptual.
- [ ] Modularity is explained.
- [ ] Charging paths are explained.
- [ ] Monitoring is explained.
- [ ] Protection-oriented design is explained.
- [ ] No wiring instructions.
- [ ] No repair instructions.
- [ ] No BMS bypass.
- [ ] No unsupported safety guarantee.
- [ ] Concept disclosure exists.

## 10. About

- [ ] Project status is accurate.
- [ ] Company label is correct.
- [ ] No invented factory.
- [ ] No invented staff count.
- [ ] No invented export market.
- [ ] No invented R&D center.
- [ ] No invented awards.
- [ ] No invented production volume.
- [ ] Product and contact links work.

## 11. Contact

- [ ] Name field.
- [ ] Email field.
- [ ] Optional phone.
- [ ] Optional company.
- [ ] Product selection.
- [ ] Inquiry-type selection.
- [ ] Message.
- [ ] Consent.
- [ ] Honeypot.
- [ ] Client validation.
- [ ] Server validation.
- [ ] Length limits.
- [ ] Rate limiting.
- [ ] Accessible field errors.
- [ ] Loading state.
- [ ] Success state.
- [ ] Server-error state.
- [ ] Rate-limit state.
- [ ] Success text describes actual delivery.
- [ ] No personal data logged.

## 12. Legal and truth

- [ ] Educational-project status.
- [ ] Fictional-product status.
- [ ] Illustrative-specification statement.
- [ ] No commercial-offer implication.
- [ ] No availability implication.
- [ ] No warranty implication.
- [ ] Contact-data behavior described.
- [ ] Asset ownership described.
- [ ] No fabricated certificate.
- [ ] No fabricated customer.
- [ ] No fabricated review.
- [ ] No fabricated partner logo.
- [ ] No fake certification badge.

## 13. Localization

- [ ] Ukrainian is complete.
- [ ] English is complete.
- [ ] No raw translation key.
- [ ] No empty translation value.
- [ ] No mixed-language page.
- [ ] Product names remain stable.
- [ ] Units remain consistent.
- [ ] Validation is localized.
- [ ] Status messages are localized.
- [ ] Legal meaning matches.
- [ ] Metadata is localized.
- [ ] 404 is localized.
- [ ] Long Ukrainian text fits mobile UI.

## 14. Accessibility

- [ ] Skip link.
- [ ] Semantic landmarks.
- [ ] One H1 per page.
- [ ] Logical heading hierarchy.
- [ ] Visible focus.
- [ ] Keyboard navigation.
- [ ] Mobile menu keyboard support.
- [ ] Escape closes overlays.
- [ ] Focus returns correctly.
- [ ] Form labels.
- [ ] Error associations.
- [ ] Status announcements.
- [ ] Contrast.
- [ ] Reduced motion.
- [ ] Image alternatives.
- [ ] 320 px layout.
- [ ] 200% zoom usability.
- [ ] Comparison is readable.
- [ ] No color-only information.

## 15. SEO

- [ ] Unique titles.
- [ ] Unique descriptions.
- [ ] Canonical URLs.
- [ ] Language alternates.
- [ ] Correct page language.
- [ ] Open Graph metadata.
- [ ] Open Graph image exists.
- [ ] robots behavior.
- [ ] sitemap behavior.
- [ ] Organization structured data.
- [ ] Website structured data.
- [ ] Breadcrumb structured data.
- [ ] Product structured data.
- [ ] No fabricated price.
- [ ] No fabricated availability.
- [ ] No fabricated ratings.
- [ ] No fabricated reviews.
- [ ] No fabricated GTIN or SKU.

## 16. Performance

- [ ] Hero image is correctly prioritized.
- [ ] Below-fold images lazy-load.
- [ ] Image dimensions or aspect ratios exist.
- [ ] No obvious layout shift.
- [ ] No unnecessary third-party script.
- [ ] No full icon library imported.
- [ ] No autoplay video.
- [ ] No excessive animation library.
- [ ] No duplicate critical request.
- [ ] Client bundle is reasonable.
- [ ] Production console is clean.

## 17. Tests and build

- [ ] Clean install from lockfile.
- [ ] Lint passes.
- [ ] Type check passes.
- [ ] Unit tests pass.
- [ ] Integration tests pass.
- [ ] E2E tests pass.
- [ ] Production build passes.
- [ ] Production preview starts.
- [ ] Primary routes checked in preview.
- [ ] Localized routes checked in preview.
- [ ] Contact endpoint checked in preview.
- [ ] No ignored blocking warning.

## 18. Documentation

- [ ] README overview.
- [ ] Concept disclosure.
- [ ] Prerequisites.
- [ ] Installation.
- [ ] Development.
- [ ] Scripts.
- [ ] Content editing.
- [ ] Localization.
- [ ] Contact demo behavior.
- [ ] Environment variables.
- [ ] Tests.
- [ ] Build.
- [ ] Deployment.
- [ ] Known limitations.

## 19. Final decision

READY requires:

- all blockers resolved;
- lint pass;
- type-check pass;
- required tests pass;
- build pass;
- required locales and routes;
- truthful disclosures;
- working primary user flows.

READY WITH LIMITATIONS permits:

- optional conceptual PDFs absent but truthfully labeled;
- production email provider unconfigured with working demo mode;
- optional analytics absent;
- optional theme omitted.

NOT READY applies when any blocker remains.
