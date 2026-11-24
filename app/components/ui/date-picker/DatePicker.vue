<script setup lang="ts">
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { DateRangePicker } from '@vase-ui/vue/date-range-picker'
import { provide } from 'vue'
import { datePickerModeKey } from './context'
import 'temporal-polyfill/global'

const props = defineProps<{ mode?: 'single' | 'range' }>()
provide(datePickerModeKey, () => props.mode === 'range')
</script>

<template>
  <component :is="props.mode === 'range' ? DateRangePicker.Root : DatePickerPrimitive.Root">
    <slot />
  </component>
</template>
