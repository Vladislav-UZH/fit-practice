import type { MaybeRefOrGetter } from 'vue'

export function usePageSeo(
  title: MaybeRefOrGetter<string>,
  description: MaybeRefOrGetter<string>
) {
  const config = useRuntimeConfig()
  const route = useRoute()

  useSeoMeta({
    title: () => toValue(title),
    description: () => toValue(description),
    ogTitle: () => toValue(title),
    ogDescription: () => toValue(description),
    ogType: 'website'
  })

  useHead(() => ({
    link: [
      {
        rel: 'canonical',
        href: new URL(route.path, config.public.siteUrl).toString()
      }
    ]
  }))
}
