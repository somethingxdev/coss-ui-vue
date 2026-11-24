---
preview: menu-1
---

## Usage

```ts
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLinkItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from '@/components/ui/menu'
```

```vue
<Menu>
  <MenuTrigger>Open</MenuTrigger>
  <MenuPopup align="start" :side-offset="4">
    <MenuItem>Profile</MenuItem>
    <MenuSeparator />

    <MenuGroup>
      <MenuGroupLabel>Playback</MenuGroupLabel>
      <MenuItem>Play</MenuItem>
      <MenuItem>Pause</MenuItem>
    </MenuGroup>

    <MenuSeparator />

    <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
    <MenuCheckboxItem>Repeat</MenuCheckboxItem>
    <MenuCheckboxItem variant="switch">Auto save</MenuCheckboxItem>

    <MenuSeparator />

    <MenuGroup>
      <MenuGroupLabel>Sort by</MenuGroupLabel>
      <MenuRadioGroup>
        <MenuRadioItem value="artist">Artist</MenuRadioItem>
        <MenuRadioItem value="album">Album</MenuRadioItem>
        <MenuRadioItem value="title">Title</MenuRadioItem>
      </MenuRadioGroup>
    </MenuGroup>

    <MenuSeparator />

    <MenuSub>
      <MenuSubTrigger>Add to playlist</MenuSubTrigger>
      <MenuSubPopup>
        <MenuItem>Jazz</MenuItem>
        <MenuItem>Rock</MenuItem>
      </MenuSubPopup>
    </MenuSub>
  </MenuPopup>
</Menu>
```

## API Reference

See the [Vase UI menu reference](https://vase-ui.com/components/menu) for primitive props, events, slots, and state attributes.

## Examples

### Open on Hover

Vase UI menus open on press. To open one on hover, control it with `v-model:open` and set it from pointer events on the trigger and the popup.

::component-preview{name="menu-2"}
::

### With Checkbox

::component-preview{name="menu-3"}
::

### With Switch

`MenuCheckboxItem` supports a `variant="switch"` prop that displays a decorative switch indicator instead of a checkmark. This is a purely visual variant - the component remains a checkbox item with the same functionality.

::component-preview{name="menu-9"}
::

### With Radio Group

::component-preview{name="menu-4"}
::

### With Link

::component-preview{name="menu-5"}
::

### With Group Label

::component-preview{name="menu-6"}
::

### Nested Menu

::component-preview{name="menu-7"}
::

### Close on Select

Items close the menu when chosen; checkbox and radio items keep it open. `close-on-select` changes either default.

::component-preview{name="menu-8"}
::

### Open a Dialog

::component-preview{name="dialog-2"}
::
