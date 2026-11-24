<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>

interface Props extends /* @vue-ignore */ AvatarImageProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Image
    :class="cn(
      'absolute inset-0 z-10 size-full rounded-[inherit] object-cover',
      props.class,
    )"
  />
</template>
