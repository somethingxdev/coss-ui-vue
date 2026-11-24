import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

export { default as DropdownMenuCheckboxItem, default as MenuCheckboxItem } from './MenuCheckboxItem.vue'
export { default as DropdownMenuLabel, default as MenuGroupLabel } from './MenuGroupLabel.vue'
export { default as DropdownMenuItem, default as MenuItem } from './MenuItem.vue'
export { default as MenuLinkItem } from './MenuLinkItem.vue'
export { default as DropdownMenuContent, default as MenuPopup } from './MenuPopup.vue'
export { default as DropdownMenuRadioItem, default as MenuRadioItem } from './MenuRadioItem.vue'
export { default as DropdownMenuSeparator, default as MenuSeparator } from './MenuSeparator.vue'
export { default as DropdownMenuShortcut, default as MenuShortcut } from './MenuShortcut.vue'
export { default as DropdownMenuSubContent, default as MenuSubPopup } from './MenuSubPopup.vue'
export { default as DropdownMenuSubTrigger, default as MenuSubTrigger } from './MenuSubTrigger.vue'
export { default as DropdownMenuTrigger, default as MenuTrigger } from './MenuTrigger.vue'

const { Root: Menu, Group: MenuGroup, RadioGroup: MenuRadioGroup, SubmenuRoot: MenuSub, createHandle } = MenuPrimitive

export {
  createHandle as createMenuController,
  Menu as DropdownMenu,
  createHandle as DropdownMenuCreateHandle,
  MenuGroup as DropdownMenuGroup,
  MenuRadioGroup as DropdownMenuRadioGroup,
  MenuSub as DropdownMenuSub,
  Menu,
  createHandle as MenuCreateHandle,
  MenuGroup,
  MenuPrimitive,
  MenuRadioGroup,
  MenuSub,
}
