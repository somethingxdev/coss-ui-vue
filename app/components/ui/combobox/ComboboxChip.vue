<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'
import ComboboxChipRemove from './ComboboxChipRemove.vue'

type ComboboxChipProps = ComponentProps<typeof ComboboxPrimitive.Chip>
type ComboboxChipRemoveProps = InstanceType<typeof ComboboxChipRemove>['$props']

interface Props extends /* @vue-ignore */ Omit<ComboboxChipProps, 'value'> {
  value: unknown
  label?: string
  removeProps?: ComboboxChipRemoveProps
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Chip
    :value="props.value"
    :class="cn(
      `flex items-center rounded-[calc(var(--radius-md)-1px)] bg-accent ps-2 font-medium text-accent-foreground text-sm outline-none sm:text-xs/(--text-xs--line-height) [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
      props.class,
    )"
  >
    <slot>{{ props.label ?? String(props.value) }}</slot>
    <ComboboxChipRemove :aria-label="`Remove ${props.label ?? String(props.value)}`" v-bind="props.removeProps" />
  </ComboboxPrimitive.Chip>
</template>
