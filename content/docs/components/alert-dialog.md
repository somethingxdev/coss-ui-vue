---
preview: alert-dialog-1
---

## Usage

```ts
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
```

```vue
<AlertDialog>
  <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogClose>Cancel</AlertDialogClose>
      <AlertDialogClose>Delete Account</AlertDialogClose>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>
```

## API Reference

See the [Vase UI alert dialog reference](https://vase-ui.com/components/alert-dialog) for primitive props, events, slots, and state attributes.

## Examples

### Alert Dialog with Bare Footer

::component-preview{name="alert-dialog-2"}
::
