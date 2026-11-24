---
preview: field-1
---

## Usage

```ts
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
```

```vue
<Field>
  <FieldLabel>Name</FieldLabel>
  <Input type="text" placeholder="Enter your name" />
  <FieldDescription>Visible on your profile</FieldDescription>
  <FieldError>Please enter a valid name</FieldError>
</Field>
```

## API Reference

See the [Vase UI field reference](https://vase-ui.com/components/field) for primitive props, events, slots, and state attributes.

## Examples

### Required Field

::component-preview{name="field-2"}
::

### Disabled Field

::component-preview{name="field-3"}
::

### With Error

Enter an invalid email address and press enter to see the error.

::component-preview{name="field-4"}
::

### With Validity

The default slot of `FieldDescription` and `FieldError` receives the field state.

::component-preview{name="field-5"}
::

### Input Group

::component-preview{name="field-6"}
::

### Autocomplete Field

::component-preview{name="field-7"}
::

### Combobox Field

::component-preview{name="field-8"}
::

### Combobox Multiple Field

::component-preview{name="field-9"}
::

### Select Field

::component-preview{name="field-11"}
::

### Checkbox Field

::component-preview{name="field-12"}
::

### Checkbox Group Field

::component-preview{name="field-13"}
::

### Radio Group Field

::component-preview{name="field-14"}
::

### Switch Field

::component-preview{name="field-15"}
::

### Slider Field

::component-preview{name="field-16"}
::

### Number Field

::component-preview{name="field-17"}
::

### Complete Form Example

::component-preview{name="field-18"}
::
