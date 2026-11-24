<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as SwitchPrimitive from '@vase-ui/vue/switch'
import { cn } from '../../../lib/utils'

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Switch>

interface Props extends /* @vue-ignore */ SwitchProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <SwitchPrimitive.Switch
    v-bind="$attrs"
    data-slot="switch"
    :class="cn('relative inline-block h-5.5 w-9.5 shrink-0 appearance-none rounded-full bg-input align-middle transition-colors checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-64 after:absolute after:start-px after:top-px after:size-5 after:rounded-full after:bg-background after:shadow-sm after:transition-transform checked:after:translate-x-4 rtl:checked:after:-translate-x-4 sm:h-4.5 sm:w-7.5 sm:after:size-4 sm:checked:after:translate-x-3 rtl:sm:checked:after:-translate-x-3', props.class)"
  />
</template>
