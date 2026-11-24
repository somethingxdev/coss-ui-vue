<script setup lang="ts">
import type { DrawerPosition } from './context'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { provide } from 'vue'
import { drawerPositionKey } from './context'

type DrawerProps = DrawerPrimitive.Root.Props

interface Props extends /* @vue-ignore */ DrawerProps {
  position?: DrawerPosition
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
})

provide(drawerPositionKey, () => props.position)
</script>

<template>
  <DrawerPrimitive.Root :swipe-direction="({ top: 'up', bottom: 'down', left: 'left', right: 'right' } as const)[props.position]">
    <slot />
  </DrawerPrimitive.Root>
</template>
