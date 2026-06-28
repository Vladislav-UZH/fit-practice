<template>
  <div class="min-h-screen bg-[#f3f2ed] text-[#111412]">
    <a
      href="#main-content"
      class="sr-only z-50 rounded-md bg-white px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {{ $t('a11y.skipToContent') }}
    </a>

    <SiteHeader />

    <main id="main-content">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
