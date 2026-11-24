<script setup lang="ts">
import type { Component } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'

type DialogTriggerProps = SheetPrimitive.Trigger.Props

interface Props extends /* @vue-ignore */ DialogTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Trigger>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </SheetPrimitive.Trigger>
</template>
