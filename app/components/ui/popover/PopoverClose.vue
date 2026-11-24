<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'

type PopoverCloseProps = ComponentProps<typeof PopoverPrimitive.Close>

interface Props extends /* @vue-ignore */ PopoverCloseProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Close>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PopoverPrimitive.Close>
</template>
