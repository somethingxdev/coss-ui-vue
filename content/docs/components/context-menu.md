---
preview: context-menu-1
---

## Usage

```ts
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuLinkItem,
  ContextMenuPopup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
```

```vue
<ContextMenu>
  <ContextMenuTrigger class="flex h-32 items-center justify-center rounded-lg border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuPopup>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuLinkItem :as="RouterLink" to="/docs">
      Documentation
    </ContextMenuLinkItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>More tools</ContextMenuSubTrigger>
      <ContextMenuSubPopup>
        <ContextMenuItem>Inspect</ContextMenuItem>
        <ContextMenuItem>View source</ContextMenuItem>
      </ContextMenuSubPopup>
    </ContextMenuSub>
  </ContextMenuPopup>
</ContextMenu>
```

## API Reference

See the [Vase UI context menu reference](https://vase-ui.com/components/context-menu) for primitive props, events, slots, and state attributes.

## Examples

### With Link

::component-preview{name="context-menu-2"}
::

### Nested Menu

::component-preview{name="context-menu-3"}
::

### With Checkbox

::component-preview{name="context-menu-4"}
::

### With Group Label

::component-preview{name="context-menu-5"}
::

### With Icons

::component-preview{name="context-menu-6"}
::

### With Radio Group

::component-preview{name="context-menu-7"}
::

### With Switch

`ContextMenuCheckboxItem` supports a `variant="switch"` prop that displays a decorative switch indicator instead of a checkmark. This is a purely visual variant. The component remains a checkbox item with the same functionality.

::component-preview{name="context-menu-8"}
::
