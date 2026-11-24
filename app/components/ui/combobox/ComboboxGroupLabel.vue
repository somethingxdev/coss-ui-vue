<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxGroupLabelProps = ComponentProps<typeof ComboboxPrimitive.GroupLabel>

interface Props extends /* @vue-ignore */ ComboboxGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.GroupLabel :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </ComboboxPrimitive.GroupLabel>
</template>
