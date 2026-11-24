<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import { Fieldset as FieldPrimitive } from '@vase-ui/vue/fieldset'

type FieldSetProps = ComponentProps<typeof FieldPrimitive.Root>

interface Props extends /* @vue-ignore */ FieldSetProps {}

defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Root>
    <slot />
  </FieldPrimitive.Root>
</template>
