<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

type ToolbarButtonProps = ComponentProps<typeof ToolbarPrimitive.Button>

interface Props extends /* @vue-ignore */ ToolbarButtonProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Button>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ToolbarPrimitive.Button>
</template>
