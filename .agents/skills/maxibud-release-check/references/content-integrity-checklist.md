# Content Integrity Checklist

## Purpose

Protect the project from internal contradictions, fabricated commercial claims, incomplete localization, and misleading product presentation.

## 1. Required products

Exactly these products are required:

| Product | Slug | Category |
|---|---|---|
| MAXIBUD PowerBox 2400 | `powerbox-2400` | `portable` |
| MAXIBUD HomeCore 5 | `homecore-5` | `home` |
| MAXIBUD SiteHub 10 | `sitehub-10` | `professional` |

Required locales:

- `uk`;
- `en`.

Expected minimum product records:

- six localized product records.

## 2. Approved specifications

### PowerBox 2400

- energy: 2.4 kWh;
- rated output: 2,400 W;
- peak output: 4,800 W;
- weight: 28 kg;
- solar input: up to 800 W;
- enclosure: IP44 concept;
- chemistry: LiFePO4;
- indicative cycle life: 3,000+ cycles to 80%.

### HomeCore 5

- energy: 5.12 kWh per module;
- expansion: up to 20.48 kWh;
- system output concept: 5 kW;
- weight: 54 kg per module;
- enclosure: IP54 concept;
- chemistry: LiFePO4;
- indicative cycle life: 6,000+ cycles to 80%;
- expansion: up to four modules.

### SiteHub 10

- energy: 10.24 kWh;
- rated output: 6,000 W;
- peak output: 12,000 W;
- weight: 118 kg;
- solar input: up to 2,400 W;
- enclosure: IP55 concept;
- chemistry: LiFePO4.

## 3. Consistency checks

Search across:

- Content files;
- locale files;
- Vue components;
- metadata;
- structured data;
- conceptual PDFs;
- README;
- tests.

Verify:

- `2.4 kWh` is not changed to `2.5 kWh`;
- HomeCore maximum is `20.48 kWh`;
- SiteHub rated output is `6 kW`;
- PowerBox weight is `28 kg`;
- HomeCore weight is `54 kg per module`;
- SiteHub weight is `118 kg`;
- IP values are accompanied by concept context;
- cycle-life claims remain indicative;
- no exact runtime is promised without approved assumptions.

## 4. Required disclosures

Full English disclosure:

> MAXIBUD ENERGY is a conceptual product line created for an educational software demonstration. Product specifications are illustrative and do not represent certified commercial hardware.

Full Ukrainian disclosure:

> MAXIBUD ENERGY — концептуальна продуктова лінійка, створена для навчальної демонстрації програмного забезпечення. Характеристики продуктів є ілюстративними та не описують сертифіковане комерційне обладнання.

Short English disclosure:

> Concept product line for an educational demonstration. Specifications are illustrative.

Short Ukrainian disclosure:

> Концептуальна продуктова лінійка для навчальної демонстрації. Характеристики є ілюстративними.

Required locations:

- footer;
- legal page;
- near specifications;
- conceptual documents.

## 5. Forbidden factual claims

Flag language implying:

- product is available for purchase;
- product is in stock;
- product is certified;
- product passed independent testing;
- product has a real warranty;
- product is patented;
- product is a market leader;
- product is trusted by real customers;
- company has a verified factory;
- company has a verified R&D laboratory;
- named organizations are partners;
- product is compliant with a named standard.

Potential English search terms:

```text
certified
certification
in stock
buy now
order now
available now
market leader
trusted by
customers
warranty
patented
official partner
tested by
approved by
compliant with
CE certified
UL certified
military grade
```

Potential Ukrainian search terms:

```text
сертифіковано
сертифікат
в наявності
купити
замовити
гарантія
запатентовано
лідер ринку
нам довіряють
офіційний партнер
протестовано
схвалено
відповідає стандарту
військового класу
```

A detected term is not automatically a defect. Review context. Legal disclaimers may legitimately say “not certified.”

## 6. Placeholder detection

Flag:

- lorem ipsum;
- TODO;
- TBD;
- FIXME;
- `example.com` in user-facing content;
- fake phone numbers;
- fake customer names;
- placeholder image;
- missing image;
- “coming soon” on a required page;
- empty heading;
- empty CTA;
- dead document link.

Do not flag explicit development comments outside user-facing output unless they represent unfinished required work.

## 7. Documents

For each `available: true` document:

- file exists;
- locale matches;
- product matches;
- concept label appears;
- specification matches site;
- no certification seal;
- no signature implying approval;
- revision date exists;
- file opens.

For `available: false`:

- no live anchor to missing file;
- UI truthfully labels unavailability;
- optional document absence does not block core flow.

## 8. Product visuals

Verify:

- assets are original or licensed;
- no competitor logo;
- no copied product body;
- no certification mark;
- no unsafe exposed battery internals;
- product family looks coherent;
- alt text does not overclaim realism.

## 9. Contact truth

Demo mode success must not claim:

- “Email sent”;
- “Sales will contact you”;
- “Order received”;
- “Request stored”;

unless the implementation actually performs that action.

Approved demo English:

> Your request has been validated and accepted by the demonstration service.

Approved demo Ukrainian:

> Запит перевірено та прийнято демонстраційним сервісом.

## 10. Review output

For every integrity defect, report:

- exact claim;
- location;
- why it is unsupported or contradictory;
- approved replacement;
- severity.
