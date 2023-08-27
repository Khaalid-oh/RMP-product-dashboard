"use client"
import React, {useState} from 'react'


function Mock() {
  const navItems = [
    { id: 0, link: "#home", name: "Home" },
    { id: 1, link: "#about", name: "About" },
    { id: 2, link: "#services", name: "Services" },
    { id: 3, link: "#assets", name: "Assets" },
  ];

  const [hover, setHover] = useState<null | number>(null);
  
  const handleHover = (val :number) => {
    setHover(val)
  }

  return (
    <nav className='w-full flex h-14 mx-auto p-4 gap-6 text-sm'>
      {navItems.map((nav, i)  =>  (
        <a className={`cursor-pointer flex ${hover === i ? "flex flex-col after:bg-gray-800 after:flex-col after:w-full after:ease-in-out after:h-[2px] after:content-[''] after:rounded-sm after:transition-all after:duration-300" : ""}`}  href={nav.link} key={i}
        onClick={() => handleHover(i)}>{nav.name}</a>
      ))}
    </nav>
  )
}

export default Mock
