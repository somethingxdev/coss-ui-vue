<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'

type AutocompleteTriggerProps = ComponentProps<typeof AutocompletePrimitive.Trigger>

interface Props extends /* @vue-ignore */ AutocompleteTriggerProps {}

defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger">
    <slot />
  </AutocompletePrimitive.Trigger>
</template>
