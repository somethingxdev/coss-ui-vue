<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'

type PopoverTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>

interface Props extends /* @vue-ignore */ PopoverTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Trigger>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PopoverPrimitive.Trigger>
</template>
