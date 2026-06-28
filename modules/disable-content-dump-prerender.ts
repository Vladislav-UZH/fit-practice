import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'disable-content-dump-prerender'
  },
  setup(_options, nuxt) {
    nuxt.hook('nitro:config', (config) => {
      for (const [route, rules] of Object.entries(config.routeRules ?? {})) {
        if (route.startsWith('/__nuxt_content/') && route.endsWith('/sql_dump.txt')) {
          rules.prerender = false
        }
      }

      if (config.prerender?.routes) {
        config.prerender.routes = config.prerender.routes.filter(
          route => !route || !(route.startsWith('/__nuxt_content/') && route.endsWith('/sql_dump.txt'))
        )
      }
    })
  }
})
