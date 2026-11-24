<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'
import { cn } from '../../../lib/utils'

type CollapsiblePanelProps = ComponentProps<typeof CollapsiblePrimitive.Panel>

interface Props extends /* @vue-ignore */ CollapsiblePanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Transition>
    <CollapsiblePrimitive.Panel
      :class="cn(
        'h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 motion-reduce:transition-none [&.v-leave-to]:h-0 [&.v-enter-from]:h-0',
        props.class,
      )"
    >
      <slot />
    </CollapsiblePrimitive.Panel>
  </Transition>
</template>
