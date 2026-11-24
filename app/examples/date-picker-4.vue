<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { Temporal } from 'temporal-polyfill'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const today = Temporal.Now.plainDateISO()
const date = shallowRef<Temporal.PlainDate | null>(today)
const month = shallowRef(today.toPlainYearMonth())

const presets = [
  { label: 'Today', days: 0 },
  { label: 'Tomorrow', days: 1 },
  { label: 'In 3 days', days: 3 },
  { label: 'In a week', days: 7 },
]

function selectPreset(days: number): void {
  date.value = today.add({ days })
  month.value = date.value.toPlainYearMonth()
}
</script>

<template>
  <DatePicker v-model="date">
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ date ? date.toLocaleString('en-US', { dateStyle: 'long' }) : 'Pick a date' }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date">
      <div class="flex max-sm:flex-col">
        <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
          <div class="flex h-full flex-col sm:border-e sm:pe-3">
            <Button
              v-for="preset in presets"
              :key="preset.days"
              class="w-full justify-start"
              size="sm"
              variant="ghost"
              @click="selectPreset(preset.days)"
            >
              {{ preset.label }}
            </Button>
          </div>
        </div>
        <DatePickerCalendar v-model:month="month" class="max-sm:pb-3 sm:ps-2" />
      </div>
    </DatePickerPopup>
  </DatePicker>
</template>
