<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'
import { useComposerEditor } from './editor'

type PopoverContentProps = PopoverPrimitive.Popup.Props

export interface ComposerPopupProps extends /* @vue-ignore */ PopoverContentProps {
  anchor?: PopoverPrimitive.Positioner.Props['anchor']
  side?: PopoverPrimitive.Positioner.Props['side']
  align?: PopoverPrimitive.Positioner.Props['align']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ComposerPopupProps>(), {
  side: 'top',
  align: 'start',
  sideOffset: 4,
})

const editor = useComposerEditor()
</script>

<template>
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner :anchor="props.anchor ?? editor?.rootEl.value ?? undefined" :side="props.side" :align="props.align" :side-offset="props.sideOffset" class="z-50">
      <Transition>
        <PopoverPrimitive.Popup
          v-bind="$attrs"
          :role="editor ? 'presentation' : undefined"
          :initial-focus="editor ? false : undefined"
          :final-focus="editor ? false : undefined"
          :class="cn(
            'relative w-(--anchor-width) [--composer-list-height:var(--available-height)] max-w-(--available-width) rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] [&.v-enter-from]:opacity-0 [&.v-leave-to]:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
            props.class,
          )"
        >
          <slot />
        </PopoverPrimitive.Popup>
      </Transition>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
</template>
