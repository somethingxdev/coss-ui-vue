<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Accordion as AccordionPrimitive } from '@vase-ui/vue/accordion'
import { cn } from '../../../lib/utils'

type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>

interface Props extends /* @vue-ignore */ AccordionItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.Item :class="cn('border-b last:border-b-0', props.class)">
    <slot />
  </AccordionPrimitive.Item>
</template>
