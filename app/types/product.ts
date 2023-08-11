export type Size = "S" | "M" | "L" | "XL" | "XXL"
export type Gender = "M" | "F"

export interface Product {
  id: string
  title: string
  slug: string
  description?: string
  price: number
  currency: "EUR" | "USD"
  images: string[]
  sizes: Size[]
  discount: number
  gender: Gender[]
}

export interface Filter {
  minPrice?: number
  maxPrice?: number
  genders?: Gender[]
  sizes?: Size[]
}
