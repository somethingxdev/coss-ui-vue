<script setup lang="ts">
import { Toast } from '@vase-ui/vue/toast'
import AnchoredToasts from './AnchoredToasts.vue'
import { anchoredToastManager } from './manager'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Toast.Provider :toast-manager="anchoredToastManager" v-bind="$attrs">
    <slot />
    <AnchoredToasts />
  </Toast.Provider>
</template>
