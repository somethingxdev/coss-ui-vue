<script setup lang="ts">
import type { ComponentDoc } from './types'
import { NuxtLink } from '#components'
import CategoryThumbnail from './thumbnails/CategoryThumbnail.vue'

const props = defineProps<{
  doc: ComponentDoc
}>()
</script>

<template>
  <article class="relative rounded-2xl border bg-card w-full after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-xl)+4px)] after:border after:border-border/64">
    <header class="p-4 static grid grid-rows-[auto_1fr]">
      <div class="font-bold font-heading text-base [font-variation-settings:'GEOM'_50,'opsz'_32]">
        <h2>
          <NuxtLink class="outline-none before:absolute before:inset-0 before:rounded-2xl focus-visible:before:ring-2 focus-visible:before:ring-ring" :to="`/docs/components/${props.doc.slug}`">
            {{ props.doc.title }}
          </NuxtLink>
        </h2>
      </div>
      <p class="text-sm text-muted-foreground line-clamp-2 sm:h-[2lh]">
        {{ props.doc.description }}
      </p>
    </header>
    <div aria-hidden="true" class="flex rounded-xl border pointer-events-none min-h-55 flex-1 flex-col flex-wrap overflow-x-auto bg-[color-mix(in_srgb,var(--color-card),var(--color-sidebar))] dark:bg-background">
      <div class="w-full flex flex-1 items-center justify-center px-8 [--border:--alpha(var(--color-black)/7%)] [--btn-from:--alpha(var(--color-primary)/90%)] [--btn-to:var(--color-primary)] in-[[data-slot=card-frame]:has(a:not(:hover))]:*:translate-y-0.5 *:transition-transform *:duration-200 dark:[--border:--alpha(var(--color-white)/3%)] dark:[--btn-from:var(--color-primary)] dark:[--btn-to:--alpha(var(--color-primary)/90%)]">
        <CategoryThumbnail :slug="props.doc.slug" />
      </div>
    </div>
  </article>
</template>
