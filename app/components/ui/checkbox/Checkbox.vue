<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as CheckboxPrimitive from '@vase-ui/vue/checkbox'
import { cn } from '../../../lib/utils'

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Checkbox>

interface Props extends /* @vue-ignore */ CheckboxProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <CheckboxPrimitive.Checkbox
    v-bind="$attrs"
    data-slot="checkbox"
    :class="cn('relative inline-block size-4.5 shrink-0 appearance-none rounded-sm border border-input bg-background align-middle shadow-xs/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:opacity-64 sm:size-4 after:absolute after:hidden checked:after:block checked:after:left-[28%] checked:after:top-[11%] checked:after:h-[60%] checked:after:w-[35%] checked:after:rotate-45 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-primary-foreground indeterminate:after:inset-x-[22%] indeterminate:after:top-[45%] indeterminate:after:block indeterminate:after:border-b-2 indeterminate:after:border-primary-foreground', props.class)"
  />
</template>
