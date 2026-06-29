export type InformationLocale = 'uk' | 'en'

interface PrincipleItem {
  title: string
  description: string
}

interface TechnologyPageContent {
  eyebrow: string
  title: string
  description: string
  disclosure: string
  platformEyebrow: string
  platformTitle: string
  platformDescription: string
  principles: PrincipleItem[]
  architectureEyebrow: string
  architectureTitle: string
  architectureDescription: string
  architecture: Array<PrincipleItem & { label: string }>
  diagramLabel: string
  diagramTitle: string
  diagramDescription: string
  boundariesTitle: string
  boundaries: string[]
  ctaTitle: string
  ctaDescription: string
  productsAction: string
  compareAction: string
  seoTitle: string
  seoDescription: string
}

interface AboutPageContent {
  eyebrow: string
  title: string
  description: string
  disclosure: string
  projectEyebrow: string
  projectTitle: string
  projectParagraphs: string[]
  goalsTitle: string
  goals: PrincipleItem[]
  stackEyebrow: string
  stackTitle: string
  stackDescription: string
  stack: string[]
  qualityEyebrow: string
  qualityTitle: string
  quality: PrincipleItem[]
  boundariesTitle: string
  boundaries: string[]
  ctaTitle: string
  ctaDescription: string
  productsAction: string
  contactAction: string
  seoTitle: string
  seoDescription: string
}

