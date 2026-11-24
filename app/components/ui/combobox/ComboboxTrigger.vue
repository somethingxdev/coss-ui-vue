<script setup lang="ts">
import type { Component, ComponentPublicInstance } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { inject, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { ComboboxContext } from './context'

type ComboboxTriggerProps = ComponentProps<typeof ComboboxPrimitive.Trigger>

interface Props extends /* @vue-ignore */ ComboboxTriggerProps {
  as?: keyof HTMLElementTagNameMap | Component
}

const props = defineProps<Props>()

const trigger = useTemplateRef<ComponentPublicInstance>('trigger')
const context = inject(ComboboxContext, null)

// With the input inside the popup, the trigger is what the popup lines up with.
onMounted(() => {
  if (context)
    context.anchorRef.value ??= trigger.value?.$el
})

onBeforeUnmount(() => {
  if (context?.anchorRef.value === trigger.value?.$el)
    context!.anchorRef.value = null
})
</script>

<template>
  <ComboboxPrimitive.Trigger ref="trigger" data-slot="combobox-trigger">
    <template v-if="props.as" #element="{ props: part, elementRef }">
      <component :is="props.as" :ref="elementRef" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ComboboxPrimitive.Trigger>
</template>
