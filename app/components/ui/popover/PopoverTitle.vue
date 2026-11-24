<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

type PopoverTitleProps = ComponentProps<typeof PopoverPrimitive.Title>

interface Props extends /* @vue-ignore */ PopoverTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Title :class="cn('font-semibold text-lg leading-none', props.class)">
    <slot />
  </PopoverPrimitive.Title>
</template>
