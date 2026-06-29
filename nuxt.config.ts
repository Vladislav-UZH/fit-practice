export default defineNuxtConfig({
  compatibilityDate: '2026-06-28',
  devtools: {
    enabled: process.env.NODE_ENV === 'development' && !process.env.CI
  },
  experimental: { typedPages: true },
  ssr: true,

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    './modules/disable-content-dump-prerender'
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },

  ui: {
    colorMode: false,
    fonts: false,
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      defaultVariants: {
        size: 'md'
      }
    }
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    defaultLocale: 'uk',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'uk',
        language: 'uk-UA',
        name: 'Українська',
        file: 'uk.json'
      },
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json'
      }
    ]
  },

  image: {
    format: ['avif', 'webp'],
    quality: 82
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})
