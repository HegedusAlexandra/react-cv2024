import React from "react";


export default function Footer({ id }) {


  return (
    <footer id={id} className="flex flex-col justify-center items-center bg-[#EAE7DC] w-[100%] px-[4%] h-[32vh] -translate-y-[4vh]">
      <h2 className="text-[14vh] font-bold text-sky-700" style={{textShadow: '8px 8px 1px rgba(0, 0, 0, 0.8)'}}>Alexandra's Portfolio</h2>
      <p className="pb-[1vh]">&copy; Copyright 2024 Hegedüs Alexandra</p>
    </footer>
  );
}
