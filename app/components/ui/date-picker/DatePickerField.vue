<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes } from 'vue'
import type { DateFieldVariants } from './variants'
import { CalendarIcon } from '@lucide/vue'
import { DateField } from '@vase-ui/vue/date-field'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { dateFieldControlClassName, dateFieldInputVariants, pickerInputClassName } from './variants'

// The attributes go to the input, so that a label `for` its id names it.
interface Props extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'size' | 'class'> {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <div
    data-slot="date-picker-field"
    :data-size="props.size ?? 'default'"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <DatePickerPrimitive.Field v-bind="$attrs" :class="cn(dateFieldInputVariants({ size: props.size }), pickerInputClassName, 'pe-2')">
      <DateField.Input />
    </DatePickerPrimitive.Field>
    <DatePickerPrimitive.Trigger aria-label="Choose date">
      <template #element="{ props: part, elementRef }">
        <Button
          :ref="elementRef"
          v-bind="part"
          class="me-[calc(--spacing(1)-1px)]"
          size="icon-xs"
          variant="ghost"
        >
          <CalendarIcon aria-hidden="true" />
        </Button>
      </template>
    </DatePickerPrimitive.Trigger>
  </div>
</template>
