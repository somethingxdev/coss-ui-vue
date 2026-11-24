<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogBackdropProps = ComponentProps<typeof DialogPrimitive.Backdrop>

interface Props extends /* @vue-ignore */ DialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Transition>
    <DialogPrimitive.Backdrop
      :class="cn(
        'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-opacity duration-200 [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
        props.class,
      )"
    />
  </Transition>
</template>
