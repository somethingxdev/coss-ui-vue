<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

type PopoverDescriptionProps = ComponentProps<typeof PopoverPrimitive.Description>

interface Props extends /* @vue-ignore */ PopoverDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Description :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </PopoverPrimitive.Description>
</template>
