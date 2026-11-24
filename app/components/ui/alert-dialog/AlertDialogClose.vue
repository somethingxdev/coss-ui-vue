<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'

type AlertDialogCloseProps = ComponentProps<typeof AlertDialogPrimitive.Close>

interface Props extends /* @vue-ignore */ AlertDialogCloseProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Close>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </AlertDialogPrimitive.Close>
</template>
