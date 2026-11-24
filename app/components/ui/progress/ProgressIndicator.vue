<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressIndicatorProps = ComponentProps<typeof ProgressPrimitive.Indicator>

interface Props extends /* @vue-ignore */ ProgressIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Indicator
    :class="cn('block h-full bg-primary transition-all duration-500', props.class)"
  />
</template>
