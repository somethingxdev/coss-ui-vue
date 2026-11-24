<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

type MenuSeparatorProps = ComponentProps<typeof MenuPrimitive.Separator>

interface Props extends /* @vue-ignore */ MenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Separator :class="cn('mx-2 my-1 h-px bg-border', props.class)" />
</template>
