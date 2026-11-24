<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>

interface Props extends /* @vue-ignore */ AvatarFallbackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Fallback
    :class="cn(
      'absolute inset-0 flex size-full items-center justify-center rounded-[inherit] bg-border',
      props.class,
    )"
  >
    <slot />
  </AvatarPrimitive.Fallback>
</template>
