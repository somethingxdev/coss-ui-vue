---
preview: avatar-1
---

## Usage

```ts
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'
```

```vue
<Avatar>
  <AvatarImage src="/avatars/01.png" alt="User avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

Use `keep-mounted` when the image relies on native lazy loading or an optimized image component. The fallback remains visible while the image loads or if it fails:

```vue
<Avatar>
  <AvatarImage
    src="/avatars/01.png"
    alt="User avatar"
    loading="lazy"
    keep-mounted
  />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Sizing

Every dimension of an avatar comes from one inherited custom property, `--avatar-size`. It defaults to 32px, and the font size, the group overlap, the gap and the initials nudge are all derived from it.

Set it on the avatar, on a group, or on any ancestor:

```vue
<Avatar class="[--avatar-size:--spacing(12)]">
…
</Avatar>

<AvatarGroup class="[--avatar-size:--spacing(6)]">
…
</AvatarGroup>

<div class="[--avatar-size:--spacing(10)]">
  <!-- every avatar below is 40px -->
</div>
```

A `size-*` utility still resizes a single avatar, because tailwind-merge replaces the base size utility. It does **not** update `--avatar-size`, so the font size and any group geometry stay at the inherited value. Prefer `--avatar-size` and reach for `size-*` only when you want the box to change and nothing else.

::component-preview{name="avatar-3"}
::

Because the property is inherited, one declaration on a container sizes every avatar inside it.

## API Reference

See the [Vase UI avatar reference](https://vase-ui.com/components/avatar) for primitive props, events, slots, and state attributes.

## Examples

### Fallback Only

::component-preview{name="avatar-2"}
::

### Different Radius

::component-preview{name="avatar-4"}
::

### Group Avatars

::component-preview{name="avatar-5"}
::

### Last Avatar On Top

Set `topmost="last"` for the conventional order, where the last avatar is the one left intact.

::component-preview{name="avatar-16"}
::
