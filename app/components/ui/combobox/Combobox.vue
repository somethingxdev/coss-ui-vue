<script setup lang="ts" generic="T = string, Multiple extends boolean | undefined = false">
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { provide, shallowRef } from 'vue'
import { ComboboxContext } from './context'

interface Props extends /* @vue-ignore */ ComboboxPrimitive.Root.Props<T, Multiple> {}

defineOptions({ inheritAttrs: false })
defineProps<Props>()

const anchorRef = shallowRef<HTMLElement | null>(null)
provide(ComboboxContext, { anchorRef })
</script>

<template>
  <ComboboxPrimitive.Root v-bind="$attrs">
    <slot />
  </ComboboxPrimitive.Root>
</template>
