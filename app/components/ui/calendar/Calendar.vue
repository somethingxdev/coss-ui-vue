<script setup lang="ts">
import type { CalendarBaseProps, CalendarDaySlotProps } from './CalendarBase.vue'
import { Calendar as CalendarPrimitive } from '@vase-ui/vue/calendar'
import { RangeCalendar } from '@vase-ui/vue/range-calendar'
import CalendarBase from './CalendarBase.vue'

type CalendarRootProps = CalendarPrimitive.Root.Props

export interface CalendarProps extends /* @vue-ignore */ Omit<CalendarRootProps, 'class' | 'modelValue' | 'defaultValue'>, /* @vue-ignore */ CalendarBaseProps {
  mode?: 'single' | 'range'
  modelValue?: Temporal.PlainDate | readonly [Temporal.PlainDate | null, Temporal.PlainDate | null] | null
  defaultValue?: CalendarProps['modelValue']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<CalendarProps>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase v-bind="$attrs" :model-value="props.mode === 'range' ? props.modelValue ?? undefined : props.modelValue" :default-value="props.defaultValue" :root="props.mode === 'range' ? RangeCalendar.Root : CalendarPrimitive.Root">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
