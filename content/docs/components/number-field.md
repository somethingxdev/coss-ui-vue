---
preview: number-field-1
---

## Usage

```ts
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '@/components/ui/number-field'
```

```vue
<NumberField :default-value="0">
  <NumberFieldScrubArea label="Quantity" />
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>
```

## API Reference

See the [Vase UI number field reference](https://vase-ui.com/components/number-field) for primitive props, events, slots, and state attributes.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap number fields. See the related example: [Number field](/docs/components/field#number-field).

### Small Size

::component-preview{name="number-field-2"}
::

### Large Size

::component-preview{name="number-field-3"}
::

### Disabled

::component-preview{name="number-field-4"}
::

### With Scrub

::component-preview{name="number-field-6"}
::

### With Range

::component-preview{name="number-field-7"}
::

### With Formatted Value

::component-preview{name="number-field-8"}
::

### With Step

::component-preview{name="number-field-9"}
::

### Form Integration

::component-preview{name="number-field-10"}
::
