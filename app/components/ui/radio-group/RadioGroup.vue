<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as RadioPrimitive from '@vase-ui/vue/radio-group'
import { cn } from '../../../lib/utils'

type RadioGroupProps = ComponentProps<typeof RadioPrimitive.RadioGroup>

interface Props extends /* @vue-ignore */ RadioGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <RadioPrimitive.RadioGroup :class="cn('flex flex-col gap-3', props.class)">
    <slot />
  </RadioPrimitive.RadioGroup>
</template>
