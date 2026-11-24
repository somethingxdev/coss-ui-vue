<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { ContextMenu } from '@vase-ui/vue/context-menu'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

type MenuContentProps = ComponentProps<typeof MenuPrimitive.Popup>
type PositionerProps = ComponentProps<typeof MenuPrimitive.Positioner>

interface Props extends /* @vue-ignore */ MenuContentProps {
  align?: PositionerProps['align']
  sideOffset?: PositionerProps['sideOffset']
  contextMenu?: boolean
  sub?: boolean
  side?: PositionerProps['side']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
  align: 'center',
})
</script>

<template>
  <MenuPrimitive.Portal>
    <component :is="props.contextMenu ? ContextMenu.Positioner : MenuPrimitive.Positioner" class="z-50" :align="props.align" :side-offset="props.sideOffset" :side="props.side ?? (props.sub ? 'right' : 'bottom')">
      <MenuPrimitive.Popup
        v-bind="$attrs"
        :class="cn(
          `flex not-[class*='w-']:min-w-32 origin-(--transform-origin) overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 outline-none [--menu-height:var(--available-height)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] focus:outline-none dark:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
          props.class,
        )"
      >
        <!-- --available-height does not inherit, so the content copies it for this scroller. -->
        <div class="max-h-(--menu-height) w-full overflow-y-auto p-1">
          <slot />
        </div>
      </MenuPrimitive.Popup>
    </component>
  </MenuPrimitive.Portal>
</template>
