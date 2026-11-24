<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Autocomplete as CommandPrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type CommandSeparatorProps = CommandPrimitive.Separator.Props

interface Props extends /* @vue-ignore */ CommandSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.Separator data-slot="command-separator" :class="cn('mx-2 my-2 h-px bg-border last:hidden', props.class)" />
</template>
