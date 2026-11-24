<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { PlusIcon } from '@lucide/vue'
import { NumberField as NumberFieldPrimitive } from '@vase-ui/vue/number-field'
import { cn } from '../../../lib/utils'

type NumberFieldIncrementProps = ComponentProps<typeof NumberFieldPrimitive.Increment>

interface Props extends /* @vue-ignore */ NumberFieldIncrementProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NumberFieldPrimitive.Increment
    aria-label="Increase"
    :class="cn(
      'relative flex shrink-0 cursor-pointer items-center justify-center rounded-e-[calc(var(--radius-lg)-1px)] in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent',
      props.class,
    )"
  >
    <PlusIcon />
  </NumberFieldPrimitive.Increment>
</template>
