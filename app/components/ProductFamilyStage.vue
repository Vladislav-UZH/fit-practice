<script setup lang="ts">
interface StageProduct {
  name: string
  context: string
}

defineProps<{
  ariaLabel: string
  caption: string
  products: StageProduct[]
}>()
</script>

<template>
  <figure
    data-testid="product-family-stage"
    class="overflow-hidden border border-white/10 bg-[#171b19] text-white"
  >
    <div class="technical-grid relative aspect-[4/3] min-h-[20rem] overflow-hidden p-5 sm:p-8">
      <div class="relative z-10 flex items-center justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
        <span>{{ caption }}</span>
        <span aria-hidden="true">01 / 03</span>
      </div>

      <svg
        class="absolute inset-x-0 bottom-0 h-[88%] w-full"
        width="760"
        height="520"
        viewBox="0 0 760 520"
        role="img"
        :aria-label="ariaLabel"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="body-surface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#353c38" />
            <stop offset="1" stop-color="#1d221f" />
          </linearGradient>
          <linearGradient id="panel-surface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#49514c" />
            <stop offset="1" stop-color="#2b312e" />
          </linearGradient>
          <filter id="stage-shadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.35" />
          </filter>
        </defs>

        <ellipse cx="380" cy="472" rx="300" ry="22" fill="#070908" opacity="0.42" />

        <g filter="url(#stage-shadow)">
          <g transform="translate(50 242)">
            <rect x="18" y="26" width="214" height="154" rx="16" fill="url(#body-surface)" stroke="#5d665f" />
            <path d="M70 28V12C70 5 76 0 83 0h83c7 0 13 5 13 12v16" fill="none" stroke="#7d887f" stroke-width="12" stroke-linecap="round" />
            <rect x="42" y="54" width="86" height="46" rx="7" fill="#0c100e" stroke="#606a63" />
            <rect x="52" y="65" width="42" height="8" rx="4" fill="#c8f43d" />
            <rect x="147" y="56" width="58" height="88" rx="8" fill="#232925" stroke="#606a63" />
            <circle cx="163" cy="76" r="7" fill="#101411" stroke="#78837a" />
            <circle cx="189" cy="76" r="7" fill="#101411" stroke="#78837a" />
            <rect x="160" y="101" width="32" height="18" rx="4" fill="#101411" stroke="#78837a" />
            <rect x="38" y="176" width="36" height="8" rx="4" fill="#121613" />
            <rect x="176" y="176" width="36" height="8" rx="4" fill="#121613" />
          </g>

          <g transform="translate(316 82)">
            <rect x="20" y="16" width="148" height="344" rx="18" fill="url(#panel-surface)" stroke="#68736b" />
            <rect x="36" y="34" width="116" height="8" rx="4" fill="#c8f43d" />
            <rect x="43" y="67" width="102" height="232" rx="10" fill="#2b312e" stroke="#59625c" />
            <path d="M54 112h80M54 158h80M54 204h80M54 250h80" stroke="#59625c" stroke-width="2" opacity="0.7" />
            <circle cx="94" cy="326" r="7" fill="#c8f43d" />
            <rect x="56" y="354" width="76" height="9" rx="4.5" fill="#101411" />
          </g>

          <g transform="translate(526 148)">
            <rect x="18" y="18" width="174" height="274" rx="14" fill="url(#body-surface)" stroke="#68736b" />
            <path d="M42 20V4h126v16" fill="none" stroke="#7b867e" stroke-width="10" stroke-linecap="round" />
            <rect x="41" y="48" width="128" height="96" rx="8" fill="#262c28" stroke="#5f6962" />
            <rect x="52" y="61" width="62" height="11" rx="5.5" fill="#c8f43d" />
            <circle cx="144" cy="69" r="11" fill="#b42318" stroke="#f0a39a" stroke-width="3" />
            <rect x="43" y="167" width="124" height="84" rx="8" fill="#1f2521" stroke="#5f6962" />
            <path d="M59 185h92M59 205h92M59 225h92" stroke="#657068" stroke-width="3" stroke-linecap="round" />
            <path d="M18 262h174" stroke="#78837a" stroke-width="8" />
            <circle cx="52" cy="302" r="20" fill="#111512" stroke="#7d887f" stroke-width="6" />
            <circle cx="158" cy="302" r="20" fill="#111512" stroke="#7d887f" stroke-width="6" />
          </g>
        </g>
      </svg>
    </div>

    <figcaption class="grid grid-cols-3 border-t border-white/10">
      <div
        v-for="(product, index) in products"
        :key="product.name"
        class="min-w-0 border-r border-white/10 p-3 last:border-r-0 sm:p-4"
      >
        <p class="font-mono text-[0.625rem] text-[#c8f43d]">0{{ index + 1 }}</p>
        <p class="mt-1 truncate text-xs font-semibold sm:text-sm">{{ product.name }}</p>
        <p class="mt-1 text-[0.6875rem] leading-4 text-white/50 sm:text-xs">{{ product.context }}</p>
      </div>
    </figcaption>
  </figure>
</template>
