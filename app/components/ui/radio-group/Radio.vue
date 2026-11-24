<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as RadioPrimitive from '@vase-ui/vue/radio'
import { cn } from '../../../lib/utils'

type RadioProps = ComponentProps<typeof RadioPrimitive.Radio>

interface Props extends /* @vue-ignore */ RadioProps {
  value: string
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <RadioPrimitive.Radio
    v-bind="$attrs"
    :value="props.value"
    data-slot="radio"
    :class="cn('inline-block size-4.5 shrink-0 appearance-none rounded-full border border-input bg-background align-middle shadow-xs/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring checked:border-[5px] checked:border-primary disabled:opacity-64 sm:size-4', props.class)"
  />
</template>
