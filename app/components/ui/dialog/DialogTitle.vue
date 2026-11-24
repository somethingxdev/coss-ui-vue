<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Title :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </DialogPrimitive.Title>
</template>
