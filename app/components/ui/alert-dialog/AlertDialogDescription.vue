<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogDescriptionProps = ComponentProps<typeof AlertDialogPrimitive.Description>

interface Props extends /* @vue-ignore */ AlertDialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Description :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </AlertDialogPrimitive.Description>
</template>
