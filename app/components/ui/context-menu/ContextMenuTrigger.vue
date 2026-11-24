<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { ContextMenu as MenuPrimitive } from '@vase-ui/vue/context-menu'

type MenuContextTriggerProps = ComponentProps<typeof MenuPrimitive.Trigger>

interface Props extends /* @vue-ignore */ MenuContextTriggerProps {}

defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Trigger>
    <slot />
  </MenuPrimitive.Trigger>
</template>
