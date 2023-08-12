export default function Header() {
  return (
    <header className="flex bg-[#2e3440] h-[3em] items-center justify-center">
      <h1 className="p-2 m-auto">E-Commerce</h1>
      <nav className="bg-red-600 m-auto">
        <ul className="flex">
          <li className="p-2">
            <a href="/productos">Productos</a>
          </li>
          <li className="p-2">
            <a href="/carrito">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
