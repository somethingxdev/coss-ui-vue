<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { cn } from '../../../lib/utils'

type OTPFieldSeparatorProps = ComponentProps<typeof OTPFieldPrimitive.Separator>

interface Props extends /* @vue-ignore */ OTPFieldSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <OTPFieldPrimitive.Separator :class="cn('h-0.5 w-3 shrink-0 rounded-full bg-input', props.class)" />
</template>
