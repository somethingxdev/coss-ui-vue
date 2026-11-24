<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandItemProps = CommandPrimitive.Item.Props

interface Props extends /* @vue-ignore */ Omit<CommandItemProps, 'value'> {
  value: CommandItemProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.Item data-slot="command-item" :value="props.value" :class="cn('flex min-h-8 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm', props.class)">
    <slot />
  </CommandPrimitive.Item>
</template>
