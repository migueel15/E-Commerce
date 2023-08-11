"use client"
import { useEffect, useState } from "react"
import { ProductController } from "./controllers/product"
import type { Product, Filter } from "./types/product"
import Card from "./components/card"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getData = async () => {
      const products = await ProductController.showFiltered({})
      setProducts(products)
    }
    getData().catch(console.error)
  }, [])

  return (
    <main>
      {products.map((producto) => {
        return <Card key={producto.id} product={producto} />
      })}
    </main>
  )
}
