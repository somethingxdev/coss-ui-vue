import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash, top: 80 }
    if (to.path !== from.path)
      return { top: 0 }
  },
} satisfies RouterConfig
