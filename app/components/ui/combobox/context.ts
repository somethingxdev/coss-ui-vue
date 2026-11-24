import type { InjectionKey, ShallowRef } from 'vue'

export interface ComboboxContextValue {
  anchorRef: ShallowRef<HTMLElement | null>
}

export const ComboboxContext: InjectionKey<ComboboxContextValue> = Symbol('ComboboxContext')

/** Provided by the popup, so an input knows it sits inside it. */
export const ComboboxPopupContext: InjectionKey<boolean> = Symbol('ComboboxPopupContext')
