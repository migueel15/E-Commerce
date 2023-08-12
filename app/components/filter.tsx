"use client"

export default function FilterBar() {
  const filter = {
    min: { text: "Precio mínimo", id: "min-price" },
    max: { text: "Precio máximo", id: "max-price" },
    size: [
      { text: "S", id: "size-s" },
      { text: "M", id: "size-m" },
      { text: "L", id: "size-l" },
      { text: "XL", id: "size-xl" },
      { text: "XXL", id: "size-xxl" },
    ],
    gender: [
      { text: "Male", id: "gender-m" },
      { text: "Woman", id: "gender-l" },
    ],
  }

  const map = (filter: Array) => {
    return filter.map((el) => {
      return (
        <li key={el.id} id={el.id}>
          <input type="checkbox" name={el.text} id={el.text} />
          <label htmlFor={el.text}>{el.text}</label>
        </li>
      )
    })
  }

  return (
    <div id="leftFilter" className="bg-blue-400 w-[15%]">
      <ul>
        <li>
          <label htmlFor={filter.min.id}>{filter.min.text}</label>
          <input id={filter.min.id} type="text" />
        </li>
        <li>
          <label htmlFor={filter.max.id}>{filter.max.text}</label>
          <input id={filter.max.id} type="text" />
        </li>
        <h1>Size</h1>
        {map(filter.size)}
        <h1>Gender</h1>
        {map(filter.gender)}
      </ul>
    </div>
  )
}
