---
preview: alert-1
---

## Usage

```ts
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
```

```vue
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

## API Reference

This component uses styled HTML elements.

### Alert

Root container for the alert.

| Prop      | Type                                                       | Default     | Description                                 |
| --------- | ---------------------------------------------------------- | ----------- | ------------------------------------------- |
| `variant` | `"default" \| "error" \| "info" \| "success" \| "warning"` | `"default"` | Controls the alert styling and color scheme |

### AlertTitle

Title text for the alert. Renders as a styled `div`.

### AlertDescription

Description text for the alert. Renders as a styled `div` with muted foreground color.

### AlertAction

Container for action buttons. Automatically positions to the right on larger screens.

## Examples

### With Icon

::component-preview{name="alert-2"}
::

### With Icon and Action Buttons

::component-preview{name="alert-3"}
::

### Info Alert

::component-preview{name="alert-4"}
::

### Success Alert

::component-preview{name="alert-5"}
::

### Warning Alert

::component-preview{name="alert-6"}
::

### Error Alert

::component-preview{name="alert-7"}
::
