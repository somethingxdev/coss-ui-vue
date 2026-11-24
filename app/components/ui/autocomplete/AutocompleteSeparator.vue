<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteSeparatorProps = ComponentProps<typeof AutocompletePrimitive.Separator>

interface Props extends /* @vue-ignore */ AutocompleteSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Separator :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)" />
</template>
