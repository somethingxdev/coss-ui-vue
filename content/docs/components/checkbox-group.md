---
preview: checkbox-group-5
---

## Usage

```ts
import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
```

```vue
<CheckboxGroup :default-value="['next']">
  <Label>
    <Checkbox value="next" />
    Next.js
  </Label>
  <Label>
    <Checkbox value="vite" />
    Vite
  </Label>
  <Label>
    <Checkbox value="astro" />
    Astro
  </Label>
</CheckboxGroup>
```

## API Reference

See the [Vase UI checkbox group reference](https://vase-ui.com/components/checkbox-group) for primitive props, events, slots, and state attributes.

## Examples

For accessible group labelling and validation, prefer wrapping checkbox groups with `Field` and `Fieldset`. See the related example: [Checkbox group field](/docs/components/field#checkbox-group-field).

### Form Integration

::component-preview{name="checkbox-group-5"}
::
