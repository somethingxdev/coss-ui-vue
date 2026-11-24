<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

type PopoverContentProps = ComponentProps<typeof PopoverPrimitive.Popup>
type PositionerProps = ComponentProps<typeof PopoverPrimitive.Positioner>

interface Props extends /* @vue-ignore */ PopoverContentProps {
  side?: PositionerProps['side']
  align?: PositionerProps['align']
  sideOffset?: number
  tooltipStyle?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  sideOffset: 4,
})
</script>

<template>
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner class="z-50" :align="props.align" :side="props.side" :side-offset="props.sideOffset">
      <PopoverPrimitive.Popup
        v-slot="{ state }"
        v-bind="$attrs"
        :class="cn(
          'relative flex max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] has-data-[slot=calendar]:rounded-xl has-data-[slot=calendar]:before:rounded-[calc(var(--radius-xl)-1px)] data-starting-style:scale-98 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.tooltipStyle && 'w-fit text-balance rounded-md text-xs shadow-md/5 before:rounded-[calc(var(--radius-md)-1px)]',
          props.class,
        )"
      >
        <div
          data-slot="popover-viewport"
          :class="cn(
            'relative size-full min-h-0 px-4 py-4 has-data-[slot=calendar]:p-2',
            props.tooltipStyle ? 'px-2 py-1' : 'overflow-y-auto',
          )"
        >
          <slot :state="state" />
        </div>
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
</template>
