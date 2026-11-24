<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

type FieldDescriptionProps = ComponentProps<typeof FieldPrimitive.Description>

interface Props extends /* @vue-ignore */ FieldDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Description
    v-slot="{ state }"
    :class="cn('text-muted-foreground text-xs', props.class)"
  >
    <slot :state="state" />
  </FieldPrimitive.Description>
</template>
