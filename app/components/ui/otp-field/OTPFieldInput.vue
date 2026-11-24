<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { OTPFieldContext } from './context'

type OTPFieldInputProps = ComponentProps<typeof OTPFieldPrimitive.Input>

interface Props extends /* @vue-ignore */ OTPFieldInputProps {
  index: number
  placeholder?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(OTPFieldContext, {})
</script>

<template>
  <OTPFieldPrimitive.Input
    data-slot="otp-field-input"
    :index="props.index"
    :class="cn(
      'relative text-center in-[[data-slot=otp-field][data-size=lg]]:size-10 size-9 min-w-0 items-center justify-center rounded-lg border border-input bg-background not-dark:bg-clip-padding in-[[data-slot=otp-field][data-size=lg]]:text-lg text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-focus-visible:before:shadow-[0_1px_--theme(--color-black/4%)] focus-visible:z-10 focus-visible:border-ring focus-visible:shadow-none focus-visible:ring-[3px] in-[[data-slot=otp-field]:has([aria-invalid=true])]:border-destructive/36 in-[[data-slot=otp-field]:has([aria-invalid=true])]:shadow-none in-[[data-slot=otp-field]:has([aria-invalid=true])]:before:shadow-none! in-[[data-slot=otp-field]:has([aria-invalid=true])]:focus-visible:border-destructive/64 in-[[data-slot=otp-field]:has([aria-invalid=true])]:focus-visible:ring-destructive/16 sm:in-[[data-slot=otp-field][data-size=lg]]:size-9 sm:size-8 sm:in-[[data-slot=otp-field][data-size=lg]]:text-base sm:text-sm dark:bg-input/32 dark:in-[[data-slot=otp-field]:has([aria-invalid=true])]:focus-visible:ring-destructive/24 dark:not-focus-visible:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
    :placeholder="props.placeholder"
    :type="context.mask ? 'password' : 'text'"
  />
</template>
