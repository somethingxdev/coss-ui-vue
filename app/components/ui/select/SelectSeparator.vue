<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

type SelectSeparatorProps = ComponentProps<typeof SelectPrimitive.Separator>

interface Props extends /* @vue-ignore */ SelectSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Separator :class="cn('mx-2 my-1 h-px bg-border', props.class)" />
</template>
