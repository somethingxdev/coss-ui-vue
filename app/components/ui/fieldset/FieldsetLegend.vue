<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Fieldset as FieldPrimitive } from '@vase-ui/vue/fieldset'
import { cn } from '../../../lib/utils'

type FieldLegendProps = ComponentProps<typeof FieldPrimitive.Legend>

interface Props extends /* @vue-ignore */ FieldLegendProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Legend :class="cn('font-semibold text-foreground', props.class)">
    <slot />
  </FieldPrimitive.Legend>
</template>
