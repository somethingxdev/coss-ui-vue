<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

type FieldErrorProps = ComponentProps<typeof FieldPrimitive.Error>

interface Props extends /* @vue-ignore */ FieldErrorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Error :class="cn('text-destructive-foreground text-xs', props.class)">
    <!-- The part shows the browser's message only when it gets no default slot. -->
    <template v-if="$slots.default" #default="{ state }">
      <slot :state="state" />
    </template>
  </FieldPrimitive.Error>
</template>
