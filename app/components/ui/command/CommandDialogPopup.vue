<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'
import { DialogBackdrop } from '../dialog'

type DialogContentProps = DialogPrimitive.Popup.Props

interface Props extends /* @vue-ignore */ DialogContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Portal>
    <DialogBackdrop />
    <Transition>
      <DialogPrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          'fixed inset-x-0 top-[max(--spacing(4),4vh)] z-50 mx-auto flex max-h-105 min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-xl -translate-y-[calc(1.25rem*var(--nested-dialogs,0))] scale-[calc(1-0.1*var(--nested-dialogs,0))] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-0.1*var(--nested-dialogs,0))] shadow-lg/5 outline-none transition-[scale,opacity,translate] motion-reduce:transition-opacity duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:bg-muted/72 before:shadow-[0_1px_--theme(--color-black/4%)] motion-safe:[&.v-leave-to]:scale-98 motion-safe:[&.v-enter-from]:scale-98 [&.v-leave-to]:opacity-0 [&.v-enter-from]:opacity-0 sm:top-[10vh] **:data-[slot=scroll-area-viewport]:data-has-overflow-y:pe-1 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <slot />
      </DialogPrimitive.Popup>
    </Transition>
  </DialogPrimitive.Portal>
</template>
