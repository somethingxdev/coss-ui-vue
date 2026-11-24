---
preview: badge-1
---

## Usage

```ts
import { Badge } from '@/components/ui/badge'
```

```vue
<Badge>
Badge
</Badge>
```

## Link

You can use the `as` prop to make another component look like a badge. Here's an example of a link that looks like a badge.

```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge :as="RouterLink" to="/pricing">
    New
  </Badge>
</template>
```

## API Reference

This component uses styled HTML elements.

### Badge

A badge component with variant and size options.

| Prop      | Type                                                                                                    | Default     | Description                                  |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------- |
| `variant` | `"default" \| "destructive" \| "error" \| "info" \| "outline" \| "secondary" \| "success" \| "warning"` | `"default"` | Controls the badge styling and color scheme  |
| `size`    | `"default" \| "sm" \| "lg"`                                                                             | `"default"` | Controls the badge size                      |
| `as`      | `string \| Component`                                                                                   | `"span"`    | Render as a different element (e.g., a link) |

## Examples

### Outline

::component-preview{name="badge-2"}
::

### Secondary

::component-preview{name="badge-3"}
::

### Destructive

::component-preview{name="badge-4"}
::

### Info

::component-preview{name="badge-5"}
::

### Success

::component-preview{name="badge-6"}
::

### Warning

::component-preview{name="badge-7"}
::

### Error

::component-preview{name="badge-8"}
::

### Small

::component-preview{name="badge-9"}
::

### Large

::component-preview{name="badge-10"}
::

### With Icon

::component-preview{name="badge-11"}
::

### With Link

::component-preview{name="badge-12"}
::

### With Count

::component-preview{name="badge-13"}
::
