<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>

interface Props extends /* @vue-ignore */ SelectValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// The default slot is forwarded only when given: an empty one would replace the label of the value.
defineSlots<{
  default?: (props: { value: any, placeholder: boolean }) => unknown
}>()
</script>

<template>
  <SelectPrimitive.Value :class="cn('flex-1 truncate data-placeholder:text-muted-foreground', props.class)">
    <template v-if="$slots.default" #default="{ state }">
      <slot v-bind="state" />
    </template>
  </SelectPrimitive.Value>
</template>
