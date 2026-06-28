import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: [
    '.agents/**',
    'fit-practice-context-update.patch'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
})
