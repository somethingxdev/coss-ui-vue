<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandProps = CommandPrimitive.Root.Props

interface Props extends /* @vue-ignore */ CommandProps {
  autoHighlight?: CommandProps['autoHighlight']
  keepHighlight?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), { autoHighlight: 'always', keepHighlight: true })
</script>

<template>
  <CommandPrimitive.Root inline open :auto-highlight="props.autoHighlight" :keep-highlight="props.keepHighlight" :class="cn('flex min-h-0 flex-col', props.class)">
    <slot />
  </CommandPrimitive.Root>
</template>