export const technologyPageContent: Record<InformationLocale, TechnologyPageContent> = {
  uk: {
    eyebrow: 'Технологічна концепція',
    title: 'Спільні принципи платформи без вигаданих інженерних обіцянок',
    description: 'Сторінка пояснює, як концептуальна лінійка MAXIBUD ENERGY організована на рівні хімії накопичення, форм-фактора та відображення стану.',
    disclosure: 'Матеріал описує навчальну концепцію портфеля. Він не є схемою підключення, інструкцією з монтажу, ремонту або проєктування електросистеми.',
    platformEyebrow: 'Спільна основа',
    platformTitle: 'Одна логіка портфеля, три окремі реалізації',
    platformDescription: 'Спільність продуктів обмежується узгодженими концептуальними принципами. Корпус, спосіб переміщення, підхід до заряджання та інтерфейс стану залежать від робочого контексту.',
    principles: [
      {
        title: 'LiFePO4 як навчальна основа',
        description: 'Усі три формати використовують спільну концепцію літій-залізо-фосфатного накопичення без заяв про сертифікований ресурс, гарантію або комерційну реалізацію.'
      },
      {
        title: 'Архітектура визначається форм-фактором',
        description: 'Переносний, стаціонарний модульний і колісний професійний формати не подаються як однакова електрична конструкція.'
      },
      {
        title: 'Моніторинг відповідає сценарію',
        description: 'Локальний дисплей і вебмоніторинг показані як різні концепції взаємодії, а не як підтверджений єдиний протокол або контролер.'
      }
    ],
    architectureEyebrow: 'Три формати',
    architectureTitle: 'Різні робочі контексти змінюють реалізацію',
    architectureDescription: 'Портфель порівнює продукти за призначенням, місткістю, потужністю та способом розміщення, але не перетворює ці відмінності на рейтинг.',
    architecture: [
      {
        label: '01',
        title: 'PowerBox 2400',
        description: 'Переносний концепт для мобільної роботи та тимчасових робочих зон.'
      },
      {
        label: '02',
        title: 'HomeCore 5',
        description: 'Стаціонарний модульний концепт для дому та малого офісу.'
      },
      {
        label: '03',
        title: 'SiteHub 10',
        description: 'Колісний професійний концепт для будівельного майданчика або мобільної майстерні.'
      }
    ],
    diagramLabel: 'Концептуальна схема: спільна LiFePO4-основа переходить у три різні форм-фактори та окремі підходи до відображення стану',
    diagramTitle: 'Портфельна схема, не електрична схема',
    diagramDescription: 'Лінії показують логічний зв’язок між спільною концепцією та трьома продуктовими форматами. Вони не описують проводку, контакти, напругу або послідовність складання.',
    boundariesTitle: 'Що навмисно не стверджується',
    boundaries: [
      'наявність єдиного підтвердженого контролера, інвертора, BMS або протоколу зв’язку;',
      'сертифікація, гарантований строк служби, сумісність чи придатність до конкретного об’єкта;',
      'інструкції з монтажу, електричного підключення, ремонту або технічного обслуговування;',
      'ціна, складські залишки, строки постачання або комерційна доступність.'
    ],
    ctaTitle: 'Порівняйте формати за структурованими даними',
    ctaDescription: 'Перейдіть до продуктової лінійки або повної матриці, де концептуальні значення подані без рейтингів і декоративних оцінок.',
    productsAction: 'Переглянути продукти',
    compareAction: 'Відкрити порівняння',
    seoTitle: 'Технологічна концепція MAXIBUD ENERGY',
    seoDescription: 'Огляд спільних концептуальних принципів, трьох форм-факторів і меж технічних тверджень MAXIBUD ENERGY.'
  },
  en: {
    eyebrow: 'Technology concept',
    title: 'Shared platform principles without invented engineering promises',
    description: 'This page explains how the conceptual MAXIBUD ENERGY portfolio is organized around storage chemistry, form factor, and status presentation.',
    disclosure: 'The material describes an educational portfolio concept. It is not a wiring diagram, installation guide, repair manual, or electrical-system design.',
    platformEyebrow: 'Shared foundation',
    platformTitle: 'One portfolio logic, three separate implementations',
    platformDescription: 'The products share only approved conceptual principles. Enclosure, mobility, charging approach, and status interface vary with the working context.',
    principles: [
      {
        title: 'LiFePO4 as an educational foundation',
        description: 'All three formats use a shared lithium iron phosphate storage concept without claims about certified lifetime, warranty, or commercial implementation.'
      },
      {
        title: 'Architecture follows the form factor',
        description: 'Portable, stationary modular, and wheeled professional formats are not presented as one identical electrical construction.'
      },
      {
        title: 'Monitoring follows the scenario',
        description: 'Local displays and web monitoring are shown as different interaction concepts, not as one verified protocol or controller.'
      }
    ],
    architectureEyebrow: 'Three formats',
    architectureTitle: 'Different working contexts change the implementation',
    architectureDescription: 'The portfolio compares purpose, capacity, output, and placement without turning those differences into a ranking.',
    architecture: [
      {
        label: '01',
        title: 'PowerBox 2400',
        description: 'A portable concept for mobile work and temporary work zones.'
      },
      {
        label: '02',
        title: 'HomeCore 5',
        description: 'A stationary modular concept for homes and small offices.'
      },
      {
        label: '03',
        title: 'SiteHub 10',
        description: 'A wheeled professional concept for construction sites or mobile workshops.'
      }
    ],
    diagramLabel: 'Concept diagram: a shared LiFePO4 foundation leads to three form factors and separate status approaches',
    diagramTitle: 'A portfolio diagram, not an electrical diagram',
    diagramDescription: 'The lines show the logical relationship between the shared concept and three product formats. They do not describe wiring, contacts, voltage, or assembly order.',
    boundariesTitle: 'Claims intentionally not made',
    boundaries: [
      'one verified controller, inverter, BMS, or communications protocol across the portfolio;',
      'certification, guaranteed lifetime, compatibility, or suitability for a specific site;',
      'installation, electrical connection, repair, or maintenance instructions;',
      'price, stock, delivery schedule, or commercial availability.'
    ],
    ctaTitle: 'Compare the formats through structured data',
    ctaDescription: 'Continue to the product portfolio or full matrix, where conceptual values are presented without rankings or decorative scores.',
    productsAction: 'View products',
    compareAction: 'Open comparison',
    seoTitle: 'MAXIBUD ENERGY technology concept',
    seoDescription: 'An overview of shared conceptual principles, three form factors, and the boundaries of MAXIBUD ENERGY technical claims.'
  }
}

