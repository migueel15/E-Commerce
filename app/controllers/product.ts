import { ProductModel } from "../models/product"
import type { Filter } from "../types/product"

export class ProductController {
  static async showFiltered(props: Filter) {
    return await ProductModel.getProductsFiltered({
      minPrice: props.minPrice,
      maxPrice: props.maxPrice,
      sizes: props.sizes,
      genders: props.genders,
    })
  }
}
