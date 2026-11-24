<script lang="ts">
import type { ButtonHTMLAttributes, Component, HTMLAttributes } from 'vue'
import type { ButtonVariants } from './variants'
</script>

<script setup lang="ts">
import { LoaderCircleIcon } from '@lucide/vue'
import { Button as ButtonPrimitive } from '@vase-ui/vue/button'
import { cn } from '../../../lib/utils'
import { buttonVariants } from './variants'

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  as?: keyof HTMLElementTagNameMap | Component
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  loading?: boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ButtonProps>(), { as: 'button' })
</script>

<template>
  <!-- $attrs last: a part that renders as this button (`:as="Button"`) keeps its own data-slot. -->
  <ButtonPrimitive
    :as="props.as"
    data-slot="button"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
    :disabled="props.loading || props.disabled"
    :aria-disabled="props.loading || undefined"
    :data-loading="props.loading ? '' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <LoaderCircleIcon
      v-if="props.loading"
      aria-hidden="true"
      class="pointer-events-none absolute animate-spin"
      data-slot="button-loading-indicator"
    />
  </ButtonPrimitive>
</template>
