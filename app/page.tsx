import { ProductController } from "./controllers/product"
import Card from "./components/card"

export default async function Home() {
  const products = await ProductController.showFiltered({})
  return (
    <main className="p-5 grid gap-2 grid-cols-4">
      {products.map((producto) => {
        return <Card key={producto.id} product={producto} />
      })}
    </main>
  )
}
