<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

type ToolbarLinkProps = ComponentProps<typeof ToolbarPrimitive.Link>

interface Props extends /* @vue-ignore */ ToolbarLinkProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Link>
    <slot />
  </ToolbarPrimitive.Link>
</template>
