---
preview: combobox-1
---

## Usage

### Single Selection

```ts
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@/components/ui/combobox'
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
  <Combobox :items="items">
    <ComboboxInput placeholder="Select an item..." />
    <ComboboxPopup>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

Each entry of `items` is `{ value, label }`, with optional `keywords` and `disabled`. The selected value is the entry's `value`. When your source objects have another shape, map them once:

```vue
<script setup lang="ts">
const users = [
  { id: 'ada', name: 'Ada Lovelace' },
  { id: 'grace', name: 'Grace Hopper' },
]

const userItems = users.map(user => ({ value: user.id, label: user.name }))
</script>

<template>
  <Combobox default-value="ada" :items="userItems">
    <ComboboxInput placeholder="Select a user..." />
    <ComboboxPopup>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

### Multiple Selection

```ts
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from '@/components/ui/combobox'
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
  <Combobox :items="items" multiple>
    <ComboboxChips>
      <ComboboxValue v-slot="{ value }">
        <ComboboxChip v-for="item in value" :key="item" :value="item" />
        <ComboboxChipsInput
          :placeholder="value.length > 0 ? undefined : 'Select an item...'"
          aria-label="Select an item"
        />
      </ComboboxValue>
    </ComboboxChips>
    <ComboboxPopup>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

## API Reference

See the [Vase UI combobox reference](https://vase-ui.com/components/combobox) for primitive props, events, slots, and state attributes.

## Examples

### Disabled

::component-preview{name="combobox-2"}
::

### Small Size

::component-preview{name="combobox-3"}
::

### Large Size

::component-preview{name="combobox-4"}
::

### Auto Highlight

Automatically highlight the first matching option.

::component-preview{name="combobox-6"}
::

### With Clear Button

::component-preview{name="combobox-7"}
::

### With Groups

::component-preview{name="combobox-8"}
::

### With Multiple Selection

::component-preview{name="combobox-9"}
::

### With Start Addon

Display an icon or other element at the start of the input using the `start-addon` slot.

::component-preview{name="combobox-13"}
::

### With Start Addon - Multiple

Use the `start-addon` slot on `ComboboxChips` to display an icon at the start when using multiple selection.

::component-preview{name="combobox-14"}
::

### With Input Inside Popup

Place `ComboboxInput` inside `ComboboxPopup` and open it with a `ComboboxTrigger`. The popup lines up with the trigger, the search starts empty on every open, and focus returns to the trigger on close.

::component-preview{name="combobox-10"}
::

### With Select-like Button

Use `SelectButton` as the `as` prop on `ComboboxTrigger` to make the combobox trigger look like a select.

::component-preview{name="combobox-18"}
::

### Form Integration

::component-preview{name="combobox-11"}
::

### Form Integration - Multiple

::component-preview{name="combobox-12"}
::
