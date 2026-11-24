<script setup lang="ts">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { PreviewCard as PreviewCardPrimitive } from '@vase-ui/vue/preview-card'

type HoverCardTriggerProps = ComponentProps<typeof PreviewCardPrimitive.Trigger>

interface Props extends /* @vue-ignore */ HoverCardTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PreviewCardPrimitive.Trigger>
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PreviewCardPrimitive.Trigger>
</template>
