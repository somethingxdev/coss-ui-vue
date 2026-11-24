<script setup lang="ts">
import type { Temporal } from 'temporal-polyfill'
import { CalendarIcon } from '@lucide/vue'
import { computed, shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null] | null>(null)

const format = (date: Temporal.PlainDate) => date.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
const label = computed(() => range.value?.filter(date => date !== null).map(format).join(' – ') || 'Pick a date range')
</script>

<template>
  <DatePicker v-model="range" mode="range">
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ label }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date range">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
