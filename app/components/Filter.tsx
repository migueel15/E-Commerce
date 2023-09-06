"use client"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

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
      { text: "Hombre", id: "gender-m" },
      { text: "Mujer", id: "gender-l" },
    ],
  }

  const map = (fil: typeof filter.size) => {
    return fil.map((el) => {
      return (
        <li key={el.id} className="mr-3 select-none">
          <div className="flex items-center mb-4">
            <input
              id={el.id}
              type="checkbox"
              value={el.id}
              className="w-4 h-4 bg-gray-700"
              onClick={() => {
                console.log(document.getElementById(el.id).checked)
              }}
            />
            <label
              htmlFor={el.id}
              className="pl-1 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {el.text}
            </label>
          </div>
        </li>
      )
    })
  }

  return (
    <div id="leftFilter" className="">
      <ul>
        <h1>Talla</h1>
        <div className="flex">{map(filter.size)}</div>
        <h1>Sexo</h1>
        <div className="flex">{map(filter.gender)}</div>
      </ul>
    </div>
  )
}
