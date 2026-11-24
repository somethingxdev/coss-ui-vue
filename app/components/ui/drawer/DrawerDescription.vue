<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>

interface Props extends /* @vue-ignore */ DrawerDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Description :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </DrawerPrimitive.Description>
</template>
