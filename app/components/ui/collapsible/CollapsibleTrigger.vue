<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'

type CollapsibleTriggerProps = ComponentProps<typeof CollapsiblePrimitive.Trigger>

interface Props extends /* @vue-ignore */ CollapsibleTriggerProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Trigger>
    <slot />
  </CollapsiblePrimitive.Trigger>
</template>
