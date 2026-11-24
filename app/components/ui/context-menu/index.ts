import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'

export {
  MenuCheckboxItem as ContextMenuCheckboxItem,
  MenuGroup as ContextMenuGroup,
  MenuGroupLabel as ContextMenuGroupLabel,
  MenuItem as ContextMenuItem,
  MenuLinkItem as ContextMenuLinkItem,
  MenuRadioGroup as ContextMenuRadioGroup,
  MenuRadioItem as ContextMenuRadioItem,
  MenuSeparator as ContextMenuSeparator,
  MenuShortcut as ContextMenuShortcut,
  MenuSub as ContextMenuSub,
  MenuSubPopup as ContextMenuSubPopup,
  MenuSubTrigger as ContextMenuSubTrigger,
} from '../menu'
export { default as ContextMenuPopup } from './ContextMenuPopup.vue'
export { default as ContextMenuTrigger } from './ContextMenuTrigger.vue'

export const ContextMenu = ContextMenuPrimitive.Root
export { ContextMenuPrimitive }
