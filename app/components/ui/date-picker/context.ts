import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export const datePickerModeKey: InjectionKey<() => boolean> = Symbol('date-picker-range')

export function useDatePickerRange() {
  return inject(datePickerModeKey, () => false)
}
