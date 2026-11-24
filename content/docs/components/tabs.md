---
preview: tabs-1
---

## Usage

```ts
import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs'
```

```vue
<Tabs default-value="tab-1">
  <TabsList>
    <TabsTab value="tab-1">Tab 1</TabsTab>
    <TabsTab value="tab-2">Tab 2</TabsTab>
    <TabsTab value="tab-3">Tab 3</TabsTab>
  </TabsList>
  <TabsPanel value="tab-1">Tab 1 content</TabsPanel>
  <TabsPanel value="tab-2">Tab 2 content</TabsPanel>
  <TabsPanel value="tab-3">Tab 3 content</TabsPanel>
</Tabs>
```

## API Reference

See the [Vase UI tabs reference](https://vase-ui.com/components/tabs) for primitive props, events, slots, and state attributes.

## Examples

Tabs use the same optical sizing as segmented controls. The default surface is slightly taller than a Button of the same size so its inset active indicator remains visually balanced alongside adjacent controls.

### Small

::component-preview{name="tabs-14"}
::

### Large

::component-preview{name="tabs-15"}
::

### Underline Variant

::component-preview{name="tabs-2"}
::

### Vertical Orientation

::component-preview{name="tabs-3"}
::

### Underline with Vertical Orientation

::component-preview{name="tabs-4"}
::
