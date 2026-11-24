<script setup lang="ts">
import type { ToastPosition } from './manager'
import { Toast } from '@vase-ui/vue/toast'
import { toastManager } from './manager'
import Toasts from './Toasts.vue'

export interface ToastProviderProps {
  position?: ToastPosition
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ToastProviderProps>(), {
  position: 'bottom-right',
})
</script>

<template>
  <Toast.Provider :toast-manager="toastManager" v-bind="$attrs">
    <slot />
    <Toasts :position="props.position" />
  </Toast.Provider>
</template>
