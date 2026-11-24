<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'
import { cn } from '../../../lib/utils'

type ToolbarGroupProps = ComponentProps<typeof ToolbarPrimitive.Group>

interface Props extends /* @vue-ignore */ ToolbarGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Group :class="cn('flex items-center gap-1', props.class)">
    <slot />
  </ToolbarPrimitive.Group>
</template>
