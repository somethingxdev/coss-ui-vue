<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

type MenuItemProps = ComponentProps<typeof MenuPrimitive.Item>

interface Props extends /* @vue-ignore */ MenuItemProps {
  as?: keyof HTMLElementTagNameMap | Component
  inset?: boolean
  variant?: 'default' | 'destructive'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <MenuPrimitive.Item
    :class="cn(
      `flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 font-normal text-base text-foreground no-underline outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg]:pointer-events-none [&>svg]:-mx-0.5 [&>svg]:shrink-0`,
      props.class,
    )"
    :data-inset="props.inset || undefined"
    :data-variant="props.variant"
  >
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </MenuPrimitive.Item>
</template>
