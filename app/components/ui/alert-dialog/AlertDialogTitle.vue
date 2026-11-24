<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogTitleProps = ComponentProps<typeof AlertDialogPrimitive.Title>

interface Props extends /* @vue-ignore */ AlertDialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Title :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </AlertDialogPrimitive.Title>
</template>
