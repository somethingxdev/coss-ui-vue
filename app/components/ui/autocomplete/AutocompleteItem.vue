<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteItemProps = ComponentProps<typeof AutocompletePrimitive.Item>

interface Props extends /* @vue-ignore */ Omit<AutocompleteItemProps, 'value'> {
  value: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Item
    :value="props.value"
    :class="cn(
      'flex min-h-8 cursor-default select-none items-center rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm',
      props.class,
    )"
  >
    <slot />
  </AutocompletePrimitive.Item>
</template>
