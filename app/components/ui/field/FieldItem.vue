<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

type FieldProps = ComponentProps<typeof FieldPrimitive.Root>

interface Props extends /* @vue-ignore */ FieldProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <!-- A field of its own, so a FieldLabel inside names this item's control and not the group around it. -->
  <FieldPrimitive.Root :class="cn('flex', props.class)">
    <slot />
  </FieldPrimitive.Root>
</template>
