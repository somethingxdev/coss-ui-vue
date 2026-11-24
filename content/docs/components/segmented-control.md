---
preview: segmented-control-1
---

## About

A segmented control is a visual pattern, not a standalone behavior. `SegmentedControl` and `SegmentedControlItem` provide the presentation and the sliding indicator; the element you pass to `as` provides the semantics, keyboard interactions, and state model.

## Choose the right primitive

| Intent                            | Use                                           | Why                                                                   |
| --------------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| Choose one value in a form        | [Radio Group](/docs/components/radio-group)   | Represents a mutually exclusive value and participates in form state. |
| Navigate to another URL or route  | Navigation links                              | Preserves link behavior, browser history, and `aria-current`.         |
| Apply an exclusive filter or mode | [Toggle Group](/docs/components/toggle-group) | Represents the pressed state of an action that may be cleared.        |
| Switch between related panels     | [Tabs](/docs/components/tabs)                 | Connects each tab to an associated content panel.                     |

Choose the primitive from the interaction first, then render it through the segmented control. Visual similarity alone is not a reason to use Tabs or Toggle Group.

## Usage

```ts
import { RadioGroupPrimitive, RadioPrimitive } from '@/components/ui/radio-group'
import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control'
```

```vue
<SegmentedControl
  :as="RadioGroupPrimitive.RadioGroup"
  aria-label="Billing period"
  default-value="monthly"
>
  <SegmentedControlItem as="label">
    <RadioPrimitive.Radio class="sr-only" value="monthly" />
    Monthly
  </SegmentedControlItem>
  <SegmentedControlItem as="label">
    <RadioPrimitive.Radio class="sr-only" value="yearly" />
    Yearly
  </SegmentedControlItem>
</SegmentedControl>
```

Behavior props such as `default-value`, `v-model`, `@value-change`, or `href` are passed to the element given to `as`. The radio example wraps each native radio in a label and hides the radio visually, keeping its keyboard and form behavior.

The same composition works for navigation links:

```vue
<SegmentedControl as="nav" aria-label="Project sections">
  <SegmentedControlItem as="a" aria-current="page" href="/overview">
    Overview
  </SegmentedControlItem>
  <SegmentedControlItem as="a" href="/activity">
    Activity
  </SegmentedControlItem>
</SegmentedControl>
```

And for an exclusive filter that may be cleared:

```vue
<SegmentedControl :as="ToggleGroupPrimitive.ToggleGroup" aria-label="Status">
  <SegmentedControlItem :as="TogglePrimitive.Toggle" value="open">
    Open
  </SegmentedControlItem>
  <SegmentedControlItem :as="TogglePrimitive.Toggle" value="closed">
    Closed
  </SegmentedControlItem>
</SegmentedControl>
```

## API Reference

This component uses styled HTML elements. Use buttons with `aria-pressed`, links with `aria-current`, or radio inputs according to the interaction.

### SegmentedControl

The segmented surface. Renders a `<div>` by default and appends the sliding indicator after its children. Provides the size to its items.

| Prop   | Type                        | Default     | Description                                                                        |
| ------ | --------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the height and horizontal padding of every item                           |
| `as`   | `string \| Component`       | `"div"`     | Replaces the rendered element, for example with a Radio Group primitive or `"nav"` |

### SegmentedControlItem

A single segment. Renders a `<button type="button">` by default.

| Prop   | Type                        | Default             | Description                                                       |
| ------ | --------------------------- | ------------------- | ----------------------------------------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | Inherited from root | Overrides the size inherited from `SegmentedControl`              |
| `as`   | `string \| Component`       | `"button"`          | Replaces the rendered element, for example with a radio or a link |

A segment is active when it contains a checked radio, has `aria-current="page"` for navigation, or has `aria-pressed="true"` for a toggle. `data-checked` and `data-pressed` also work for custom controls. The indicator slides to the active item over 200ms with an ease-in-out curve, stays still when the user prefers reduced motion, and is hidden when no item is active. Before hydration or without JavaScript, the active item paints its own static pill instead. For navigation, the pill animates only when the control persists across route changes, such as in a shared layout; otherwise it appears in place on each page.

At the outside edges, the item padding and the surface’s inset combine to match the horizontal padding of the corresponding Button size. The surface is slightly taller than that Button to optically balance its inset selected item when the controls appear next to each other.

## Examples

### Small Radio Group

::component-preview{name="segmented-control-2"}
::

### Default Radio Group

::component-preview{name="segmented-control-1"}
::

### Large Radio Group

::component-preview{name="segmented-control-3"}
::

### Small Navigation

::component-preview{name="segmented-control-4"}
::

### Default Navigation

::component-preview{name="segmented-control-5"}
::

### Large Navigation

::component-preview{name="segmented-control-6"}
::

## Related content

Use Tabs when each segment controls an associated content panel. Tabs keep Vase UI’s indicator and add orientation support and panel semantics, but share the segmented control’s sizes, icon layout, and indicator surface so both look the same.

::component-preview{name="tabs-1"}
::
