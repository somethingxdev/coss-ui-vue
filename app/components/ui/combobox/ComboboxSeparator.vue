<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxSeparatorProps = ComponentProps<typeof ComboboxPrimitive.Separator>

interface Props extends /* @vue-ignore */ ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Separator :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)" />
</template>
