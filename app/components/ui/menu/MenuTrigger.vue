<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

type MenuTriggerProps = ComponentProps<typeof MenuPrimitive.Trigger>

interface Props extends /* @vue-ignore */ MenuTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Trigger>
    <!-- data-pressed: Button styles the trigger of an open menu as pressed. -->
    <template v-if="props.as" #element="{ props: part, state }">
      <component :is="props.as" v-bind="part" :data-pressed="state.open ? '' : undefined">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </MenuPrimitive.Trigger>
</template>
