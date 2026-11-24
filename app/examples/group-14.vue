<script setup lang="ts">
import { ArrowRightIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
import { NumberField, NumberFieldGroup, NumberFieldInput } from '../components/ui/number-field'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const currencies = [
  { label: 'US Dollar', value: '$' },
  { label: 'Euro', value: '€' },
  { label: 'British Pound', value: '£' },
]
</script>

<template>
  <Group aria-label="Payment amount">
    <Group aria-label="Amount input">
      <Select default-value="$" :items="currencies">
        <SelectTrigger aria-label="Currency" class="w-fit min-w-none">
          <SelectValue v-slot="{ value }">
            {{ value }}
          </SelectValue>
        </SelectTrigger>
        <SelectPopup class="min-w-48">
          <SelectItem v-for="{ label, value } in currencies" :key="value" :value="value">
            {{ value }} <span class="ms-1">{{ label }}</span>
          </SelectItem>
        </SelectPopup>
      </Select>
      <GroupSeparator />
      <NumberField :default-value="10" class="contents">
        <NumberFieldGroup class="rounded-s-none">
          <NumberFieldInput aria-label="Enter the amount" class="text-left" />
        </NumberFieldGroup>
      </NumberField>
    </Group>
    <Group aria-label="Submit">
      <Button aria-label="Send" size="icon" variant="outline">
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </Group>
  </Group>
</template>
