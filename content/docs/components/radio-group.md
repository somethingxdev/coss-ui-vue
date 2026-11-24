---
preview: radio-group-5
---

## Usage

```ts
import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio-group'
```

```vue
<RadioGroup default-value="next">
  <Label>
    <Radio value="next" /> Next.js
  </Label>
  <Label>
    <Radio value="vite" /> Vite
  </Label>
  <Label>
    <Radio value="astro" /> Astro
  </Label>
</RadioGroup>
```

## API Reference

See the [Vase UI radio group reference](https://vase-ui.com/components/radio-group) for primitive props, events, slots, and state attributes.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap radio buttons. See the related example: [Radio Group field](/docs/components/field#radio-group-field).

For tabs-style mutually exclusive choices, see the Segmented Control pattern.

### Form Integration

::component-preview{name="radio-group-5"}
::
