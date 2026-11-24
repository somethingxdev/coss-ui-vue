<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Accordion as AccordionPrimitive } from '@vase-ui/vue/accordion'

type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>

interface Props extends /* @vue-ignore */ AccordionProps {}

defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.Root>
    <slot />
  </AccordionPrimitive.Root>
</template>
