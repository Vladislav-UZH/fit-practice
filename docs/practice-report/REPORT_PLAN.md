# Practice Report Plan and DOCX Specification

## 1. Document status

- Repository: `Vladislav-UZH/fit-practice`
- Report language: Ukrainian
- Student: Перебзяк Владислав Михайлович
- Course: 3
- Study mode: full-time
- Practice period: 15.06.2026-28.06.2026
- Working days used in the diary: 15-19.06.2026 and 22-26.06.2026
- Report topic: **Проєктування та розробка інформаційної вебсистеми для презентації продуктів ТОВ «МАКСІБУД»**
- Target length: up to 20 pages including the title page, contents, conclusions, and references
- Project type: educational bilingual Nuxt 4 product-presentation web application
- Product truth boundary: MAXIBUD ENERGY and all three products are conceptual educational content, not certified or commercially available hardware
- Current release status: not production-ready

This file is the authoritative planning source for the practice report and the later DOCX generation workflow. It does not replace `AGENTS.md`, `PROJECT_CONTEXT.md`, or `CURRENT_STATE.md`. Repository files and actual code remain authoritative for technical facts.

## 2. Source hierarchy

Use sources in the following order:

1. Current user-approved report decisions recorded in this file.
2. The uploaded UzhNU methodological guide:
   - Міца О. В., Шапочка І. В., Копча-Гарячкіна Г. Е. *Методичні рекомендації щодо підготовки та захисту кваліфікаційних робіт здобувачів вищої освіти освітніх ступенів бакалавра та магістра за спеціальністю F3 Комп’ютерні науки*. Ужгород: ДВНЗ «Ужгородський національний університет», 2025. 56 с.
3. DSTU 3008:2015 for report structure and presentation.
4. DSTU 8302:2015 for bibliographic references.
5. The provided practice-report, diary, and completed-practice examples only as structural examples, not as normative sources.
6. Repository instructions and factual project documentation:
   - `AGENTS.md`;
   - `PROJECT_CONTEXT.md`;
   - `CURRENT_STATE.md`;
   - `README.md`;
   - relevant design reviews and source files.
7. Official documentation for the installed technologies.

### Methodology scope warning

The uploaded 2025 UzhNU guide regulates qualification works, not specifically practice reports. For this practice report, its formatting rules are applied as the approved document-format profile. Report section names and the target length of up to 20 pages are taken from the practice examples and user approval.

Do not treat example-specific content as mandatory. In particular, do not copy a company-history chapter, old specialty codes, obsolete title-page data, or formatting that conflicts with the 2025 methodology.

## 3. Report purpose and academic position

### 3.1 Purpose

Describe and substantiate the design and implementation of an educational information web system for presenting the conceptual MAXIBUD ENERGY product line.

### 3.2 Main objectives

1. Analyse the assignment, subject area, and system boundaries.
2. Define functional and non-functional requirements.
3. Justify the selected technology stack.
4. Describe the Nuxt 4 architecture, SSR, Nitro, content, localization, and validation layers.
5. Explain the implementation of structured bilingual product content.
6. Explain the user-interface composition, responsive behaviour, and accessibility work.
7. Describe component, runtime, and Playwright E2E testing.
8. Describe GitHub Actions automation.
9. Present verified results and unresolved limitations.
10. Keep every report claim traceable to repository evidence or approved administrative data.

### 3.3 Required truth boundaries

The report must not claim that:

- MAXIBUD ENERGY products are certified, tested, patented, commercially available, or used by real customers;
- the website is a finished commercial platform;
- the application supports sales, payment, inventory, authentication, or real hardware telemetry;
- the contact flow is fully complete when repository state says otherwise;
- deployment, manual screen-reader review, LCP review, or CLS review is complete unless later repository evidence confirms it;
- illustrative product specifications are verified engineering data.

Preferred wording:

- `навчальна інформаційна вебсистема`;
- `концептуальна продуктова лінійка`;
- `ілюстративні характеристики`;
- `реалізована основа`;
- `демонстраційний сценарій`;
- `поточний етап розробки`.

## 4. Approved report structure and page budget

The final page numbers are assigned only after DOCX rendering and visual verification.

