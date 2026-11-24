import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'

export { default as TooltipContent, default as TooltipPopup } from './TooltipPopup.vue'
export { default as TooltipTrigger } from './TooltipTrigger.vue'

export const Tooltip = TooltipPrimitive.Root
export const createTooltipController = TooltipPrimitive.createHandle
export { TooltipPrimitive }
