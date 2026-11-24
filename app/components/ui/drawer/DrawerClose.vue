<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'

type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>

interface Props extends /* @vue-ignore */ DrawerCloseProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Close>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DrawerPrimitive.Close>
</template>
