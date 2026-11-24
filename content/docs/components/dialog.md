---
preview: dialog-1
---

## Usage

```ts
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
```

```vue
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <DialogPanel>Content</DialogPanel>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>
```

## API Reference

See the [Vase UI dialog reference](https://vase-ui.com/components/dialog) for primitive props, events, slots, and state attributes.

## Examples

### Open from a Menu

::component-preview{name="dialog-2"}
::

### Dialog with Bare Footer

::component-preview{name="dialog-6"}
::

### Dialog with scroll inside

::component-preview{name="dialog-5"}
::

### Nested Dialogs

::component-preview{name="dialog-3"}
::
