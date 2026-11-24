<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'

type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>

interface Props extends /* @vue-ignore */ DialogTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Trigger>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DialogPrimitive.Trigger>
</template>
