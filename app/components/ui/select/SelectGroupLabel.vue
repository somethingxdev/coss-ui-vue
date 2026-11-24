<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

type SelectGroupLabelProps = ComponentProps<typeof SelectPrimitive.GroupLabel>

interface Props extends /* @vue-ignore */ SelectGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.GroupLabel :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </SelectPrimitive.GroupLabel>
</template>
