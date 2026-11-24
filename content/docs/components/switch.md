---
preview: switch-5
---

## Usage

```ts
import { Switch } from '@/components/ui/switch'
```

```vue
<Switch />
```

## API Reference

See the [Vase UI switch reference](https://vase-ui.com/components/switch) for primitive props, events, slots, and state attributes.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap checkboxes. See the related example: [Switch field](/docs/components/field#switch-field).

### Customizing Size

The switch size is controlled by the `--thumb-size` CSS variable. By default, the switch uses responsive sizing with `[--thumb-size:--spacing(5)] sm:[--thumb-size:--spacing(4)]` classes, making it slightly larger on mobile devices (like other interactive elements).

You can customize the size by overriding these CSS variable classes on the component. The `--thumb-size` value can be expressed using:

- The spacing scale: `--spacing(3)`, `--spacing(4)`, `--spacing(5)`, etc.
- Fixed units: `1rem`, `16px`, etc.

::component-preview{name="switch-6"}
::

### Form Integration

::component-preview{name="switch-5"}
::
