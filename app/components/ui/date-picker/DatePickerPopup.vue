<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { DateRangePicker } from '@vase-ui/vue/date-range-picker'
import { Popover } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'
import { useDatePickerRange } from './context'
import { pickerPopupClassName, pickerViewportClassName } from './variants'

type DatePickerContentProps = DatePickerPrimitive.Popup.Props

interface Props extends /* @vue-ignore */ DatePickerContentProps {
  align?: DatePickerPrimitive.Positioner.Props['align']
  alignOffset?: number
  sideOffset?: number
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  sideOffset: 4,
})
const isRange = useDatePickerRange()
</script>

<template>
  <Popover.Portal>
    <component :is="isRange() ? DateRangePicker.Positioner : DatePickerPrimitive.Positioner" :align="props.align" :align-offset="props.alignOffset" :side-offset="props.sideOffset" class="z-50">
      <component :is="isRange() ? DateRangePicker.Popup : DatePickerPrimitive.Popup" v-bind="$attrs" :class="cn(pickerPopupClassName, props.class)">
        <div data-slot="date-picker-viewport" :class="pickerViewportClassName">
          <slot />
        </div>
      </component>
    </component>
  </Popover.Portal>
</template>
