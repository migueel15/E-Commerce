export default function ShoppingBag() {
  return (
    <button className="relative">
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
        />
      </svg>
      <span className="z-10 absolute bottom-[-10px] text-[#2e3440] font-semibold left-[-5px] bg-[#81a1c1] w-5 h-5 flex items-center justify-center rounded-full">
        4
      </span>
    </button>
  )
}
