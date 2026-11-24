<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'

type CollapsibleProps = ComponentProps<typeof CollapsiblePrimitive.Root>

interface Props extends /* @vue-ignore */ CollapsibleProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Root>
    <slot />
  </CollapsiblePrimitive.Root>
</template>
