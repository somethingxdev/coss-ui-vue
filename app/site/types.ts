export interface ComponentDoc {
  slug: string
  title: string
  description: string
  /** The page of the original React component on coss.com. */
  coss: boolean
}

export interface NavGroup {
  title: string
  items: { title: string, to: string }[]
}
