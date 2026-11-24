<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'

type ComboboxValueProps = ComponentProps<typeof ComboboxPrimitive.Value>

interface Props extends /* @vue-ignore */ ComboboxValueProps {
  placeholder?: string
}

const props = defineProps<Props>()

defineSlots<{
  // `value` is the selected value, or the list of them with `multiple`.
  default?: (props: { value: any }) => any
}>()
</script>

<template>
  <ComboboxPrimitive.Value v-slot="scope">
    <slot v-bind="scope">
      {{ Array.isArray(scope.value) ? scope.value.join(', ') : (scope.value ?? props.placeholder) }}
    </slot>
  </ComboboxPrimitive.Value>
</template>
