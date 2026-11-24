---
preview: otp-field-1
---

## Usage

```ts
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from '@/components/ui/otp-field'
```

```vue
<OTPField aria-label="Verification code" :length="6">
  <OTPFieldInput :index="0" />
  <OTPFieldInput :index="1" />
  <OTPFieldInput :index="2" />
  <OTPFieldSeparator />
  <OTPFieldInput :index="3" />
  <OTPFieldInput :index="4" />
  <OTPFieldInput :index="5" />
</OTPField>
```

## API Reference

See the [Vase UI otp field reference](https://vase-ui.com/components/otp-field) for primitive props, events, slots, and state attributes.

## Examples

### Large

::component-preview{name="otp-field-2"}
::

### With Separator

::component-preview{name="otp-field-3"}
::

### With Label

::component-preview{name="otp-field-4"}
::

### Custom pattern

Pass a regular expression as `pattern` to enforce custom character rules; characters that do not match are dropped when typed or pasted. Use `input-mode` for the virtual keyboard hint.

::component-preview{name="otp-field-6"}
::

### Auto Validation

::component-preview{name="otp-field-7"}
::

### Alphanumeric

Use `pattern="alphanumeric"` for recovery, backup, or invite codes that mix letters and numbers.

::component-preview{name="otp-field-8"}
::

### Placeholder hints

Pass `placeholder` to a slot to show a hint while it is empty. The hint hides in the active slot, where the caret is.

::component-preview{name="otp-field-9"}
::

### Masked entry

Pass `mask` on the root when the code should be obscured while it is typed (e.g. shared screens).

::component-preview{name="otp-field-10"}
::
