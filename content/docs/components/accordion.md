---
preview: accordion-1
---

## Usage

```ts
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/components/ui/accordion'
```

```vue
<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionPanel>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```

## API Reference

See the [Vase UI accordion reference](https://vase-ui.com/components/accordion) for primitive props, events, slots, and state attributes.

## Examples

### Single Accordion

::component-preview{name="accordion-2"}
::

### Multiple Accordion

::component-preview{name="accordion-3"}
::

### Controlled Accordion

::component-preview{name="accordion-4"}
::
