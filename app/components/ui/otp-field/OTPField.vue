<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { OTPFieldContext } from './context'

type OTPFieldRootProps = ComponentProps<typeof OTPFieldPrimitive.Root>

interface Props extends /* @vue-ignore */ OTPFieldRootProps {
  length: number
  size?: 'default' | 'lg'
  mask?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

provide(OTPFieldContext, props)
</script>

<template>
  <OTPFieldPrimitive.Root
    v-bind="$attrs"
    :length="props.length"
    data-slot="otp-field"
    :data-size="props.size"
    :class="cn(
      'flex items-center gap-2 data-disabled:opacity-64 data-disabled:**:data-[slot=otp-input-slot]:shadow-none data-disabled:**:data-[slot=otp-input-slot]:before:shadow-none!',
      props.class,
    )"
  >
    <slot />
  </OTPFieldPrimitive.Root>
</template>
