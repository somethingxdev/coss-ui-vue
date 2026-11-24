<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>

interface Props extends /* @vue-ignore */ DrawerTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Title :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </DrawerPrimitive.Title>
</template>
