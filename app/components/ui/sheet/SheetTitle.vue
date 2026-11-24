<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogTitleProps = SheetPrimitive.Title.Props

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Title :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </SheetPrimitive.Title>
</template>
