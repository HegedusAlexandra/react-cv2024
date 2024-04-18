import React from "react";


export default function Footer({ id }) {


  return (
    <footer id={id} className="flex flex-col justify-center items-center bg-[#EAE7DC] w-[100%] px-[4%] h-[32vh] -translate-y-[4vh]">
      <h2 className="md:text-[14vh] text-[3vh] font-bold text-cyan-500" style={window.innerWidth > 780 ? { textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" } : {textShadow: '2px 2px 1px rgba(0, 0, 0, 0.6)'}}>Alexandra's Portfolio</h2>
      <p className="pb-[1vh]">&copy; Copyright 2024 Hegedüs Alexandra</p>
    </footer>
  );
}
