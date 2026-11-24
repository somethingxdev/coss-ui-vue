<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandEmptyProps = CommandPrimitive.Empty.Props

interface Props extends /* @vue-ignore */ CommandEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.Empty data-slot="command-empty" :class="cn('not-empty:p-2 not-empty:py-6 text-center text-base text-muted-foreground sm:text-sm', props.class)">
    <slot />
  </CommandPrimitive.Empty>
</template>
