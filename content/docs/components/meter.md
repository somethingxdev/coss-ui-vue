---
preview: meter-1
---

## Usage

```ts
import { Meter, MeterLabel, MeterValue } from '@/components/ui/meter'
```

```vue
<Meter :value="40">
  <MeterLabel>Progress</MeterLabel>
  <MeterValue />
</Meter>
```

## API Reference

See the [Vase UI meter reference](https://vase-ui.com/components/meter) for primitive props, events, slots, and state attributes.

## Examples

### Without Label and Value

::component-preview{name="meter-2"}
::

### With Formatted Value

::component-preview{name="meter-3"}
::

### With Range

::component-preview{name="meter-4"}
::
