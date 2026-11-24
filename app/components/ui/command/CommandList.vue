<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

type CommandListProps = CommandPrimitive.List.Props

interface Props extends /* @vue-ignore */ CommandListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
const items = CommandPrimitive.useFilteredItems()
</script>

<template>
  <!-- flex: the viewport shrinks to the popup's max height, which `h-full` alone can't resolve. -->
  <ScrollArea class="flex flex-col" overscroll-contain scrollbar-gutter scroll-fade>
    <CommandPrimitive.List
      data-slot="command-list"

      v-bind="$attrs"
      :class="cn('not-empty:scroll-py-2 not-empty:p-2 in-data-overflow-y:pe-3', props.class)"
    >
      <slot :items="items" />
    </CommandPrimitive.List>
  </ScrollArea>
</template>
