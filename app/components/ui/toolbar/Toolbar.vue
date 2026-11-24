<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'
import { cn } from '../../../lib/utils'

type ToolbarProps = ComponentProps<typeof ToolbarPrimitive.Root>

interface Props extends /* @vue-ignore */ ToolbarProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Root :class="cn('relative flex gap-2 rounded-xl border bg-card not-dark:bg-clip-padding p-1 text-card-foreground', props.class)">
    <slot />
  </ToolbarPrimitive.Root>
</template>
