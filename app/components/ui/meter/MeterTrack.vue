<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

type MeterTrackProps = ComponentProps<typeof MeterPrimitive.Track>

interface Props extends /* @vue-ignore */ MeterTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Track
    :class="cn('block h-2 w-full overflow-hidden bg-input', props.class)"
  >
    <slot />
  </MeterPrimitive.Track>
</template>