| Part | Planned length |
|---|---:|
| Title page | 1 page |
| Contents | 1 page |
| Introduction | 1-1.5 pages |
| Chapter 1 | 4-5 pages |
| Chapter 2 | 9-10 pages |
| Conclusions | 1 page |
| References | 1 page |
| Total | 18-20 pages |

### INTRODUCTION

Required content:

- relevance;
- practice period;
- report topic;
- purpose;
- objectives;
- object;
- subject;
- methods and technologies;
- practical result;
- report structure;
- explicit educational and conceptual-product disclosure.

### CHAPTER 1. ANALYSIS OF THE TASK AND DESIGN OF THE INFORMATION WEB SYSTEM

#### 1.1 Purpose, goal, and objectives of the web system

#### 1.2 Functional and non-functional requirements

#### 1.3 Subject-area limitations

#### 1.4 Technology selection rationale

#### 1.5 Web-system architecture and data model

### CHAPTER 2. DEVELOPMENT OF THE INFORMATION WEB SYSTEM FOR PRESENTING PRODUCTS OF MAXIBUD LLC

#### 2.1 Nuxt application initialization and configuration

#### 2.2 Structured content, validation schemas, and API routes

#### 2.3 Localization, routing, and search-engine optimization

#### 2.4 Responsive and accessible user-interface development

#### 2.5 Testing and quality-check automation

#### 2.6 Development results and current system limitations

### CONCLUSIONS

Summarize results against the stated objectives. Do not add new technical facts or promotional claims.

### REFERENCES

Include only sources cited in the report. Order entries by first appearance in the text.

## 5. Diary-to-report synchronization

| Diary date | Diary work | Report location |
|---|---|---|
| 15.06.2026 | Assignment, methodology, repository inspection | Introduction; source and method notes |
| 16.06.2026 | Purpose and subject-area analysis | 1.1; 1.3 |
| 17.06.2026 | Functional and non-functional requirements | 1.2 |
| 18.06.2026 | Technology rationale and architecture planning | 1.4; 1.5 |
| 19.06.2026 | Nuxt foundation and application shell | 2.1 |
| 22.06.2026 | Product content and Zod schemas | 2.2 |
| 23.06.2026 | Nitro API routes and validation | 2.2 |
| 24.06.2026 | Interface shell, navigation, localization | 2.3; 2.4 |
| 25.06.2026 | Product presentation, recommendations, comparison, technology, CTA | 2.4 |
| 26.06.2026 | Tests, CI, results, documentation | 2.5; 2.6; Conclusions |

Every completed diary activity must be represented in the report. Every substantial implementation claim in the report must map to repository evidence and, where relevant, to a diary activity.

## 6. Visual evidence plan

Visual material is mandatory but must carry information. Decorative screenshots and filler charts are prohibited.

All diagrams, infographics, screenshots, charts, and schemes are captioned as `Рисунок` in accordance with the methodology.

### 6.1 Planned figures

| Number | Working title | Type | Planned section | Evidence source |
|---|---|---|---|---|
| Рисунок 1.1 | Контекст і межі інформаційної вебсистеми | Author-created context diagram | 1.1 or 1.3 | `PROJECT_CONTEXT.md`, `AGENTS.md` |
| Рисунок 1.2 | Узагальнена архітектура вебсистеми | Author-created architecture diagram | 1.5 | `nuxt.config.ts`, `content.config.ts`, `server/`, `shared/` |
| Рисунок 2.1 | Потік локалізованих продуктових даних | Author-created data-flow infographic | 2.2 or 2.3 | YAML content, Zod schemas, Nitro API, pages |
| Рисунок 2.2 | Композиція головної сторінки вебсистеми | Annotated application screenshot or page-flow diagram | 2.4 | Implemented homepage |
| Рисунок 2.3 | Послідовність автоматизованої перевірки якості | Author-created CI pipeline diagram | 2.5 | `.github/workflows/ci.yml` |

Optional sixth figure only if the page budget permits:

- `Рисунок 2.4 Результат адаптивного відображення інтерфейсу на мобільному пристрої`.

### 6.2 Planned tables

