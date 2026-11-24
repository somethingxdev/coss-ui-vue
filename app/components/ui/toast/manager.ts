import type { ToastManagerAddOptions, ToastObject } from '@vase-ui/vue/toast'
import { Toast } from '@vase-ui/vue/toast'

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
export type AnchoredToastOptions = ToastManagerAddOptions<{ tooltipStyle?: boolean }>

export const toastManager = Toast.createToastManager()
export const anchoredToastManager = Toast.createToastManager<{ tooltipStyle?: boolean }>()

export function upsertReplayClassName(toast: ToastObject): string | undefined {
  const updates = toast.updateKey ?? 0
  if (!updates)
    return undefined
  const isEven = updates % 2 === 0
  if (toast.type === 'error') {
    return isEven
      ? 'animate-toast-error-even motion-reduce:animate-none'
      : 'animate-toast-error-odd motion-reduce:animate-none'
  }
  return isEven
    ? 'animate-toast-success-even motion-reduce:animate-none'
    : 'animate-toast-success-odd motion-reduce:animate-none'
}
