<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { cn } from '../../../lib/utils'

type TabsPanelProps = ComponentProps<typeof TabsPrimitive.Panel>

interface Props extends /* @vue-ignore */ TabsPanelProps {
  value: TabsPanelProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.Panel
    :value="props.value"
    :class="cn('flex-1 outline-none', props.class)"
  >
    <slot />
  </TabsPrimitive.Panel>
</template>
