<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteContentProps = ComponentProps<typeof AutocompletePrimitive.Popup>
type PositionerProps = ComponentProps<typeof AutocompletePrimitive.Positioner>

interface Props extends /* @vue-ignore */ AutocompleteContentProps {
  align?: PositionerProps['align']
  sideOffset?: PositionerProps['sideOffset']
  alignOffset?: PositionerProps['alignOffset']
  side?: PositionerProps['side']
  anchor?: PositionerProps['anchor']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
})
</script>

<template>
  <AutocompletePrimitive.Portal>
    <AutocompletePrimitive.Positioner class="z-50" :align="props.align" :align-offset="props.alignOffset" :anchor="props.anchor" :side="props.side" :side-offset="props.sideOffset">
      <AutocompletePrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          'm-0 flex max-h-[min(var(--available-height),23rem)] min-w-[calc(var(--anchor-width)+2px)] max-w-(--available-width) origin-(--transform-origin) select-none flex-col overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <slot />
      </AutocompletePrimitive.Popup>
    </AutocompletePrimitive.Positioner>
  </AutocompletePrimitive.Portal>
</template>
