<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandGroupLabelProps = CommandPrimitive.GroupLabel.Props

interface Props extends /* @vue-ignore */ CommandGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.GroupLabel data-slot="command-group-label" :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </CommandPrimitive.GroupLabel>
</template>
