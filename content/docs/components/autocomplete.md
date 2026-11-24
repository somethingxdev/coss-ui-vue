---
preview: autocomplete-1
---

## Usage

```ts
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from '@/components/ui/autocomplete'
```

```vue
<script setup lang="ts">
const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
]
</script>

<template>
  <Autocomplete :items="items">
    <AutocompleteInput placeholder="Search..." />
    <AutocompletePopup>
      <AutocompleteEmpty>No results found.</AutocompleteEmpty>
      <AutocompleteList>
        <template #item="{ item }">
          <AutocompleteItem :key="item.value" :value="item.value">
            {{ item.label }}
          </AutocompleteItem>
        </template>
      </AutocompleteList>
    </AutocompletePopup>
  </Autocomplete>
</template>
```

## API Reference

See the [Vase UI autocomplete reference](https://vase-ui.com/components/autocomplete) for primitive props, events, slots, and state attributes.

## Examples

### Disabled

::component-preview{name="autocomplete-2"}
::

### Small Size

::component-preview{name="autocomplete-3"}
::

### Large Size

::component-preview{name="autocomplete-4"}
::

### Inline Autocomplete

Autofill the input with the highlighted item while navigating with arrow keys.

::component-preview{name="autocomplete-6"}
::

### Auto Highlight

Automatically highlight the first matching option.

::component-preview{name="autocomplete-7"}
::

### With Clear Button

::component-preview{name="autocomplete-8"}
::

### With Trigger and Clear Buttons

::component-preview{name="autocomplete-9"}
::

### With Start Addon

Display an icon or other element at the start of the input using the `start-addon` slot.

::component-preview{name="autocomplete-14"}
::

### With Groups

::component-preview{name="autocomplete-10"}
::

### Form Integration

::component-preview{name="autocomplete-13"}
::
