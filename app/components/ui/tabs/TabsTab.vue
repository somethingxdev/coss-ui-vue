<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import type { TabsSize } from './variants'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { computed, inject } from 'vue'
import { cn } from '../../../lib/utils'
import { TabsListContext } from './context'
import { tabsItemLayoutClassName, tabsItemSizeClassNames } from './variants'

type TabsTabProps = ComponentProps<typeof TabsPrimitive.Tab>

interface Props extends /* @vue-ignore */ TabsTabProps {
  size?: TabsSize
  value: TabsTabProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const list = inject(TabsListContext, { size: 'default' } as const)
const resolvedSize = computed(() => props.size ?? list.size)
</script>

<template>
  <TabsPrimitive.Tab
    :value="props.value"
    :data-size="resolvedSize"
    :class="cn(
      'relative flex shrink-0 grow cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-transparent font-medium text-base outline-none transition-[color,background-color,box-shadow] not-aria-selected:hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start aria-selected:text-foreground data-disabled:opacity-64 sm:text-sm',
      tabsItemLayoutClassName,
      tabsItemSizeClassNames[resolvedSize],
      props.class,
    )"
  >
    <slot />
  </TabsPrimitive.Tab>
</template>
