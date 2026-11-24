<script setup lang="ts">
import type { CalendarBaseProps, CalendarDaySlotProps } from '../calendar/CalendarBase.vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { DateRangePicker } from '@vase-ui/vue/date-range-picker'
import CalendarBase from '../calendar/CalendarBase.vue'
import { useDatePickerRange } from './context'

interface Props extends /* @vue-ignore */ CalendarBaseProps {}

defineProps<Props>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
const isRange = useDatePickerRange()
</script>

<template>
  <CalendarBase :root="isRange() ? DateRangePicker.Calendar : DatePickerPrimitive.Calendar">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
