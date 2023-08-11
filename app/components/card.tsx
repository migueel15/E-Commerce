import type { Product } from "../types/product"

export default function Card({ product }: { product: Product }) {
  const showImages = () => {
    return (
      <div className="flex">
        {product.images.map((image, key) => {
          return (
            <img
              className="w-[100px]"
              key={key}
              src={image}
              alt={product.slug}
            ></img>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <p>Price: {product.price}</p>
      {showImages()}
    </div>
  )
}
