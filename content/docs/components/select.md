---
preview: select-1
---

## Usage

```ts
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
```

```vue
<script setup lang="ts">
const items = [
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]
</script>

<template>
  <Select :items="items">
    <SelectLabel>Frameworks</SelectLabel>
    <SelectTrigger>
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item.value">
        {{ item.label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
```

## API Reference

See the [Vase UI select reference](https://vase-ui.com/components/select) for primitive props, events, slots, and state attributes.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap selects. See the related example: [Select field](/docs/components/field#select-field).

### Small Size

::component-preview{name="select-2"}
::

### Large Size

::component-preview{name="select-3"}
::

### Disabled

::component-preview{name="select-4"}
::

### Without Item Alignment

::component-preview{name="select-5"}
::

### With Groups

::component-preview{name="select-6"}
::

### With Label

::component-preview{name="select-23"}
::

### Multiple Selection

::component-preview{name="select-7"}
::

### With Icon

::component-preview{name="select-8"}
::

### Options with Icon

::component-preview{name="select-9"}
::

### With Object Values

::component-preview{name="select-10"}
::

### SelectButton with Combobox

Use `SelectButton` as the `as` prop on `ComboboxTrigger` to create a combobox that looks like a select.

::component-preview{name="combobox-18"}
::

### Form Integration

::component-preview{name="select-11"}
::
