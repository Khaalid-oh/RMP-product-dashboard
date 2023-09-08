import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function Input() {
  const dropLists = [
    { icon: <AiOutlineSearch />, name: "Product Name or SKU" },
    { icon: <AiOutlineSearch />, name: "Vendor Name or Vendor SKU" }
  ]
  return (
    <div className="flex gap-4">
      {dropLists.map((search, i) => (
        <label
          key={i}
          htmlFor="text"
          className="relative text-gray-400 focus-within:text-gray-900"
        >
          <span className="absolute top-[10px] left-[6px]">{search.icon}</span>
          <input
            type="text"
            placeholder={search.name}
            className="flex items-center justify-center gap-2 border-[1px] border-gray-400 p-2 pl-7 rounded-lg cursor-pointer text-sm focus:border-gray-600 focus:outline-none"
          />
        </label>
      ))}
      {/* <div className="relative flex justify-center items-center">
      <select className="w-full p-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600 text-sm">
      <option>On Sale</option>
      <option>Laravel 9 with React</option>
      <option>React with Tailwind CSS</option>
      <option>React With Headless UI</option>
      </select>
      </div> */}
    </div>
  );
}

export default Input //
