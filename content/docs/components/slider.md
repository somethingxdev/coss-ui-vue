---
preview: slider-1
---

## Usage

```ts
import { Slider, SliderValue } from '@/components/ui/slider'
```

```vue
<Slider :get-aria-label="() => 'Volume'" />
```

## API Reference

See the [Vase UI slider reference](https://vase-ui.com/components/slider) for primitive props, events, slots, and state attributes.

## Examples

For accessible labelling and validation, prefer using the `Field` component with an associated `FieldLabel`. See the related example: [Slider field](/docs/components/field#slider-field).

Use `getAriaLabel` when there is no associated label. Name each range endpoint separately:

```vue
<Slider
  :default-value="[20, 80]"
  :get-aria-label="(index: number) => index === 0 ? 'Minimum price' : 'Maximum price'"
/>
```

An associated `FieldLabel` continues to work without this prop. Setting `aria-label` on the root alone does not name its thumbs.

### With Label and Value

::component-preview{name="slider-2"}
::

### Range Slider

::component-preview{name="slider-7"}
::

### Vertical

::component-preview{name="slider-17"}
::

### Form Integration

::component-preview{name="slider-23"}
::
