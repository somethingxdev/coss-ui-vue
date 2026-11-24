<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxGroupProps = ComponentProps<typeof ComboboxPrimitive.Group>

interface Props extends /* @vue-ignore */ ComboboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Group :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot />
  </ComboboxPrimitive.Group>
</template>
