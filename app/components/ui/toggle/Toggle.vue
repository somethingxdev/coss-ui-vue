<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import type { ToggleVariants } from './variants'
import * as TogglePrimitive from '@vase-ui/vue/toggle'
import { cn } from '../../../lib/utils'
import { toggleVariants } from './variants'

type ToggleProps = ComponentProps<typeof TogglePrimitive.Toggle>

interface Props extends /* @vue-ignore */ ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TogglePrimitive.Toggle data-slot="toggle" :class="cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </TogglePrimitive.Toggle>
</template>
