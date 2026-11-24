---
preview: date-picker-1
---

## Usage

```ts
import type { Temporal } from 'temporal-polyfill'
import { CalendarIcon } from '@lucide/vue'
import { shallowRef } from 'vue'

import { Button } from '@/components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '@/components/ui/date-picker'
```

```vue
<script setup lang="ts">
const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <DatePicker v-model="date">
    <DatePickerTrigger
      :as="Button"
      class="w-[280px] justify-start text-left font-normal"
      variant="outline"
    >
      <CalendarIcon />
      <span v-if="date">{{ date.toLocaleString('en-US', { dateStyle: 'long' }) }}</span>
      <span v-else>Pick a date</span>
    </DatePickerTrigger>
    <DatePickerPopup align="start">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
```

## API Reference

See the [Vase UI date picker reference](https://vase-ui.com/components/date-picker) for primitive props, events, slots, and state attributes.

## Examples

### Date Range Picker

::component-preview{name="date-picker-2"}
::

### With Presets

::component-preview{name="date-picker-4"}
::

### With Input

::component-preview{name="date-picker-5"}
::

### Close on Select

Control the popover state to close it when a date is selected:

::component-preview{name="date-picker-6"}
::
