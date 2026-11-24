<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { NumberField as NumberFieldPrimitive } from '@vase-ui/vue/number-field'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { NumberFieldContext } from './context'

type NumberFieldScrubAreaProps = ComponentProps<typeof NumberFieldPrimitive.ScrubArea>

interface Props extends /* @vue-ignore */ NumberFieldScrubAreaProps {
  label: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(NumberFieldContext, null)

if (!context) {
  throw new Error('NumberFieldScrubArea must be used within a NumberField component for accessibility.')
}

const { fieldId } = context
</script>

<template>
  <NumberFieldPrimitive.ScrubArea :class="cn('flex cursor-ew-resize', props.class)">
    <label class="cursor-ew-resize" :for="fieldId">
      {{ props.label }}
    </label>
  </NumberFieldPrimitive.ScrubArea>
</template>
