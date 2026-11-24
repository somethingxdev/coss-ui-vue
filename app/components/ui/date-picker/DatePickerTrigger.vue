<script setup lang="ts">
import type { Component } from 'vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { DateRangePicker } from '@vase-ui/vue/date-range-picker'
import { useDatePickerRange } from './context'

type DatePickerTriggerProps = DatePickerPrimitive.Trigger.Props

interface Props extends /* @vue-ignore */ DatePickerTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
const isRange = useDatePickerRange()
</script>

<template>
  <component :is="isRange() ? DateRangePicker.Trigger : DatePickerPrimitive.Trigger">
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </component>
</template>
