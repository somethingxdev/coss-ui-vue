<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import SheetBackdrop from './SheetBackdrop.vue'

type DialogContentProps = SheetPrimitive.Popup.Props
type DialogCloseProps = SheetPrimitive.Close.Props

interface Props extends /* @vue-ignore */ DialogContentProps {
  showCloseButton?: boolean
  side?: 'right' | 'left' | 'top' | 'bottom'
  variant?: 'default' | 'inset'
  closeProps?: DialogCloseProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  side: 'right',
  variant: 'default',
})
</script>

<template>
  <SheetPrimitive.Portal>
    <SheetBackdrop />
    <Transition>
      <SheetPrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          'fixed z-50 flex max-h-none min-h-0 max-w-none min-w-0 flex-col bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[opacity,translate] motion-reduce:transition-opacity duration-200 ease-in-out will-change-transform [--sheet-inset:0px] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 max-sm:before:hidden dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          (props.side === 'bottom' || props.side === 'top') && 'inset-x-(--sheet-inset) h-auto w-auto max-h-[calc(100dvh-(--spacing(12))-var(--sheet-inset))]',
          props.side === 'bottom' && 'top-auto bottom-(--sheet-inset) border-t motion-safe:[&.v-leave-to]:translate-y-8 motion-safe:[&.v-enter-from]:translate-y-8',
          props.side === 'top' && 'top-(--sheet-inset) bottom-auto border-b motion-safe:[&.v-leave-to]:-translate-y-8 motion-safe:[&.v-enter-from]:-translate-y-8',
          (props.side === 'left' || props.side === 'right') && 'inset-y-(--sheet-inset) h-auto w-[calc(100%-(--spacing(12)))] max-w-md',
          props.side === 'left' && 'start-(--sheet-inset) end-auto border-e motion-safe:[&.v-leave-to]:-translate-x-8 motion-safe:[&.v-enter-from]:-translate-x-8',
          props.side === 'right' && 'start-auto end-(--sheet-inset) border-s motion-safe:[&.v-leave-to]:translate-x-8 motion-safe:[&.v-enter-from]:translate-x-8',
          props.variant === 'inset' && 'before:hidden sm:rounded-2xl sm:border sm:[--sheet-inset:--spacing(4)] sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
          props.class,
        )"
      >
        <slot />
        <SheetPrimitive.Close v-if="props.showCloseButton" v-bind="props.closeProps">
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
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </Transition>
  </SheetPrimitive.Portal>
</template>
