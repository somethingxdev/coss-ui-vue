<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>

interface Props extends /* @vue-ignore */ AvatarProps {
  as?: keyof HTMLElementTagNameMap | Component
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Root
    :class="cn(
      'relative isolate inline-flex size-(--avatar-size,--spacing(8)) shrink-0 select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium text-[calc(var(--avatar-size,--spacing(8))*0.375)]/none',
      props.class,
    )"
  >
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </AvatarPrimitive.Root>
</template>
