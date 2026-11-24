<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { NumberField as NumberFieldPrimitive } from '@vase-ui/vue/number-field'
import { computed, provide, useId } from 'vue'
import { cn } from '../../../lib/utils'
import { NumberFieldContext } from './context'

type NumberFieldRootProps = ComponentProps<typeof NumberFieldPrimitive.Root>

interface Props extends /* @vue-ignore */ NumberFieldRootProps {
  id?: string
  size?: 'sm' | 'default' | 'lg'
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const generatedId = useId()
const fieldId = computed(() => props.id ?? generatedId)

provide(NumberFieldContext, { fieldId })
</script>

<template>
  <NumberFieldPrimitive.Root
    v-bind="$attrs"
    :data-size="props.size"
    :class="cn('flex w-full flex-col items-start gap-2', props.class)"
  >
    <slot />
  </NumberFieldPrimitive.Root>
</template>
