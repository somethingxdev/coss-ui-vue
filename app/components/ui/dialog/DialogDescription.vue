<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>

interface Props extends /* @vue-ignore */ DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Description :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </DialogPrimitive.Description>
</template>
