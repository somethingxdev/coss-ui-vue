<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'

type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>

interface Props extends /* @vue-ignore */ TooltipTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <TooltipPrimitive.Trigger>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </TooltipPrimitive.Trigger>
</template>
