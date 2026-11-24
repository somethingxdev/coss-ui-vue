<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

type MeterLabelProps = ComponentProps<typeof MeterPrimitive.Label>

interface Props extends /* @vue-ignore */ MeterLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Label
    :class="cn('font-medium text-foreground text-sm', props.class)"
  >
    <slot />
  </MeterPrimitive.Label>
</template>
