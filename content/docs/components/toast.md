---
preview: toast-1
---

## Usage

### Stacked Toasts

```ts
import { toastManager } from '@/components/ui/toast'
```

```ts
toastManager.add({
  title: 'Event has been created',
  description: 'Monday, January 3rd at 6:00pm',
})
```

By default, toasts appear in the **bottom-right** corner. You can change this by setting the `position` prop on the `ToastProvider`.

Allowed values: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`. For example:

```vue
<ToastProvider position="top-center">
  <slot />
</ToastProvider>
```

### Deduplicated toasts (upsert)

Pass a stable `id` when calling `toastManager.add`. If a toast with that `id` is still showing, Vase UI updates it in place, restarts the auto-dismiss timer, and increments its `version`. The styled toast replays a short re-notify animation on each update.

```ts
toastManager.add({
  id: 'save-status',
  title: 'Saved',
  description: 'Your draft was updated.',
})
```

::component-preview{name="toast-10"}
::

### Anchored Toasts

For toasts positioned relative to a specific element, use `anchoredToastManager`. The `AnchoredToastProvider` is typically added to your app layout (alongside `ToastProvider`), so you can use `anchoredToastManager` directly in your components:

```ts
anchoredToastManager.add({
  title: 'Copied!',
  positionerProps: {
    anchor: buttonRef.value,
  },
})
```

You can also style anchored toasts like tooltips by passing `data: { tooltipStyle: true }`. When using tooltip style, only the `title` is displayed (description and other content are ignored):

```ts
anchoredToastManager.add({
  title: 'Copied!',
  positionerProps: {
    anchor: buttonRef.value,
  },
  data: {
    tooltipStyle: true,
  },
})
```

::component-preview{name="toast-12"}
::

## API Reference

See the [Vase UI toast reference](https://vase-ui.com/components/toast) for primitive props, events, slots, and state attributes.

## Examples

### With Status

::component-preview{name="toast-2"}
::

### Loading

::component-preview{name="toast-3"}
::

### With Action

::component-preview{name="toast-4"}
::

### Promise

::component-preview{name="toast-5"}
::

### With Varying Heights

::component-preview{name="toast-6"}
::

### Copy Button with Anchored Toast

::component-preview{name="toast-7"}
::
