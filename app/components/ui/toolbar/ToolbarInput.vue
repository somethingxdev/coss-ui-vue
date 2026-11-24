<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

type ToolbarInputProps = ComponentProps<typeof ToolbarPrimitive.Input>

interface Props extends /* @vue-ignore */ ToolbarInputProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Input />
</template>
