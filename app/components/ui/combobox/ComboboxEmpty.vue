<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxEmptyProps = ComponentProps<typeof ComboboxPrimitive.Empty>

interface Props extends /* @vue-ignore */ ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Empty :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)">
    <slot />
  </ComboboxPrimitive.Empty>
</template>
