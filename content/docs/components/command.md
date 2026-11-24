---
preview: command-1
---

## Usage

`Command` uses an inline Vase UI Autocomplete inside an optional Dialog. Pass the collection to `Command`, then render the filtered items exposed by `CommandList`.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

const open = shallowRef(false)
const items = ['Linear', 'Figma', 'Slack']
const selected = shallowRef('')

function run(item: string) {
  selected.value = item
  open.value = false
}
</script>

<template>
  <CommandDialog v-model:open="open">
    <CommandDialogTrigger :as="Button" variant="outline">
      Open command palette
    </CommandDialogTrigger>
    <CommandDialogPopup aria-label="Command palette">
      <Command :items="items">
        <CommandInput aria-label="Search commands" placeholder="Search…" />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList v-slot="{ items: matches }">
          <CommandItem v-for="item in items.filter(item => matches.includes(item))" :key="item" :value="item" @click="run(item)">
            {{ item }}
          </CommandItem>
        </CommandList>
      </Command>
    </CommandDialogPopup>
  </CommandDialog>
  <p v-if="selected">
    Selected: {{ selected }}
  </p>
</template>
```

## API Reference

- `Command` accepts [Vase UI Autocomplete](https://vase-ui.com/components/autocomplete) options, including `items`, `filter`, and `v-model` for the search text. It defaults to `auto-highlight="always"` and `keep-highlight`.
- `CommandItem` takes the original item as `value`. `@click` runs for both a pointer activation and Enter on the highlighted item.
- `CommandList` exposes the filtered items through its default slot. Use `CommandGroup`, `CommandGroupLabel`, and `CommandSeparator` to organize matches, and `CommandEmpty` for the no-results state.
- `CommandDialog` and `CommandDialogTrigger` reuse the existing Dialog. `CommandDialogPopup` includes a backdrop; give it an accessible name or a `DialogTitle`.
- `CommandPanel`, `CommandFooter`, and `CommandShortcut` are layout and display components. `CommandShortcut` displays a key hint; register the shortcut in your application.
