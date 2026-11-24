<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

type SelectLabelProps = ComponentProps<typeof SelectPrimitive.Label>

interface Props extends /* @vue-ignore */ SelectLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Label
    :class="cn(
      'not-in-data-[slot=field]:mb-2 inline-flex cursor-default items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4',
      props.class,
    )"
  >
    <slot />
  </SelectPrimitive.Label>
</template>
