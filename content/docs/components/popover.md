---
preview: popover-2
---

## Usage

```ts
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
```

```vue
<Popover>
  <PopoverTrigger>Open Popover</PopoverTrigger>
  <PopoverPopup>
    <PopoverTitle>Popover Title</PopoverTitle>
    <PopoverDescription>Popover Description</PopoverDescription>
    <PopoverClose>Close</PopoverClose>
  </PopoverPopup>
</Popover>
```

## API Reference

See the [Vase UI popover reference](https://vase-ui.com/components/popover) for primitive props, events, slots, and state attributes.

## Examples

### With Close Button

::component-preview{name="popover-2"}
::

### Tooltip Style

Use the `tooltip-style` prop to make a popover look like a tooltip. This is recommended when you have an info icon button whose only purpose is to show additional information. Set `open-on-hover` on the `Popover` to also open it on hover. See the [tooltip accessibility notes](https://vase-ui.com/components/tooltip) for best practices.

::component-preview{name="popover-4"}
::

### Detached Triggers

Multiple triggers can share a single popover popup. The popup moves to the trigger that opened it and shows that trigger's content.

To create detached triggers:

1. Create a controller using `createPopoverController`
2. Pass it as `controller` to multiple `PopoverTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Popover` component with the same `controller`, and read the payload from `@payload-change` or from the `state.payload` of the `PopoverPopup` default slot

::component-preview{name="popover-3"}
::
