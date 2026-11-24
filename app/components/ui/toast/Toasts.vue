<script setup lang="ts">
import type { ToastPosition } from './manager'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import { cn } from '../../../lib/utils'
import { upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const props = defineProps<{
  position: ToastPosition
}>()

const { toasts } = ToastPrimitive.useToastManager()

const regionClass = cn(
  'fixed inset-auto z-60 m-0 w-[calc(100%-var(--toast-inset)*2)] max-w-90 overflow-visible border-0 bg-transparent p-0 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]',
  'data-[position*=top]:top-(--toast-inset)',
  'data-[position*=bottom]:bottom-(--toast-inset)',
  'data-[position*=left]:left-(--toast-inset)',
  'data-[position*=right]:right-(--toast-inset)',
  'data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2',
)

const toastClass = cn(
  'absolute z-[calc(9999-var(--toast-index))] h-(--toast-calc-height) w-full select-none rounded-lg border bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(1%*max(0,var(--toast-index,0))))] not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 [transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.5s,height_.15s,background-color_.5s] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-expanded:bg-popover dark:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(6%*max(0,var(--toast-index,0))))] dark:data-expanded:bg-popover dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
  'data-[position*=right]:right-0 data-[position*=right]:left-auto',
  'data-[position*=left]:right-auto data-[position*=left]:left-0',
  'data-[position*=center]:right-0 data-[position*=center]:left-0',
  'data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-[50%_calc(50%-50%*min(var(--toast-index,0),1))]',
  'data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-[50%_calc(50%+50%*min(var(--toast-index,0),1))]',
  'after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full',
  'data-[position*=top]:after:top-full',
  'data-[position*=bottom]:after:bottom-full',
  '[--toast-calc-height:var(--toast-front-height,var(--toast-height))] [--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*.1)))] [--toast-shrink:calc(1-var(--toast-scale))] [--toast-x:var(--toast-swipe-x,0px)] [--toast-y:var(--toast-swipe-y,0px)]',
  'data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-y))]',
  'data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-y))]',
  'data-[position*=top]:transform-[translateX(var(--toast-x))_translateY(calc(var(--toast-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-[position*=bottom]:transform-[translateX(var(--toast-x))_translateY(calc(var(--toast-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-expanded:h-(--toast-height)',
  'data-position:data-expanded:transform-[translateX(var(--toast-x))_translateY(var(--toast-calc-offset-y))]',
  'data-swiping:transition-none',
  'motion-safe:data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:opacity-0',
  'motion-reduce:data-starting-style:opacity-0 motion-reduce:[transition:opacity_.5s,height_.15s,background-color_.5s]',
  'motion-safe:data-[position*=top]:data-ending-style:not-data-swipe-direction:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-ending-style:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-y)-100%-var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-y)+100%+var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-y)-100%-var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-y)+100%+var(--toast-inset)))]',
)
</script>

<template>
  <ToastPrimitive.Portal>
    <ToastPrimitive.Viewport
      :class="regionClass"
      :data-position="props.position"
    >
      <TransitionGroup>
        <template v-for="toast in toasts" :key="toast.id">
          <ToastPrimitive.Root :toast="toast" :class="[toastClass, upsertReplayClassName(toast)]" :data-position="props.position">
            <ToastPrimitive.Content
              class="pointer-events-auto flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm transition-opacity duration-250"
              data-slot="toast-content"
            >
              <ToastBody :type="toast.type" />
            </ToastPrimitive.Content>
          </ToastPrimitive.Root>
        </template>
      </TransitionGroup>
    </ToastPrimitive.Viewport>
  </ToastPrimitive.Portal>
</template>