export const aboutPageContent: Record<InformationLocale, AboutPageContent> = {
  uk: {
    eyebrow: 'Про навчальний проєкт',
    title: 'Двомовна інформаційна вебсистема для концептуальної продуктової лінійки',
    description: 'MAXIBUD ENERGY використовується як навчальний контекст для демонстрації архітектури Nuxt-застосунку, структурованого контенту, доступності та автоматизованої перевірки якості.',
    disclosure: 'Сторінка описує програмний проєкт. Вона не підтверджує історію компанії, штат, виробничі потужності, партнерів, ринки збуту або реальний випуск обладнання.',
    projectEyebrow: 'Контекст',
    projectTitle: 'Що саме було розроблено',
    projectParagraphs: [
      'У межах проєкту створено серверно-рендерений вебзастосунок для презентації трьох концептуальних форматів систем резервного живлення. Українська та англійська версії використовують спільну структуру маршрутів і локалізований контент.',
      'Продуктові записи зберігають опис, сценарії застосування, порівняльні значення та групи специфікацій. Серверні маршрути Nitro повертають валідовані записи, а спільні Zod-схеми обмежують допустиму форму даних.',
      'Інтерфейс містить головну сторінку, каталог, повну матрицю порівняння, сторінки продуктів, технологічний розділ, правові розкриття та демонстраційний контактний потік.'
    ],
    goalsTitle: 'Цілі розроблення',
    goals: [
      {
        title: 'Структурований продуктовий контент',
        description: 'Відокремити факти продуктів від компонентів інтерфейсу та повторно використовувати їх у каталозі, порівнянні й деталях.'
      },
      {
        title: 'Двомовність і серверний рендеринг',
        description: 'Забезпечити локалізовані маршрути, метадані та HTML, придатний для первинного завантаження без клієнтського JavaScript.'
      },
      {
        title: 'Доступність і адаптивність',
        description: 'Зберегти семантичну структуру, клавіатурну взаємодію, видимий фокус і стабільність на вузькому екрані.'
      },
      {
        title: 'Перевірювана якість',
        description: 'Автоматизувати lint, typecheck, компонентні, Nuxt runtime, API та Playwright E2E-перевірки.'
      }
    ],
    stackEyebrow: 'Технічна основа',
    stackTitle: 'Стек, використаний у застосунку',
    stackDescription: 'Кожен інструмент використовується для конкретної частини архітектури, а не додається заради довгого списку логотипів.',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Nitro', 'Nuxt Content', 'Nuxt i18n', 'Nuxt UI', 'Zod', 'Vitest', 'Playwright', 'GitHub Actions'],
    qualityEyebrow: 'Контроль якості',
    qualityTitle: 'Перевірки охоплюють поведінку, а не лише збірку',
    quality: [
      {
        title: 'Контент і схеми',
        description: 'Zod перевіряє локалі, slug, продуктову структуру, статуси значень і контактні запити.'
      },
      {
        title: 'Компоненти та Nuxt runtime',
        description: 'Тести перевіряють семантику, маршрути, стани інтерфейсу, локалізацію та узгодженість даних.'
      },
      {
        title: 'Браузерні сценарії',
        description: 'Playwright перевіряє українські й англійські маршрути, клавіатурну взаємодію, 404, контактний потік і відсутність горизонтального overflow на 320 px.'
      }
    ],
    boundariesTitle: 'Межі достовірних тверджень',
    boundaries: [
      'MAXIBUD ENERGY є концептуальною продуктовою лінійкою в межах навчального програмного проєкту;',
      'характеристики є ілюстративними та не описують сертифіковане серійне обладнання;',
      'контактний endpoint демонструє валідацію й технічну відповідь без заяв про реальну доставку або постійне зберігання;',
      'сторінка не приписує ТОВ «МАКСІБУД» непідтверджених працівників, заводи, партнерства, географію продажів або виробничу історію.'
    ],
    ctaTitle: 'Перейдіть від контексту до реалізованих сценаріїв',
    ctaDescription: 'Перегляньте продуктові сторінки або відкрийте демонстраційний контактний потік.',
    productsAction: 'Переглянути продукти',
    contactAction: 'Відкрити контакти',
    seoTitle: 'Про навчальний проєкт MAXIBUD ENERGY',
    seoDescription: 'Архітектура, цілі, технологічний стек і межі тверджень двомовного навчального Nuxt-застосунку MAXIBUD ENERGY.'
  },
  en: {
    eyebrow: 'About the educational project',
    title: 'A bilingual information website for a conceptual product portfolio',
    description: 'MAXIBUD ENERGY is used as an educational context for demonstrating Nuxt application architecture, structured content, accessibility, and automated quality checks.',
    disclosure: 'This page describes the software project. It does not verify company history, staff, manufacturing capacity, partners, markets, or real equipment production.',
    projectEyebrow: 'Context',
    projectTitle: 'What was developed',
    projectParagraphs: [
      'The project implements a server-rendered web application for presenting three conceptual backup-power formats. Ukrainian and English versions share the same route structure and use localized content.',
      'Product records contain descriptions, intended applications, comparison values, and grouped specifications. Nitro server routes return validated records, while shared Zod schemas constrain the accepted data shape.',
      'The interface includes a homepage, catalogue, full comparison matrix, product detail pages, technology content, legal disclosures, and a demonstration contact flow.'
    ],
    goalsTitle: 'Development goals',
    goals: [
      {
        title: 'Structured product content',
        description: 'Separate product facts from interface components and reuse them across the catalogue, comparison, and detail routes.'
      },
      {
        title: 'Bilingual SSR delivery',
        description: 'Provide localized routes, metadata, and HTML that remains meaningful during the initial server response.'
      },
      {
        title: 'Accessibility and responsive behavior',
        description: 'Preserve semantic structure, keyboard interaction, visible focus, and stability on a narrow viewport.'
      },
      {
        title: 'Verifiable quality',
        description: 'Automate lint, type checking, component, Nuxt runtime, API, and Playwright E2E checks.'
      }
    ],
    stackEyebrow: 'Technical foundation',
    stackTitle: 'Technology used by the application',
    stackDescription: 'Each tool serves a defined architectural purpose rather than existing merely to lengthen a logo list.',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Nitro', 'Nuxt Content', 'Nuxt i18n', 'Nuxt UI', 'Zod', 'Vitest', 'Playwright', 'GitHub Actions'],
    qualityEyebrow: 'Quality control',
    qualityTitle: 'Checks cover behavior, not only compilation',
    quality: [
      {
        title: 'Content and schemas',
        description: 'Zod validates locales, slugs, product structures, value states, and contact requests.'
      },
      {
        title: 'Components and Nuxt runtime',
        description: 'Tests verify semantics, routes, interface states, localization, and data consistency.'
      },
      {
        title: 'Browser scenarios',
        description: 'Playwright covers Ukrainian and English routes, keyboard interaction, 404 handling, the contact flow, and the absence of horizontal overflow at 320 px.'
      }
    ],
    boundariesTitle: 'Boundaries of verified claims',
    boundaries: [
      'MAXIBUD ENERGY is a conceptual product portfolio inside an educational software project;',
      'specifications are illustrative and do not describe certified production equipment;',
      'the contact endpoint demonstrates validation and a technical response without claiming real delivery or permanent storage;',
      'the page does not attribute unverified employees, factories, partnerships, sales regions, or manufacturing history to MAXIBUD LLC.'
    ],
    ctaTitle: 'Continue from context to implemented scenarios',
    ctaDescription: 'Review the product pages or open the demonstration contact flow.',
    productsAction: 'View products',
    contactAction: 'Open contact page',
    seoTitle: 'About the MAXIBUD ENERGY educational project',
    seoDescription: 'Architecture, goals, technology stack, and claim boundaries of the bilingual educational MAXIBUD ENERGY Nuxt application.'
  }
}
