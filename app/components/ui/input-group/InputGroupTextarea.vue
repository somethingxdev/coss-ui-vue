<script setup lang="ts">
import type { TextareaProps } from '../textarea'
import { Textarea } from '../textarea'

interface Props extends /* @vue-ignore */ TextareaProps {}

defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
  <Textarea v-model="model" unstyled />
</template>
