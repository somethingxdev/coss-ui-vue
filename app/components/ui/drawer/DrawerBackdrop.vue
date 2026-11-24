<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerBackdropProps = ComponentProps<typeof DrawerPrimitive.Backdrop>

interface Props extends /* @vue-ignore */ DrawerBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Backdrop :class="cn('fixed inset-0 z-50 bg-black/32 backdrop-blur-sm supports-[-webkit-touch-callout:none]:absolute', props.class)" />
</template>
