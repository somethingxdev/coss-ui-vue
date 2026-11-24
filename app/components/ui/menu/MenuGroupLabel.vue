<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

type MenuGroupLabelProps = ComponentProps<typeof MenuPrimitive.GroupLabel>

interface Props extends /* @vue-ignore */ MenuGroupLabelProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.GroupLabel
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8', props.class)"
    :data-inset="props.inset || undefined"
  >
    <slot />
  </MenuPrimitive.GroupLabel>
</template>
