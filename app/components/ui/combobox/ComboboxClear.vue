<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'

type ComboboxClearProps = ComponentProps<typeof ComboboxPrimitive.Clear>

interface Props extends /* @vue-ignore */ ComboboxClearProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Clear data-slot="combobox-clear">
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ComboboxPrimitive.Clear>
</template>
