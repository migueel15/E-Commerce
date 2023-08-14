import { client, getImage } from "../database/client"
import type { Filter, Gender, Product } from "../types/product"
import type { Result, Image } from "../types/sanity"

const mapValues = (response: Result[], products: Product[]) => {
  response.forEach((product) => {
    const images = product.images.map((img: Image) => {
      return getImage(img)
    })

    products.push({
      id: product._id,
      title: product.title,
      slug: product.slug.current,
      description:
        product.description !== undefined
          ? product.description[0].children[0].text
          : "",
      price: product.price,
      currency: "EUR",
      sizes: product.sizes,
      discount: product.discount,
      gender: product.gender !== undefined ? product.gender : [],
      images,
    })
  })
}

export class ProductModel {
  static async getAllProducts() {
    const query = '*[_type == "product"]'
    const response = await client.fetch<Result[]>(query)
    // const response = (await import("../../public/production.json")).result

    const products: Product[] = []
    mapValues(response, products)
    return products
  }

  static async getProductsByPrice({ price }: { price: number }) {
    const products = await this.getAllProducts()
    return products.filter((product) => {
      return product.price < price
    })
  }

  static async getProductsByGender({ gender }: { gender: Gender }) {
    const products = await this.getAllProducts()
    return products.filter((product) => {
      return product.gender.includes(gender)
    })
  }

  static async getProductsFiltered(props: Filter) {
    const checkMin = (product: Product) => {
      if (props.minPrice !== undefined) {
        return props.minPrice <= product.price
      } else {
        return true
      }
    }
    const checkMax = (product: Product) => {
      if (props.maxPrice !== undefined) {
        return props.maxPrice >= product.price
      } else {
        return true
      }
    }
    const checkSize = (product: Product) => {
      if (props.sizes !== undefined) {
        return props.sizes.every((size) => product.sizes.includes(size))
      } else {
        return true
      }
    }
    const checkGender = (product: Product) => {
      if (props.genders !== undefined) {
        return props.genders.every((val) => product.gender.includes(val))
      } else {
        return true
      }
    }

    const products = await this.getAllProducts()
    return products.filter((product) => {
      return (
        checkMin(product) &&
        checkMax(product) &&
        checkGender(product) &&
        checkSize(product)
      )
    })
  }
}
