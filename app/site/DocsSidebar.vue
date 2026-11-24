<script setup lang="ts">
import { NuxtLink } from '#components'
import { ScrollArea } from '../components/ui/scroll-area'
import { docsNav } from './docs'
</script>

<template>
  <aside class="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] w-(--sidebar-width) shrink-0 lg:flex">
    <ScrollArea class="min-h-0 flex-1" fill overscroll-contain scroll-fade>
      <nav class="flex h-full flex-col gap-2 px-4 py-2" aria-label="Docs">
        <div class="h-(--top-spacing) shrink-0" />
        <div v-for="group in docsNav" :key="group.title" class="flex flex-col gap-1">
          <p class="flex h-7 items-center font-medium text-sidebar-accent-foreground text-xs">
            {{ group.title }}
          </p>
          <ul class="flex flex-col gap-0.5">
            <li v-for="item in group.items" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="relative flex w-full items-center rounded-lg p-2 ps-3.5 text-sidebar-foreground text-sm outline-none ring-sidebar-ring transition-colors hover:text-sidebar-accent-foreground focus-visible:ring-2 aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground aria-[current=page]:before:absolute aria-[current=page]:before:inset-y-2 aria-[current=page]:before:start-1 aria-[current=page]:before:w-0.5 aria-[current=page]:before:rounded-full aria-[current=page]:before:bg-brand"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </ScrollArea>
  </aside>
</template>
