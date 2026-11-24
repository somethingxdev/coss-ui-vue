<script setup lang="ts">
import type { CodeLang } from './highlight'
import { computed } from 'vue'
import CodeBlock from './CodeBlock.vue'

const props = defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
}>()

const lang = computed<CodeLang>(() => {
  const language = props.language
  return language === 'vue' || language === 'ts' || language === 'bash' || language === 'json' || language === 'css'
    ? language
    : 'text'
})
</script>

<template>
  <CodeBlock :code="props.code ?? ''" :lang="lang" :title="props.filename ?? undefined" />
</template>
