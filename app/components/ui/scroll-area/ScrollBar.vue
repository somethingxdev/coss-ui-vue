<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { ScrollArea as ScrollAreaPrimitive } from '@vase-ui/vue/scroll-area'
import { cn } from '../../../lib/utils'

type ScrollAreaScrollbarProps = ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>

interface Props extends /* @vue-ignore */ ScrollAreaScrollbarProps {
  orientation?: ScrollAreaScrollbarProps['orientation']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
})
</script>

<template>
  <ScrollAreaPrimitive.Scrollbar
    data-slot="scroll-area-scrollbar"
    :orientation="props.orientation"
    :class="cn(
      'm-1 flex opacity-0 transition-opacity data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-visible:opacity-100 data-visible:duration-100',
      props.class,
    )"
  >
    <ScrollAreaPrimitive.Thumb
      class="relative flex-1 rounded-full bg-foreground/20"
    />
  </ScrollAreaPrimitive.Scrollbar>
</template>
