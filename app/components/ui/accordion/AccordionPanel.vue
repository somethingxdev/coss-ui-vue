<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Accordion as AccordionPrimitive } from '@vase-ui/vue/accordion'
import { cn } from '../../../lib/utils'

type AccordionPanelProps = ComponentProps<typeof AccordionPrimitive.Panel>

interface Props extends /* @vue-ignore */ AccordionPanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Transition>
    <AccordionPrimitive.Panel
      class="h-(--accordion-panel-height) overflow-hidden text-muted-foreground text-sm transition-[height] duration-200 motion-reduce:transition-none ease-in-out [&.v-leave-to]:h-0 [&.v-enter-from]:h-0"
    >
      <div :class="cn('pt-0 pb-4', props.class)">
        <slot />
      </div>
    </AccordionPrimitive.Panel>
  </Transition>
</template>
