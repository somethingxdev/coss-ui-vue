<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressTrackProps = ComponentProps<typeof ProgressPrimitive.Track>

interface Props extends /* @vue-ignore */ ProgressTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Track
    :class="cn('block h-1.5 w-full overflow-hidden rounded-full bg-input', props.class)"
  >
    <slot />
  </ProgressPrimitive.Track>
</template>
