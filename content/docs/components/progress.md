---
preview: progress-1
---

## Usage

```ts
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'
```

```vue
<Progress :value="40" />
```

Note: If you render slot content inside `Progress`, you must also include `ProgressTrack` and `ProgressIndicator` inside it. Without them, the bar will not display. When no slot content is provided, a default track and indicator are rendered for you.

## API Reference

See the [Vase UI progress reference](https://vase-ui.com/components/progress) for primitive props, events, slots, and state attributes.

## Examples

### With Label and Value

::component-preview{name="progress-2"}
::

### With Formatted Value

::component-preview{name="progress-3"}
::
