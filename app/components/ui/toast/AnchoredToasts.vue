<script setup lang="ts">
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import { upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const { toasts } = ToastPrimitive.useToastManager()

const toastClass = 'max-w-[min(--spacing(64),var(--available-width))] text-balance border bg-popover not-dark:bg-clip-padding text-popover-foreground text-xs transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:data-ending-style:scale-98 motion-safe:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]'
</script>

<template>
  <ToastPrimitive.Portal>
    <ToastPrimitive.Viewport
      class="fixed inset-auto m-0 size-0 overflow-visible border-0 bg-transparent p-0"
    >
      <TransitionGroup>
        <ToastPrimitive.Positioner v-for="toast in toasts" :key="toast.id" :toast="toast" class="z-60">
          <ToastPrimitive.Root
            :toast="toast"
            :class="[
              toastClass,
              toast.data?.tooltipStyle
                ? 'rounded-md shadow-md/5 before:rounded-[calc(var(--radius-md)-1px)]'
                : 'rounded-lg shadow-lg/5 before:rounded-[calc(var(--radius-lg)-1px)]',
              upsertReplayClassName(toast),
            ]"
          >
            <div v-if="toast.data?.tooltipStyle" class="px-2 py-1">
              <ToastPrimitive.Title />
            </div>
            <div v-else class="flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm">
              <ToastBody :type="toast.type" />
            </div>
          </ToastPrimitive.Root>
        </ToastPrimitive.Positioner>
      </TransitionGroup>
    </ToastPrimitive.Viewport>
  </ToastPrimitive.Portal>
</template>
