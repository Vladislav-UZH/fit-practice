export type InformationLocale = 'uk' | 'en'

export interface TechnologyPrinciple {
  id: 'chemistry' | 'inputs' | 'protection' | 'monitoring'
  title: string
  description: string
}

export interface TechnologyFormat {
  slug: 'powerbox-2400' | 'homecore-5' | 'sitehub-10'
  name: string
  context: string
  description: string
}

export interface AboutCapability {
  id: 'content' | 'rendering' | 'localization' | 'quality'
  title: string
  description: string
}

export const informationPageContent = {
  uk: {
    technology: {
      eyebrow: 'Технологічна концепція',
      title: 'Спільні принципи без вигаданої універсальності',
      description: 'MAXIBUD ENERGY об’єднує три формати спільною концепцією накопичення енергії. Корпуси, підходи до заряджання, розміщення та інтерфейси змінюються відповідно до робочого контексту.',
      seoTitle: 'Технологічна концепція MAXIBUD ENERGY',
      seoDescription: 'Відповідальний огляд спільної LiFePO4-концепції, заряджання, захисту, моніторингу та форм-факторів MAXIBUD ENERGY.',
      platformEyebrow: 'Логіка портфеля',
      platformTitle: 'Одне концептуальне ядро, різні реалізації',
      platformDescription: 'Спільність портфеля означає узгоджені принципи подання енергії, стану та захисту. Вона не означає один підтверджений контролер, інвертор, протокол або фізичну електричну схему для всіх продуктів.',
      principles: [
        {
          id: 'chemistry',
          title: 'LiFePO4 як спільна концепція',
          description: 'Усі три продукти описуються через навчальну концепцію літій-залізо-фосфатної платформи без заяв про сертифікацію, гарантований ресурс або реальне серійне виробництво.'
        },
        {
          id: 'inputs',
          title: 'Мережеві та сонячні входи як сценарії',
          description: 'Портфель передбачає концептуальні шляхи заряджання від мережі та сонячних входів. Конкретна потужність і спосіб підключення залежать від продукту та не є інструкцією з монтажу.'
        },
        {
          id: 'protection',
          title: 'Захист відповідно до форм-фактора',
          description: 'Переносний, стаціонарний і колісний формати мають різні концепції корпусу, розміщення та захисту. Позначення IP на сайті є ілюстративними характеристиками концептів.'
        },
        {
          id: 'monitoring',
          title: 'Статус і моніторинг за контекстом',
          description: 'Локальні дисплеї та вебмоніторинг подані як різні способи показу стану. Сайт не стверджує, що всі продукти використовують одну перевірену систему керування.'
        }
      ] satisfies TechnologyPrinciple[],
      diagram: {
        eyebrow: 'Схема платформи',
        title: 'Взаємозв’язок принципів',
        accessibleLabel: 'Концептуальна схема, що пов’язує хімію, джерела заряджання, захист, моніторинг і три продуктові форм-фактори',
        labels: {
          chemistry: 'LiFePO4-концепція',
          inputs: 'Мережа та сонце',
          protection: 'Захист і корпус',
          monitoring: 'Статус і моніторинг',
          formats: 'Три форм-фактори'
        },
        note: 'Схема показує інформаційну модель портфеля. Вона не є електричною схемою, монтажною документацією або описом реального внутрішнього пристрою.'
      },
      formatsEyebrow: 'Форм-фактори',
      formatsTitle: 'Спільні принципи адаптуються до робочого середовища',
      formatsDescription: 'Кожен продукт зберігає власну роль. Портативність, стаціонарне масштабування та професійне транспортування не зводяться до одного універсального корпусу.',
      formats: [
        {
          slug: 'powerbox-2400',
          name: 'PowerBox 2400',
          context: 'Мобільна робота',
          description: 'Переносний формат із локальним статусом і компактною концепцією входів для коротких або тимчасових сценаріїв.'
        },
        {
          slug: 'homecore-5',
          name: 'HomeCore 5',
          context: 'Дім і малий бізнес',
          description: 'Стаціонарна модульна концепція, де масштабування та вебмоніторинг подані як частина домашнього або офісного контексту.'
        },
        {
          slug: 'sitehub-10',
          name: 'SiteHub 10',
          context: 'Професійний майданчик',
          description: 'Колісний професійний формат із більшою місткістю, вищою потужністю та інтерфейсами для триваліших робочих сценаріїв.'
        }
      ] satisfies TechnologyFormat[],
      boundariesEyebrow: 'Межі інформації',
      boundariesTitle: 'Що ця сторінка навмисно не пояснює',
      boundariesDescription: 'Реальні енергетичні системи потребують перевірених компонентів, документації та фахового проєктування. Навчальний сайт не підміняє ці процеси.',
      boundaries: [
        'Немає схем підключення, монтажних кроків або інструкцій з ремонту.',
        'Немає заяв про сертифікацію, відповідність стандартам чи гарантований ресурс.',
        'Немає гарантії сумісності з конкретним об’єктом, навантаженням або сонячною системою.',
        'Немає розрахунків автономності чи підбору обладнання для реального встановлення.'
      ],
      ctaTitle: 'Порівняйте, як принципи реалізовані у трьох форматах',
      ctaDescription: 'Перейдіть до продуктової лінійки або повної матриці, щоб зіставити ілюстративні характеристики без маркетингових рейтингів.'
    },
    about: {
      eyebrow: 'Про проєкт',
      title: 'Навчальний продуктовий сайт із повним технічним контуром',
      description: 'MAXIBUD ENERGY демонструє, як побудувати двомовний Nuxt 4 сайт для концептуальної продуктової лінійки: від контентної моделі та SSR до API, доступності й автоматизованого тестування.',
      seoTitle: 'Про навчальний проєкт MAXIBUD ENERGY',
      seoDescription: 'Мета, архітектура, технологічний стек і межі навчального програмного проєкту MAXIBUD ENERGY.',
      identityEyebrow: 'Ідентичність',
      identityTitle: 'Програмний проєкт, а не історія виробника',
      identityLead: 'MAXIBUD ENERGY — вигадана продуктова лінійка, пов’язана в навчальному контексті з MAXIBUD LLC / ТОВ «МАКСІБУД».',
      identityParagraphs: [
        'Проєкт створено як практичну демонстрацію інформаційної архітектури, контентного моделювання, локалізації, серверного рендерингу та перевірки якості.',
        'Сайт не стверджує існування виробничих майданчиків, команди працівників, партнерів, ринків збуту, реальних клієнтів або комерційної історії продуктової лінійки.'
      ],
      facts: [
        { value: '3', label: 'концептуальні продукти' },
        { value: '2', label: 'локалізовані версії' },
        { value: 'SSR', label: 'серверний рендеринг Nuxt' },
        { value: 'CI', label: 'автоматизована перевірка' }
      ],
      capabilitiesEyebrow: 'Інженерна цінність',
      capabilitiesTitle: 'Що демонструє реалізація',
      capabilitiesDescription: 'Проєкт виходить за межі статичної посадкової сторінки та показує повний цикл роботи з даними, маршрутами, формами й перевірками.',
      capabilities: [
        {
          id: 'content',
          title: 'Структурований контент і схеми',
          description: 'Продуктові записи, порівняння, специфікації та контактні запити проходять через типізовані моделі й Zod-валідацію.'
        },
        {
          id: 'rendering',
          title: 'SSR, маршрути та Nitro API',
          description: 'Nuxt 4 формує локалізовані сторінки, динамічні продуктові маршрути, SEO-метадані та серверні endpoint-и.'
        },
        {
          id: 'localization',
          title: 'Локалізація та доступність',
          description: 'Українські й англійські маршрути мають еквівалентний зміст, семантичну структуру, клавіатурну навігацію та доступні стани форм.'
        },
        {
          id: 'quality',
          title: 'Автоматизована якість',
          description: 'ESLint, перевірка типів, unit/Nuxt-runtime тести, production build і Playwright E2E виконуються у CI.'
        }
      ] satisfies AboutCapability[],
      scopeEyebrow: 'Межі проєкту',
      scopeTitle: 'Свідомо обмежений демонстраційний контур',
      scopeDescription: 'Сайт презентує концепти, підтримує порівняння та приймає демонстраційний запит. Він не перетворюється на магазин, CRM або систему керування обладнанням.',
      scopeItems: [
        'Немає цін, кошика, оплати, залишків, доставки або реального оформлення замовлення.',
        'Немає акаунтів, автентифікації, CRM, телеметрії, firmware або алгоритмів керування батареями.',
        'Немає вигаданих сертифікатів, відгуків, нагород, клієнтів, партнерських логотипів або виробничих тверджень.',
        'Контактний endpoint працює як демонстраційний сервіс валідації без заяв про реальну доставку чи постійне зберігання.'
      ],
      processEyebrow: 'Робочий підхід',
      processTitle: 'Від факту до інтерфейсу',
      processSteps: [
        { title: 'Визначити межі правдивості', description: 'Кожне твердження класифікується як факт репозиторію, рішення проєкту, концептуальний продукт або невідоме.' },
        { title: 'Зберігати дані структуровано', description: 'Характеристики належать продуктам, інтерфейсні підписи — локалізації, а правила — схемам і контрактам.' },
        { title: 'Перевірити поведінку', description: 'Маршрути, 404, адаптивність, форми, локалі та доступність покриваються автоматизованими тестами.' },
        { title: 'Фіксувати стан', description: 'Milestone, знайдені дефекти, design review і наступний крок записуються в репозиторії.' }
      ],
      ctaTitle: 'Перегляньте результат як користувач або дослідіть продуктовий контекст',
      ctaDescription: 'Каталог показує завершений користувацький потік, а правова сторінка пояснює навчальний і концептуальний статус.'
    }
  },
  en: {
    technology: {
      eyebrow: 'Technology concept',
      title: 'Shared principles without invented universality',
      description: 'MAXIBUD ENERGY connects three formats through a common energy-storage concept. Enclosures, charging approaches, placement, and interfaces change with the working context.',
      seoTitle: 'MAXIBUD ENERGY technology concept',
      seoDescription: 'A responsible overview of the shared LiFePO4 concept, charging, protection, monitoring, and form factors behind MAXIBUD ENERGY.',
      platformEyebrow: 'Portfolio logic',
      platformTitle: 'One conceptual core, different implementations',
      platformDescription: 'Portfolio consistency means aligned principles for presenting energy, status, and protection. It does not mean one verified controller, inverter, protocol, or physical electrical architecture across every product.',
      principles: [
        {
          id: 'chemistry',
          title: 'LiFePO4 as a shared concept',
          description: 'All three products use an educational lithium iron phosphate platform concept without certification, guaranteed cycle life, or real production claims.'
        },
        {
          id: 'inputs',
          title: 'Grid and solar inputs as scenarios',
          description: 'The portfolio includes concept charging paths from the grid and solar inputs. Product-specific power and connection approaches are not installation instructions.'
        },
        {
          id: 'protection',
          title: 'Protection matched to the form factor',
          description: 'Portable, stationary, and wheeled formats use different enclosure, placement, and protection concepts. IP labels on the site are illustrative concept specifications.'
        },
        {
          id: 'monitoring',
          title: 'Status and monitoring matched to context',
          description: 'Local displays and web monitoring are presented as different status interfaces. The site does not claim that every product uses one verified control system.'
        }
      ] satisfies TechnologyPrinciple[],
      diagram: {
        eyebrow: 'Platform diagram',
        title: 'How the principles relate',
        accessibleLabel: 'Concept diagram connecting chemistry, charging sources, protection, monitoring, and three product form factors',
        labels: {
          chemistry: 'LiFePO4 concept',
          inputs: 'Grid and solar',
          protection: 'Protection and enclosure',
          monitoring: 'Status and monitoring',
          formats: 'Three form factors'
        },
        note: 'The diagram presents the portfolio information model. It is not a circuit diagram, installation document, or description of real internal hardware.'
      },
      formatsEyebrow: 'Form factors',
      formatsTitle: 'Shared principles adapt to the working environment',
      formatsDescription: 'Each product keeps a distinct role. Portability, stationary expansion, and professional transport are not collapsed into one universal enclosure.',
      formats: [
        {
          slug: 'powerbox-2400',
          name: 'PowerBox 2400',
          context: 'Mobile work',
          description: 'A portable format with local status and a compact input concept for short-duration or temporary scenarios.'
        },
        {
          slug: 'homecore-5',
          name: 'HomeCore 5',
          context: 'Home and small business',
          description: 'A stationary modular concept where expansion and web monitoring support the home or office context.'
        },
        {
          slug: 'sitehub-10',
          name: 'SiteHub 10',
          context: 'Professional site',
          description: 'A wheeled professional format with greater capacity, higher output, and interfaces for longer working scenarios.'
        }
      ] satisfies TechnologyFormat[],
      boundariesEyebrow: 'Information boundaries',
      boundariesTitle: 'What this page deliberately does not explain',
      boundariesDescription: 'Real energy systems require verified components, documentation, and professional design. The educational site does not replace those processes.',
      boundaries: [
        'No wiring diagrams, installation steps, or repair instructions are provided.',
        'No certification, standards-compliance, or guaranteed service-life claim is made.',
        'No compatibility is guaranteed for a specific property, load, or solar system.',
        'No runtime calculation or equipment sizing is provided for a real installation.'
      ],
      ctaTitle: 'Compare how the principles appear across three formats',
      ctaDescription: 'Open the product portfolio or full matrix to compare illustrative specifications without marketing rankings.'
    },
    about: {
      eyebrow: 'About the project',
      title: 'An educational product site with a complete technical flow',
      description: 'MAXIBUD ENERGY demonstrates how to build a bilingual Nuxt 4 site for a concept product line, from content modeling and SSR to APIs, accessibility, and automated testing.',
      seoTitle: 'About the MAXIBUD ENERGY educational project',
      seoDescription: 'Purpose, architecture, technology stack, and boundaries of the MAXIBUD ENERGY educational software project.',
      identityEyebrow: 'Identity',
      identityTitle: 'A software project, not a manufacturer history',
      identityLead: 'MAXIBUD ENERGY is a fictional product line associated in this educational context with MAXIBUD LLC / ТОВ «МАКСІБУД».',
      identityParagraphs: [
        'The project was created as a practical demonstration of information architecture, content modeling, localization, server rendering, and quality verification.',
        'The site does not claim manufacturing facilities, employees, partners, markets, real customers, or a commercial history for the product line.'
      ],
      facts: [
        { value: '3', label: 'concept products' },
        { value: '2', label: 'localized versions' },
        { value: 'SSR', label: 'Nuxt server rendering' },
        { value: 'CI', label: 'automated verification' }
      ],
      capabilitiesEyebrow: 'Engineering value',
      capabilitiesTitle: 'What the implementation demonstrates',
      capabilitiesDescription: 'The project goes beyond a static landing page and shows a complete flow for data, routes, forms, and verification.',
      capabilities: [
        {
          id: 'content',
          title: 'Structured content and schemas',
          description: 'Product records, comparison values, specifications, and contact requests use typed models and Zod validation.'
        },
        {
          id: 'rendering',
          title: 'SSR, routes, and Nitro APIs',
          description: 'Nuxt 4 produces localized pages, dynamic product routes, SEO metadata, and server endpoints.'
        },
        {
          id: 'localization',
          title: 'Localization and accessibility',
          description: 'Ukrainian and English routes provide equivalent content, semantic structure, keyboard navigation, and accessible form states.'
        },
        {
          id: 'quality',
          title: 'Automated quality',
          description: 'ESLint, type checking, unit and Nuxt-runtime tests, production build, and Playwright E2E run in CI.'
        }
      ] satisfies AboutCapability[],
      scopeEyebrow: 'Project boundaries',
      scopeTitle: 'A deliberately limited demonstration scope',
      scopeDescription: 'The site presents concepts, supports comparison, and accepts a demonstration inquiry. It does not become a store, CRM, or hardware-control system.',
      scopeItems: [
        'No pricing, cart, payment, inventory, delivery, or real order workflow exists.',
        'No accounts, authentication, CRM, telemetry, firmware, or battery-management algorithms exist.',
        'No fabricated certificates, testimonials, awards, clients, partner logos, or manufacturing claims are used.',
        'The contact endpoint is a demonstration validation service without claims of real delivery or persistent storage.'
      ],
      processEyebrow: 'Working method',
      processTitle: 'From fact to interface',
      processSteps: [
        { title: 'Define truth boundaries', description: 'Every claim is classified as repository fact, project decision, concept product, or unknown.' },
        { title: 'Keep data structured', description: 'Specifications belong to products, interface labels belong to localization, and rules belong to schemas and contracts.' },
        { title: 'Verify behavior', description: 'Routes, 404s, responsive behavior, forms, locales, and accessibility receive automated coverage.' },
        { title: 'Record the state', description: 'Milestones, defects, design reviews, and the next action are documented in the repository.' }
      ],
      ctaTitle: 'Review the result as a visitor or inspect the product context',
      ctaDescription: 'The product catalog shows the complete user flow, while the legal page explains the educational and concept status.'
    }
  }
} as const

export function resolveInformationLocale(locale: string): InformationLocale {
  return locale === 'en' ? 'en' : 'uk'
}
