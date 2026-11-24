import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'

export { default as PopoverClose } from './PopoverClose.vue'
export { default as PopoverDescription } from './PopoverDescription.vue'
export { default as PopoverContent, default as PopoverPopup } from './PopoverPopup.vue'
export { default as PopoverTitle } from './PopoverTitle.vue'
export { default as PopoverTrigger } from './PopoverTrigger.vue'

export const Popover = PopoverPrimitive.Root
export const createPopoverController = PopoverPrimitive.createHandle
export { PopoverPrimitive }
