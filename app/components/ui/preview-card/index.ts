import { PreviewCard as PreviewCardPrimitive } from '@vase-ui/vue/preview-card'

export { default as HoverCardContent, default as PreviewCardPopup } from './PreviewCardPopup.vue'
export { default as HoverCardTrigger, default as PreviewCardTrigger } from './PreviewCardTrigger.vue'

export const PreviewCard = PreviewCardPrimitive.Root
export const HoverCard = PreviewCard
export { PreviewCardPrimitive }
