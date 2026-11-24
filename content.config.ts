import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/components/*.md',
      schema: z.object({
        preview: z.string().optional(),
      }),
    }),
  },
})
