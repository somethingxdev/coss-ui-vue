<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

type ComboboxListProps = ComponentProps<typeof ComboboxPrimitive.List>

interface Props extends /* @vue-ignore */ ComboboxListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
defineSlots<{
  default?: () => any
  // Called once per visible entry of the root's `items`: an item, a group or a separator.
  item?: (props: { item: any }) => any
}>()

const items = ComboboxPrimitive.useFilteredItems()
</script>

<template>
  <!-- The popup only has a max height, so the viewport's `h-full` resolves to nothing: it shrinks as a flex item instead. -->
  <ScrollArea
    class="flex flex-col *:data-[slot=scroll-area-viewport]:min-h-0"
    overscroll-contain
    scrollbar-gutter
    scroll-fade
  >
    <ComboboxPrimitive.List
      v-bind="$attrs"
      :class="cn('not-empty:scroll-py-1 not-empty:px-1 not-empty:py-1 in-data-overflow-y:pe-3', props.class)"
    >
      <template v-if="$slots.item">
        <template v-for="item in (items as any[])" :key="item?.value ?? item">
          <slot name="item" :item="item" />
        </template>
      </template>
      <slot />
    </ComboboxPrimitive.List>
  </ScrollArea>
</template>