| Number | Working title | Planned section |
|---|---|---|
| Таблиця 1.1 | Основні функціональні та нефункціональні вимоги | 1.2 |
| Таблиця 1.2 | Призначення технологій програмного проєкту | 1.4 |
| Таблиця 2.1 | Структура основних програмних модулів вебсистеми | 2.1 or 2.2 |
| Таблиця 2.2 | Відповідність видів тестування перевіреним сценаріям | 2.5 |
| Таблиця 2.3 | Реалізовані можливості та незавершені складові | 2.6 |

### 6.3 Chart policy

Use a numeric chart only when verified comparable data exists and the chart communicates more clearly than a table.

Do not create decorative charts from:

- illustrative product characteristics without analytical purpose;
- arbitrary percentages;
- invented progress values;
- unsupported performance metrics;
- design-review scores presented as product quality metrics.

If a chart is included, its data source and interpretation must be stated in the surrounding text.

### 6.4 Figure quality rules

- Place each figure immediately after its first textual reference or on the next page.
- Refer to every figure in the text.
- Use project-owned screenshots and author-created diagrams.
- Avoid external commercial product imagery.
- Use readable labels at the final A4 print size.
- Prefer vector SVG/EMF for diagrams when the DOCX toolchain preserves it; otherwise use high-resolution PNG.
- Target at least 1600 px width for full-page raster figures.
- Crop screenshots to relevant content and remove browser or desktop clutter.
- Do not distort aspect ratios.
- Keep all labels in Ukrainian except canonical technology and product names.

## 7. Binding formatting requirements from the methodology

### 7.1 Page setup

| Setting | Required value |
|---|---|
| Paper size | A4, 210 mm x 297 mm |
| Printing | One side of the sheet |
| Top margin | 25 mm |
| Bottom margin | 25 mm |
| Left margin | 30 mm |
| Right margin | 20 mm |
| Main font | Times New Roman |
| Main font size | 14 pt |
| Font colour | Black |
| Main line spacing | 1.5 |
| Paragraph first-line indent | 1.25 cm |
| Main language | Ukrainian |

### 7.2 Headings

Structural elements and chapter headings:

- centered;
- uppercase;
- bold;
- no final period;
- not numbered for `ЗМІСТ`, `ВСТУП`, `ВИСНОВКИ`, and `СПИСОК ВИКОРИСТАНИХ ДЖЕРЕЛ`;
- chapter headings numbered with Arabic numerals without a trailing period.

Subsection headings:

- left aligned;
- first-line position at the standard paragraph indent;
- sentence case;
- bold;
- numbered as `1.1`, `1.2`, etc.;
- no final period.

Do not place a heading as the final line of a page. Keep the heading with at least two following lines of body text.

The distance between a heading and the preceding/following text must visually equal two 1.5-line intervals.

### 7.3 Page numbering

- Use continuous Arabic numbering through the report and appendices.
- Place the page number in the upper-right corner.
- Do not add punctuation after the number.
- The title page and contents are counted but their page numbers are hidden.
- Figures and tables remain part of the continuous page numbering.

### 7.4 Numbering of sections

- Chapters: `1`, `2`.
- Subsections: `1.1`, `1.2`, `2.1`.
- Do not place a period after a chapter or subsection number.
- Do not create a numbered level that contains only one child item.

### 7.5 Figures

- Caption prefix: `Рисунок`.
- Number within each chapter: `Рисунок 1.1`, `Рисунок 2.1`.
- Caption below the figure, centered.
- Caption begins with a capital letter and has no final period unless required by sentence structure.
- Each figure must be referenced in the text.
- Author-created diagrams do not require an external source citation.
- Third-party figures require a source citation and copyright compliance.

### 7.6 Tables

- Number within each chapter: `Таблиця 1.1`, `Таблиця 2.1`.
- Place the title above the table from the standard paragraph indent.
- Refer to each table in the text.
- Repeat the header row when a table continues on the next page.
- Mark continuation as `Продовження таблиці 2.1`.
- Keep units consistent inside columns.
- Avoid vertical text and overly dense tables.

### 7.7 Lists

- Use one consistent hierarchy.
- Use a colon before a list when grammatically required.
- Begin list entries with lowercase letters when they continue the introductory sentence.
- End intermediate entries with semicolons and the final entry with a period when the list forms one sentence.

### 7.8 References

