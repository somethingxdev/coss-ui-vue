---
preview: drawer-1
---

## Usage

```ts
import {
  Drawer,
  DrawerClose,
  DrawerCreateHandle,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
```

```vue
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerPopup>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Drawer Description</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>Content</DrawerPanel>
    <DrawerFooter>
      <DrawerClose>Close</DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>
```

## API Reference

See the [Vase UI drawer reference](https://vase-ui.com/components/drawer) for primitive props, events, slots, and state attributes.

## Examples

### Inset variant

::component-preview{name="drawer-4"}
::

### Straight variant

::component-preview{name="drawer-5"}
::

### Scrollable content

::component-preview{name="drawer-6"}
::

```vue
<Drawer>
  <DrawerTrigger>Open chat</DrawerTrigger>
  <DrawerPopup class="[--drawer-height:calc(100dvh-3rem)]">
    <DrawerHeader><DrawerTitle>Chat</DrawerTitle></DrawerHeader>
    <div class="min-h-0 flex-1">
      <DrawerPanel>Conversation</DrawerPanel>
    </div>
    <form class="mx-3 mb-3 flex items-end gap-2" @submit.prevent="onSend">
      <Textarea v-model="message" aria-label="Message" />
      <Button aria-label="Send message" size="icon" type="submit">
        <ArrowUpIcon aria-hidden="true" />
      </Button>
    </form>
  </DrawerPopup>
</Drawer>
```

### Nested drawers

::component-preview{name="drawer-7"}
::

### Snap points

::component-preview{name="drawer-9"}
::

### Mobile menu

::component-preview{name="drawer-11"}
::

### Responsive dialog

Use `Drawer` on small screens and `Dialog` on larger ones to show the same content in a modal on desktop and a bottom sheet on mobile.

::component-preview{name="drawer-12"}
::
