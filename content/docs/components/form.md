---
preview: form-1
---

## Usage

```ts
import {
  Field,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
```

```vue
<script setup lang="ts">
function onSubmit(event: SubmitEvent) {
  /* handle submit */
}
</script>

<template>
  <Form class="flex w-full flex-col gap-4" @submit="onSubmit">
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input name="email" type="email" required />
      <FieldError>Please enter a valid email.</FieldError>
    </Field>
  </Form>
</template>
```

## API Reference

See the [Vase UI form reference](https://vase-ui.com/components/form) for primitive props, events, slots, and state attributes.

## Examples

### Using with Zod

This example validates by hand to stay dependency-free; swap `validate` for a zod schema's `safeParse` to use zod.

::component-preview{name="form-2"}
::
