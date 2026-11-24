<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

type FieldProps = ComponentProps<typeof FieldPrimitive.Root>

interface Props extends /* @vue-ignore */ FieldProps {
  as?: keyof HTMLElementTagNameMap | Component
  name?: string
  invalid?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Root :as="props.as" :name="props.name" :invalid="props.invalid" :class="cn('flex flex-col items-start gap-2', props.class)">
    <slot />
  </FieldPrimitive.Root>
</template>
