<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'
import { cn } from '../../../lib/utils'

type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Popup>
type PositionerProps = ComponentProps<typeof TooltipPrimitive.Positioner>

interface Props extends /* @vue-ignore */ TooltipContentProps {
  align?: PositionerProps['align']
  side?: PositionerProps['side']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  side: 'top',
  sideOffset: 4,
})
</script>

<template>
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Positioner class="z-50" :align="props.align" :side="props.side" :side-offset="props.sideOffset">
      <Transition>
        <TooltipPrimitive.Popup
          v-slot="{ state }"
          v-bind="$attrs"
          :class="cn(
            'relative max-w-(--available-width) origin-(--transform-origin) overflow-visible text-balance rounded-md border bg-popover not-dark:bg-clip-padding px-2 py-1 text-popover-foreground text-xs shadow-md/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] motion-safe:[&.v-leave-to]:scale-98 motion-safe:[&.v-enter-from]:scale-98 [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 data-instant:duration-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
            props.class,
          )"
        >
          <slot :state="state" />
        </TooltipPrimitive.Popup>
      </Transition>
    </TooltipPrimitive.Positioner>
  </TooltipPrimitive.Portal>
</template>
