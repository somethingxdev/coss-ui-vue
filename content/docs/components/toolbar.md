---
preview: toolbar-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@/components/ui/toolbar'
```

```vue
<Toolbar>
  <ToolbarGroup>
    <Toggle>Bold</Toggle>
    <Toggle>Underline</Toggle>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarButton :as="Button">Save</ToolbarButton>
</Toolbar>
```

## API Reference

See the [Vase UI toolbar reference](https://vase-ui.com/components/toolbar) for primitive props, events, slots, and state attributes.
