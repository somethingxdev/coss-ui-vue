<script setup lang="ts">
import { RadioGroupPrimitive, RadioPrimitive } from '../components/ui/radio-group'
import { SegmentedControl, SegmentedControlItem } from '../components/ui/segmented-control'
</script>

<template>
  <SegmentedControl
    :as="RadioGroupPrimitive.RadioGroup"
    aria-label="Billing period"
    default-value="monthly"
    size="sm"
  >
    <SegmentedControlItem as="label" class="grow">
      <RadioPrimitive.Radio class="sr-only" value="monthly" />
      Monthly
    </SegmentedControlItem>
    <SegmentedControlItem as="label" class="grow">
      <RadioPrimitive.Radio class="sr-only" value="yearly" />
      Yearly
    </SegmentedControlItem>
  </SegmentedControl>
</template>
