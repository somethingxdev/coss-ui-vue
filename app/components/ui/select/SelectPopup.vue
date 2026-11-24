<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { ChevronDownIcon, ChevronUpIcon } from '@lucide/vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

type SelectContentProps = ComponentProps<typeof SelectPrimitive.Popup>
type PositionerProps = ComponentProps<typeof SelectPrimitive.Positioner>

interface Props extends /* @vue-ignore */ SelectContentProps {
  side?: PositionerProps['side']
  sideOffset?: PositionerProps['sideOffset']
  align?: PositionerProps['align']
  alignOffset?: PositionerProps['alignOffset']
  alignItemWithTrigger?: PositionerProps['alignItemWithTrigger']
  anchor?: PositionerProps['anchor']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
  alignOffset: 0,
  alignItemWithTrigger: true,
})
</script>

<template>
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner data-slot="select-positioner" class="z-50 select-none" :align="props.align" :align-item-with-trigger="props.alignItemWithTrigger" :align-offset="props.alignOffset" :anchor="props.anchor" :side="props.side" :side-offset="props.sideOffset">
      <SelectPrimitive.Popup
        data-slot="select-popup"
        v-bind="$attrs"
        class="relative m-0 flex max-h-(--available-height) origin-(--transform-origin) flex-col overflow-visible border-0 bg-transparent p-0 text-foreground outline-none"
      >
        <SelectPrimitive.ScrollUpArrow
          data-slot="select-scroll-up-arrow"
          class="top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover"
        >
          <ChevronUpIcon class="relative size-4.5 sm:size-4" />
        </SelectPrimitive.ScrollUpArrow>
        <div class="relative flex min-h-0 min-w-(--anchor-width) flex-1 flex-col rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]">
          <SelectPrimitive.List data-slot="select-list" :class="cn('min-h-0 overflow-y-auto p-1', props.class)">
            <slot />
          </SelectPrimitive.List>
        </div>
        <SelectPrimitive.ScrollDownArrow
          data-slot="select-scroll-down-arrow"
          class="bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover"
        >
          <ChevronDownIcon class="relative size-4.5 sm:size-4" />
        </SelectPrimitive.ScrollDownArrow>
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
</template>