- Use square-bracket citations, for example `[1]`, `[3, с. 25]`, or `[2, 5]`.
- Order the bibliography by first citation in the text.
- Use DSTU 8302:2015 bibliographic descriptions.
- Include only cited sources.
- Keep titles in their original language.
- Add access dates for web resources if required by the final bibliographic template.

### 7.9 Appendices

Appendices are optional and should be added only if essential material cannot fit in the 20-page report.

- Place appendices after the reference list.
- Label them `ДОДАТОК А`, `ДОДАТОК Б`, excluding letters prohibited by the methodology.
- Number appendix figures and tables as `Рисунок А.1`, `Таблиця А.1`.

## 8. DOCX implementation profile

This section translates the binding methodology into concrete Word-processing settings. These are implementation conventions for generating a stable DOCX, not additional academic requirements.

### 8.1 Document-level settings

- Page size: A4 portrait.
- Section margins: top 25 mm, bottom 25 mm, left 30 mm, right 20 mm.
- Header distance: approximately 12.5 mm from the page edge, adjusted so the upper-right page number remains inside the top margin.
- Footer distance: approximately 12.5 mm.
- Gutter: 0 mm.
- Mirror margins: disabled.
- Different first page: enabled for the title page.
- Widow/orphan control: enabled.
- Automatic hyphenation: disabled for headings; body hyphenation should remain disabled unless manual review proves it necessary.
- Default proofing language: Ukrainian.

### 8.2 Required Word styles

#### `Normal` / body text

- Times New Roman, 14 pt, black;
- justified alignment;
- 1.5 line spacing;
- first-line indent 1.25 cm;
- spacing before 0 pt;
- spacing after 0 pt;
- widow/orphan control enabled.

#### `Title` / title-page topic

- Times New Roman, 14 pt, bold;
- centered;
- no first-line indent;
- single or 1.15 spacing only when needed to fit the approved title-page layout;
- no automatic word breaking.

#### `Heading 1` / chapter and structural heading

- Times New Roman, 14 pt, bold, uppercase;
- centered;
- no first-line indent;
- 1.5 line spacing;
- keep with next;
- page break before chapters, Introduction, Conclusions, and References;
- no final period.

#### `Heading 2` / subsection

- Times New Roman, 14 pt, bold;
- left aligned;
- left and first-line position equivalent to 1.25 cm paragraph start;
- 1.5 line spacing;
- keep with next;
- no final period.

#### `Caption` / figure caption

- Times New Roman, 14 pt unless final layout requires 12 pt for readability and page budget;
- centered;
- no first-line indent;
- keep with previous;
- automatic chapter-based numbering preferred.

#### `Table Title`

- Times New Roman, 14 pt;
- left aligned at 1.25 cm;
- no first-line indent beyond the title start;
- keep with next.

#### `Table Text`

- Times New Roman, 12-14 pt;
- single line spacing;
- 0 pt before and after;
- vertical alignment centered for short cells;
- 12 pt may be used only where necessary to keep tables legible and within page width.

#### `Source Code` if code fragments are unavoidable

- Use only short fragments that are analysed in the text.
- Use a monospaced font at 10-11 pt.
- Single line spacing.
- Do not place large code listings in the main 20-page body.
- Prefer describing code structure and showing only critical fragments.

### 8.3 Automatic table of contents

- Build the contents from `Heading 1` and `Heading 2` styles.
- Include two heading levels.
- Use right-aligned page numbers with dot leaders.
- Update all fields after final pagination.
- Hide the page number on the contents page while retaining it in the continuous count.

### 8.4 Section breaks and page-number control

Recommended section model:

1. Title page section with hidden page number.
2. Front-matter section containing contents, with hidden visible numbering but preserved count.
3. Main-text section beginning with Introduction and visible upper-right numbering.

Use `Link to Previous` carefully so title-page and front-matter headers do not expose page numbers.

### 8.5 Figure and table anchoring

- Insert figures inline with text, not as floating objects.
- Keep figure caption in the following paragraph.
- Prevent figure/caption separation where possible.
- Set table rows to repeat as header rows when tables span pages.
- Disable row splitting only for short rows; allow splitting for long text rows to avoid blank pages.
- Avoid manual spaces and tabs for alignment.

### 8.6 Cross-references

Use Word cross-reference fields for:

