<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

type FieldLabelProps = ComponentProps<typeof FieldPrimitive.Label>

interface Props extends /* @vue-ignore */ FieldLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Label
    :class="cn(
      'inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground data-disabled:opacity-64 sm:text-sm/4',
      props.class,
    )"
  >
    <slot />
  </FieldPrimitive.Label>
</template>
