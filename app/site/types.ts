export interface ComponentDoc {
  slug: string
  title: string
  description: string
  /** The page of the original React component on coss.com. */
  coss: boolean
  /** Vase UI reference slug, or false for components without a primitive reference. */
  vase?: string | false
}

export interface NavGroup {
  title: string
  items: { title: string, to: string }[]
}
