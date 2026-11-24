<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import type { SelectTriggerVariants } from './variants'
import { ChevronsUpDownIcon } from '@lucide/vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'
import { selectTriggerIconClassName, selectTriggerVariants } from './variants'

type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>

interface Props extends /* @vue-ignore */ SelectTriggerProps {
  size?: SelectTriggerVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <SelectPrimitive.Trigger data-slot="select-trigger" :class="cn(selectTriggerVariants({ size: props.size }), props.class)">
    <slot />
    <ChevronsUpDownIcon data-slot="select-icon" :class="selectTriggerIconClassName" />
  </SelectPrimitive.Trigger>
</template>
