<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'
import ProgressIndicator from './ProgressIndicator.vue'
import ProgressTrack from './ProgressTrack.vue'

type ProgressRootProps = ComponentProps<typeof ProgressPrimitive.Root>

interface Props extends /* @vue-ignore */ ProgressRootProps {
  value: ProgressRootProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Root
    :value="props.value"
    :class="cn('flex w-full flex-col gap-2', props.class)"
  >
    <slot>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </slot>
  </ProgressPrimitive.Root>
</template>
