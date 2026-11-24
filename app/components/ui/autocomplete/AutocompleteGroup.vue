<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteGroupProps = ComponentProps<typeof AutocompletePrimitive.Group>

interface Props extends /* @vue-ignore */ AutocompleteGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Group :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot />
  </AutocompletePrimitive.Group>
</template>
