<script setup lang="ts">
import { Temporal } from 'temporal-polyfill'
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const date = shallowRef<Temporal.PlainDate | null>(Temporal.Now.plainDateISO())
</script>

<template>
  <Calendar
    v-model="date"
    class="[--cell-size:--spacing(11)] sm:[--cell-size:--spacing(10)]"
  />
</template>
