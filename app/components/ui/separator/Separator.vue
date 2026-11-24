<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as SeparatorPrimitive from '@vase-ui/vue/separator'
import { cn } from '../../../lib/utils'

type SeparatorPrimitiveProps = ComponentProps<typeof SeparatorPrimitive.Separator>

interface Props extends /* @vue-ignore */ SeparatorPrimitiveProps {
  orientation?: SeparatorPrimitiveProps['orientation']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <SeparatorPrimitive.Separator
    :orientation="props.orientation"
    :class="cn(
      `shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch`,
      props.class,
    )"
  />
</template>
