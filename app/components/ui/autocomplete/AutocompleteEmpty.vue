<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteEmptyProps = ComponentProps<typeof AutocompletePrimitive.Empty>

interface Props extends /* @vue-ignore */ AutocompleteEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Empty
    v-slot="slotProps"
    :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)"
  >
    <slot v-bind="slotProps" />
  </AutocompletePrimitive.Empty>
</template>
