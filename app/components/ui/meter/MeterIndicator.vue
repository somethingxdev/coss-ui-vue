<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

type MeterIndicatorProps = ComponentProps<typeof MeterPrimitive.Indicator>

interface Props extends /* @vue-ignore */ MeterIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Indicator
    :class="cn('block h-full bg-primary transition-all duration-500', props.class)"
  />
</template>
