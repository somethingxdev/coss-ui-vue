<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

type MenuCheckboxItemProps = ComponentProps<typeof MenuPrimitive.CheckboxItem>

interface Props extends /* @vue-ignore */ Omit<MenuCheckboxItemProps, 'value'> {
  variant?: 'default' | 'switch'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <MenuPrimitive.CheckboxItem
    data-slot="menu-checkbox-item"
    :class="cn(
      `grid min-h-8 cursor-default items-center gap-2 rounded-sm py-1 ps-2 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      props.variant === 'switch' ? 'grid-cols-[1fr_auto] gap-4 pe-1.5' : 'grid-cols-[.75rem_1fr] pe-4',
      props.class,
    )"
  >
    <template v-if="props.variant === 'switch'">
      <span class="in-aria-checked:visible invisible col-start-1"><slot /></span>
      <span
        aria-hidden="true"
        class="inset-shadow-[0_1px_--theme(--color-black/4%)] inline-flex h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 items-center rounded-full p-px outline-none transition-[background-color,box-shadow] duration-200 [--thumb-size:--spacing(4)] in-aria-checked:bg-primary bg-input data-disabled:opacity-64 sm:[--thumb-size:--spacing(3)]"
      >
        <span class="pointer-events-none block aspect-square h-full in-[[data-slot=menu-checkbox-item][aria-checked=true]]:origin-[var(--thumb-size)_50%] origin-left in-[[data-slot=menu-checkbox-item][aria-checked=true]]:translate-x-[calc(var(--thumb-size)-4px)] in-[[data-slot=menu-checkbox-item]:active]:not-data-disabled:scale-x-110 in-[[data-slot=menu-checkbox-item]:active]:rounded-[var(--thumb-size)/calc(var(--thumb-size)*1.10)] rounded-(--thumb-size) bg-background shadow-sm/5 will-change-transform [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] rtl:in-[[data-slot=menu-checkbox-item][aria-checked=true]]:origin-left rtl:origin-right rtl:in-[[data-slot=menu-checkbox-item][aria-checked=true]]:-translate-x-[calc(var(--thumb-size)-4px)]" />
      </span>
    </template>
    <template v-else>
      <span aria-hidden="true" class="in-aria-checked:visible invisible col-start-1 -ms-0.5">
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      </span>
      <span class="col-start-2"><slot /></span>
    </template>
  </MenuPrimitive.CheckboxItem>
</template>
