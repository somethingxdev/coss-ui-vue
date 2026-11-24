<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'

type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>

interface Props extends /* @vue-ignore */ SelectGroupProps {}

defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Group>
    <slot />
  </SelectPrimitive.Group>
</template>
