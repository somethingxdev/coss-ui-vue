<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteStatusProps = ComponentProps<typeof AutocompletePrimitive.Status>

interface Props extends /* @vue-ignore */ AutocompleteStatusProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Status
    v-slot="slotProps"
    :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)"
  >
    <slot v-bind="slotProps" />
  </AutocompletePrimitive.Status>
</template>
