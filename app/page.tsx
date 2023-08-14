import { ProductController } from "./controllers/product"
import Card from "./components/card"

export default async function Home() {
  const products = await ProductController.showFiltered({})
  return (
    <main className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {products.map((producto) => {
        return <Card key={producto.id} product={producto} />
      })}
    </main>
  )
}
