import React, { useState } from 'react'

function Sidebar() {
const sidebar = [
  { id: 0, name: "Jewelry" },
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothes" },
  { id: 3, name: "Shoes" },
];


  const [activeBar, setActiveBar] = useState <number | null> (0)

  const handleActivebar =  (val: number)  =>  {
    setActiveBar(val)
  }
  return (
    <div className="w-1/4 text-sm p-4 space-y-8">
      {sidebar.map((sideV, index) => (
        <div
          className={` ${
            activeBar === index
              ? "before:bg-blue-600 before:w-[2px] before:h-full  before:content-['.']"
              : "before:bg-gray-600 before:w-[2px] before:h-full  before:content-['.']"
          } `}
          key={index}
          onClick={() => handleActivebar(index)}
        >
          {sideV.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar
