<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="mt-20 bg-[#171b19] text-white">
    <UContainer class="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div class="max-w-xl">
        <p class="font-semibold tracking-tight">MAXIBUD ENERGY</p>
        <p class="mt-3 text-sm leading-6 text-white/65">
          {{ $t('footer.description') }}
        </p>
        <p class="mt-5 border-l-2 border-[#c8f43d] pl-4 text-sm leading-6 text-white/75">
          {{ $t('disclosure.full') }}
        </p>
      </div>

      <div>
        <h2 class="text-sm font-semibold">{{ $t('footer.products') }}</h2>
        <ul class="mt-4 space-y-3 text-sm text-white/65">
          <li><NuxtLink :to="localePath({ name: 'products-slug', params: { slug: 'powerbox-2400' } })" class="hover:text-white">PowerBox 2400</NuxtLink></li>
          <li><NuxtLink :to="localePath({ name: 'products-slug', params: { slug: 'homecore-5' } })" class="hover:text-white">HomeCore 5</NuxtLink></li>
          <li><NuxtLink :to="localePath({ name: 'products-slug', params: { slug: 'sitehub-10' } })" class="hover:text-white">SiteHub 10</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-semibold">{{ $t('footer.company') }}</h2>
        <ul class="mt-4 space-y-3 text-sm text-white/65">
          <li><NuxtLink :to="localePath('technology')" class="hover:text-white">{{ $t('nav.technology') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('about')" class="hover:text-white">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('contact')" class="hover:text-white">{{ $t('nav.contact') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('legal')" class="hover:text-white">{{ $t('nav.legal') }}</NuxtLink></li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>
