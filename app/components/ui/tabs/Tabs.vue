<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { cn } from '../../../lib/utils'

type TabsRootProps = ComponentProps<typeof TabsPrimitive.Root>

interface Props extends /* @vue-ignore */ TabsRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.Root
    :class="cn('flex flex-col gap-2 data-[orientation=vertical]:flex-row', props.class)"
  >
    <slot />
  </TabsPrimitive.Root>
</template>
