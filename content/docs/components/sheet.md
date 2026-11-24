---
preview: sheet-1
---

## Usage

```ts
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
```

```vue
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetPopup>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
    <SheetPanel>Content</SheetPanel>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetPopup>
</Sheet>
```

## API Reference

### Sheet

Root component. Alias for `Dialog` from [Vase UI](https://vase-ui.com/components/dialog). Supports `v-model:open`.

### SheetTrigger

Trigger button that opens the sheet. Wrapper for `Dialog.Trigger` from Vase UI. Pass `as` to render another component, such as `Button`.

### SheetPopup

Popup container that displays the sheet content. Styled wrapper for Vase UI’s `Dialog.Popup`, rendered through a portal and pinned to the chosen side. Also exported as `SheetContent`.

| Prop              | Type                                     | Default     | Description                                                                        |
| ----------------- | ---------------------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `side`            | `"right" \| "left" \| "top" \| "bottom"` | `"right"`   | Controls which side of the screen the sheet opens from                             |
| `variant`         | `"default" \| "inset"`                   | `"default"` | Controls the sheet style. `inset` adds spacing around the sheet on desktop screens |
| `showCloseButton` | `boolean`                                | `true`      | When true, displays a close button in the top-right corner                         |
| `closeProps`      | `DialogCloseProps`                       | -           | Props forwarded to the internal close button                                       |

Other props, such as `initialFocus` and `finalFocus`, are forwarded to `Dialog.Popup`.

**Example:**

```vue
<!-- Right side sheet (default) -->
<SheetPopup side="right">
  ...
</SheetPopup>

<!-- Left side sheet -->
<SheetPopup side="left">
  ...
</SheetPopup>

<!-- Top sheet -->
<SheetPopup side="top">
  ...
</SheetPopup>

<!-- Bottom sheet -->
<SheetPopup side="bottom">
  ...
</SheetPopup>

<!-- Sheet with inset variant -->
<SheetPopup side="right" variant="inset">
  ...
</SheetPopup>
```

### SheetHeader

Container for the sheet title and description.

### SheetFooter

Footer section for action buttons.

| Prop      | Type                  | Default     | Description                                                                                |
| --------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `variant` | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them |

### SheetTitle

Title component. Styled wrapper for `Dialog.Title` from Vase UI.

### SheetDescription

Description component. Styled wrapper for `Dialog.Description` from Vase UI.

### SheetPanel

Scrollable content container. Automatically wraps content in a `ScrollArea` component.

| Prop         | Type      | Default | Description                                    |
| ------------ | --------- | ------- | ---------------------------------------------- |
| `scrollFade` | `boolean` | `true`  | When true, shows a fade effect at scroll edges |

**Example:**

```vue
<SheetPanel>
  <!-- Long content that will scroll if it exceeds the sheet height -->
  <div>...</div>
</SheetPanel>
```

### SheetClose

Close button component. Wrapper for `Dialog.Close` from Vase UI. Pass `as` to render another component.

### SheetBackdrop

Backdrop/overlay component. Also exported as `SheetOverlay`. Styled wrapper for `Dialog.Backdrop` from Vase UI. `SheetPopup` renders it internally.

## Examples

### Sheet with Inset

::component-preview{name="sheet-2"}
::

### Side sheets

::component-preview{name="sheet-3"}
::
