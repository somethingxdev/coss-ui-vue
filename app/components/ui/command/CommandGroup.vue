<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandGroupProps = CommandPrimitive.Group.Props

interface Props extends /* @vue-ignore */ CommandGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.Group data-slot="command-group" :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot />
  </CommandPrimitive.Group>
</template>
