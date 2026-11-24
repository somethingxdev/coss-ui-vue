---
preview: textarea-1
---

## Usage

```ts
import { Textarea } from '@/components/ui/textarea'
```

```vue
<Textarea />
```

## Label and validation

`Textarea` renders a native `<textarea>`. Link an explicit `id` to a `Label` and pass native validation attributes such as `required` and `minlength` directly.

```vue
<Label for="bio">
Bio
</Label>

<Textarea id="bio" name="bio" placeholder="Tell us about yourself…" required />
```

## API Reference

### Textarea

A styled native `<textarea>` with custom size options.

| Prop         | Type                                  | Default     | Description                                                       |
| ------------ | ------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `size`       | `"sm" \| "default" \| "lg" \| number` | `"default"` | Controls the textarea padding                                     |
| `unstyled`   | `boolean`                             | `false`     | When true, removes the outer border, background, and focus styles |
| `modelValue` | `string`                              | -           | The textarea value. Use `v-model` for two-way binding             |

Other attributes (`placeholder`, `rows`, `disabled`, …) are passed to the inner `<textarea>`; `class` goes to the wrapper.

## Examples

### Small Size

::component-preview{name="textarea-2"}
::

### Large Size

::component-preview{name="textarea-3"}
::

### Disabled

::component-preview{name="textarea-4"}
::

### With Label

::component-preview{name="textarea-5"}
::

### Form Integration

::component-preview{name="textarea-6"}
::