- chapter and subsection references;
- figure numbers;
- table numbers;
- appendix references.

Do not hardcode figure or table numbers in body text when automatic fields can be used.

### 8.7 Final DOCX field update

Before delivery:

1. select all document content;
2. update fields;
3. regenerate the contents;
4. confirm figure and table numbering;
5. confirm cross-references;
6. export to PDF;
7. render every page to images;
8. inspect for clipping, orphan headings, broken tables, misplaced captions, and page-number errors.

## 9. Reference plan

### 9.1 Formatting and methodology sources

These sources should appear early in the report bibliography if they are cited in the introduction or formatting explanation:

1. Міца О. В., Шапочка І. В., Копча-Гарячкіна Г. Е. Методичні рекомендації щодо підготовки та захисту кваліфікаційних робіт здобувачів вищої освіти освітніх ступенів бакалавра та магістра за спеціальністю F3 Комп’ютерні науки. Ужгород: ДВНЗ «Ужгородський національний університет», 2025. 56 с.
2. ДСТУ 3008:2015. Інформація та документація. Звіти у сфері науки і техніки. Структура та правила оформлювання.
3. ДСТУ 8302:2015. Інформація та документація. Бібліографічне посилання. Загальні положення та правила складання.

### 9.2 Technical sources

Use official documentation corresponding to the installed major versions:

- Nuxt 4 introduction, directory structure, server, rendering, hydration, SEO, testing;
- Vue 3 Composition API and TypeScript documentation;
- Nuxt Content collection and query documentation;
- Nuxt i18n routing and SEO documentation;
- Nuxt UI documentation;
- Zod documentation;
- Vitest documentation;
- Playwright documentation;
- GitHub Actions documentation;
- WCAG 2.2 normative guidance.

The installed package versions in `package.json` remain the source of truth. Do not claim that the project uses the latest online version merely because a documentation page describes it.

### 9.3 Repository evidence

Repository files are primary implementation evidence but are not automatically bibliography entries. Cite them in the report as project materials only where academically appropriate. Main evidence files include:

- `package.json`;
- `nuxt.config.ts`;
- `content.config.ts`;
- `shared/schemas/product.ts`;
- `content/products/`;
- `server/api/products/`;
- `.github/workflows/ci.yml`;
- `docs/design-reviews/`;
- `CURRENT_STATE.md`.

## 10. Writing and review workflow

1. Approve this plan.
2. Write one complete subsection at a time.
3. For every subsection, record:
   - factual repository evidence;
   - sources to cite;
   - planned table or figure;
   - target word/page budget;
   - limitations that must remain visible.
4. Check synchronization with the diary.
5. Check academic style and remove promotional language.
6. Check that no incomplete capability is presented as complete.
7. Assemble the final text only after all subsections are approved.
8. Generate DOCX using the style profile in section 8.
9. Update fields and render the document.
10. Perform page-by-page visual verification.

## 11. Acceptance criteria

The report is ready for DOCX generation only when all criteria below are met:

- [ ] The approved topic is used verbatim.
- [ ] The report remains within 20 pages before optional appendices.
- [ ] Every diary activity is represented.
- [ ] Every technical claim is supported by repository evidence.
- [ ] Concept products are not described as certified or commercially available.
- [ ] The project is not described as a finished commercial system.
- [ ] The report contains at least four informative figures or diagrams.
- [ ] The report contains at least four informative tables.
- [ ] Every figure and table is referenced in the text.
- [ ] No decorative or fabricated chart is included.
- [ ] Sources are ordered by first citation.
- [ ] Bibliography follows DSTU 8302:2015.
- [ ] A4, margins, Times New Roman 14 pt, 1.5 spacing, and 1.25 cm indent are applied.
- [ ] Page numbering is upper-right and hidden on title/contents pages.
- [ ] Headings and captions follow the methodology.
- [ ] The automatic contents and cross-references are updated.
- [ ] The final DOCX and exported PDF pass page-by-page visual inspection.

## 12. Administrative data still required

Before final title-page and diary generation, confirm:

- faculty;
- department;
- group;
- current specialty code and full name;
- exact official practice type wording;
- practice base wording;
- university supervisor name, position, degree, and title;
- practice-base supervisor name and position;
- city and submission year;
- approved title-page template for this practice type.
