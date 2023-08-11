import type { Gender, Size } from "./product"

export interface Sanity {
  query: string
  result: Result[]
  ms: number
}

export interface Result {
  description: Description[]
  discount: number
  title: string
  sizes: Size[]
  _createdAt: Date
  _id: string
  images: Image[]
  _rev: string
  price: number
  _updatedAt: Date
  slug: Slug
  gender?: Gender[]
  _type: string
}

export interface Description {
  children: Child[]
  _type: string
  style: string
  _key: string
  markDefs: any[]
}

export interface Child {
  _type: string
  marks: any[]
  text: string
  _key: string
}

export interface Image {
  _type: string
  _key: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Slug {
  current: string
  _type: string
}
