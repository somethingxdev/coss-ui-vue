<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { PreviewCard as PreviewCardPrimitive } from '@vase-ui/vue/preview-card'
import { cn } from '../../../lib/utils'

type HoverCardContentProps = ComponentProps<typeof PreviewCardPrimitive.Popup>
type PositionerProps = ComponentProps<typeof PreviewCardPrimitive.Positioner>

interface Props extends /* @vue-ignore */ HoverCardContentProps {
  align?: PositionerProps['align']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  sideOffset: 4,
})
</script>

<template>
  <PreviewCardPrimitive.Portal>
    <PreviewCardPrimitive.Positioner class="z-50" :align="props.align" :side-offset="props.sideOffset">
      <PreviewCardPrimitive.Popup
        v-slot="{ state }"
        v-bind="$attrs"
        :class="cn(
          'relative flex w-64 origin-(--transform-origin) overflow-visible text-balance rounded-lg border bg-popover not-dark:bg-clip-padding p-4 text-popover-foreground text-sm shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <slot :state="state" />
      </PreviewCardPrimitive.Popup>
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
</template>
