<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogBackdropProps = ComponentProps<typeof AlertDialogPrimitive.Backdrop>

interface Props extends /* @vue-ignore */ AlertDialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Transition>
    <AlertDialogPrimitive.Backdrop
      :class="cn(
        'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-opacity duration-200 [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
        props.class,
      )"
    />
  </Transition>
</template>
