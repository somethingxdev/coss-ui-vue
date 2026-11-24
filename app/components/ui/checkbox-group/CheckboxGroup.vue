<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import * as CheckboxPrimitive from '@vase-ui/vue/checkbox-group'
import { cn } from '../../../lib/utils'

type CheckboxGroupProps = ComponentProps<typeof CheckboxPrimitive.CheckboxGroup>

interface Props extends /* @vue-ignore */ CheckboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CheckboxPrimitive.CheckboxGroup :class="cn('flex flex-col items-start gap-3', props.class)">
    <slot />
  </CheckboxPrimitive.CheckboxGroup>
</template>
