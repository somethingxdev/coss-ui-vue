<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { XIcon } from '@lucide/vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import DialogBackdrop from './DialogBackdrop.vue'

type DialogContentProps = ComponentProps<typeof DialogPrimitive.Popup>
type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>

interface Props extends /* @vue-ignore */ DialogContentProps {
  showCloseButton?: boolean
  bottomStickOnMobile?: boolean
  closeProps?: DialogCloseProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  bottomStickOnMobile: true,
})
</script>

<template>
  <DialogPrimitive.Portal>
    <DialogBackdrop />
    <Transition>
      <DialogPrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          'fixed inset-x-0 top-[calc(25dvh+0.5rem)] z-50 mx-auto flex max-h-[calc(100dvh-2rem)] min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-lg origin-center transform-[translateY(-25%)] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-var(--nested-dialogs,0))] shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 motion-reduce:transition-opacity sm:scale-[calc(1-0.1*var(--nested-dialogs,0))] motion-safe:sm:[&.v-leave-to]:scale-98 motion-safe:sm:[&.v-enter-from]:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.bottomStickOnMobile && 'max-sm:top-auto max-sm:bottom-0 max-sm:max-h-[calc(100dvh-3rem)] max-sm:w-full max-sm:max-w-none max-sm:origin-bottom max-sm:transform-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 motion-safe:max-sm:[&.v-leave-to]:translate-y-4 motion-safe:max-sm:[&.v-enter-from]:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none',
          props.class,
        )"
      >
        <slot />
        <DialogPrimitive.Close v-if="props.showCloseButton" v-bind="props.closeProps">
          <template #element="{ props: part, elementRef }">
            <Button
              :ref="elementRef"
              v-bind="part"
              aria-label="Close"
              class="absolute end-2 top-2"
              size="icon"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </template>
        </DialogPrimitive.Close>
      </DialogPrimitive.Popup>
    </Transition>
  </DialogPrimitive.Portal>
</template>
