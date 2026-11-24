<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

type MeterValueProps = ComponentProps<typeof MeterPrimitive.Value>

interface Props extends /* @vue-ignore */ MeterValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

defineSlots<{
  default?: (props: { formattedValue: string, value: number }) => unknown
}>()
</script>

<template>
  <MeterPrimitive.Value
    :class="cn('text-foreground text-sm tabular-nums', props.class)"
  >
    <template v-if="$slots.default" #default="{ formattedValue, value }">
      <slot :formatted-value="formattedValue" :value="value" />
    </template>
  </MeterPrimitive.Value>
</template>
