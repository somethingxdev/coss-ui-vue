<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressLabelProps = ComponentProps<typeof ProgressPrimitive.Label>

interface Props extends /* @vue-ignore */ ProgressLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Label
    :class="cn('font-medium text-sm', props.class)"
  >
    <slot />
  </ProgressPrimitive.Label>
</template>
