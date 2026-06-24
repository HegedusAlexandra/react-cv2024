import React from 'react'

export default function Footer({id}) {
  return (
     <footer id={id} className="flex flex-col justify-center items-center w-[100%] px-[4%] h-[50vh] bg-gray-800 text-gray-100">
      <h2 className="md:text-[14vh] text-[3vh] font-bold " >Alexandra's Portfolio</h2>
      <p className="pb-[1vh]">email: h.alexa.dev@gmail.com</p>
      <p className="pb-[1vh]">&copy; Copyright 2026 Hegedüs Alexandra</p>
    </footer>
  )
}
