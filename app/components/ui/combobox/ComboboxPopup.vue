<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { inject, provide } from 'vue'
import { cn } from '../../../lib/utils'
import { ComboboxContext, ComboboxPopupContext } from './context'

type ComboboxContentProps = ComponentProps<typeof ComboboxPrimitive.Popup>
type PositionerProps = ComponentProps<typeof ComboboxPrimitive.Positioner>

interface Props extends /* @vue-ignore */ ComboboxContentProps {
  align?: PositionerProps['align']
  sideOffset?: PositionerProps['sideOffset']
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

const context = inject(ComboboxContext, null)

provide(ComboboxPopupContext, true)
</script>

<template>
  <ComboboxPrimitive.Portal>
    <ComboboxPrimitive.Positioner class="z-50" :align="props.align" :anchor="props.anchor ?? context?.anchorRef.value ?? undefined" :side="props.side" :side-offset="props.sideOffset">
      <ComboboxPrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          'm-0 flex max-h-[min(var(--available-height),23rem)] min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) select-none flex-col overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <slot />
      </ComboboxPrimitive.Popup>
    </ComboboxPrimitive.Positioner>
  </ComboboxPrimitive.Portal>
</template>
