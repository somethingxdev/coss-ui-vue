---
preview: tooltip-1
---

## Usage

```ts
import {
  createTooltipController,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from '@/components/ui/tooltip'
```

```vue
<Tooltip>
  <TooltipTrigger :as="Button" variant="outline">
    Hover me
  </TooltipTrigger>
  <TooltipPopup>Helpful hint</TooltipPopup>
</Tooltip>
```

## API Reference

See the [Vase UI tooltip reference](https://vase-ui.com/components/tooltip) for primitive props, events, slots, and state attributes.

## Examples

### Grouped Tooltips

Tooltips group on their own, without a provider. Once a tooltip is open, or was a moment ago, the adjacent tooltips are shown instantly.

::component-preview{name="tooltip-2"}
::

### Detached Triggers

Multiple triggers can share a single tooltip popup. The popup moves to the trigger that opened it and shows that trigger's content.

To create detached triggers:

1. Create a controller using `createTooltipController`
2. Pass it as `controller` to multiple `TooltipTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Tooltip` component with the same `controller`, and read `state.payload` from the default slot of `TooltipPopup`

::component-preview{name="tooltip-3"}
::
