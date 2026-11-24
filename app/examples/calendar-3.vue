<script setup lang="ts">
import { Temporal } from 'temporal-polyfill'
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const today = Temporal.Now.plainDateISO()
const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null] | null>([
  today,
  today.add({ days: 7 }),
])
</script>

<template>
  <Calendar v-model="range" mode="range" />
</template>
