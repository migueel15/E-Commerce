import type { Product, Size } from "../types/product"

export default function Card({ product }: { product: Product }) {
  const showSizes = () => {
    const sizes: Size[] = ["S", "M", "L", "XL", "XXL"]
    return sizes.map((el) => {
      let color = "text-[#4c566a]"
      if (product.sizes.includes(el)) {
        color = "text-[#d8dee9]"
      }
      return (
        <span className={`mr-2 ${color}`} key={el}>
          {el}
        </span>
      )
    })
  }

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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2e3440] dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={product.images[0]}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">{showSizes()}</div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {product.price}€
          </span>
          <div className="flex">
            <a
              href="#"
              className="flex justify-center items-center  text-white border border-[#5e81ac] border-2 fill-none hover:fill-current focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-[#81a1c1]"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 19"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                />
              </svg>
            </a>

            <a
              href="#"
              className="flex justify-center items-center ml-2 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#5e81ac] dark:hover:bg-[#81a1c1]"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 21"
              >
                <path d="M15 14H7.78l-.5-2H16a1 1 0 0 0 .962-.726l.473-1.655A2.968 2.968 0 0 1 16 10a3 3 0 0 1-3-3 3 3 0 0 1-3-3 2.97 2.97 0 0 1 .184-1H4.77L4.175.745A1 1 0 0 0 3.208 0H1a1 1 0 0 0 0 2h1.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 10 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3Zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                <path d="M19 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 1 0 0-2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
