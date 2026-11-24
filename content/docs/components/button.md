---
preview: button-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
```

```vue
<Button>
Button
</Button>
```

## Link

Use the `as` prop to make another element or component look like a button. Here's a router link that looks like a button.

```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button :as="RouterLink" to="/login">
    Login
  </Button>
</template>
```

## API Reference

See the [Vase UI button reference](https://vase-ui.com/components/button) for primitive props, events, slots, and state attributes.

## Examples

### Default

::component-preview{name="button-1"}
::

### Outline

::component-preview{name="button-2"}
::

### Secondary

::component-preview{name="button-3"}
::

### Destructive

::component-preview{name="button-4"}
::

### Destructive Outline

::component-preview{name="button-5"}
::

### Ghost

::component-preview{name="button-6"}
::

### Link

::component-preview{name="button-7"}
::

### Extra-small Size

::component-preview{name="button-8"}
::

### Small Size

::component-preview{name="button-9"}
::

### Large Size

::component-preview{name="button-10"}
::

### Extra-large Size

::component-preview{name="button-11"}
::

### Disabled

::component-preview{name="button-12"}
::

### Icon

::component-preview{name="button-13"}
::

### Icon Small Size

::component-preview{name="button-14"}
::

### Icon Large Size

::component-preview{name="button-15"}
::

### With Icon

::component-preview{name="button-16"}
::

### With Link

::component-preview{name="button-17"}
::

### Loading (Built-in Prop)

::component-preview{name="button-41"}
::
