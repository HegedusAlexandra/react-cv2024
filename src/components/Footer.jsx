import React from "react";

export default function Footer({ id }) {
  return (
    <footer id={id} className="bg-stone-600 h-[10vh] w-[100%]">
      <div className="w-[100%] h-[2vh] bg-stone-600 text-center p-4 font-bold text-[2vh]">
        h.alexa.dev@gmail.com
      </div>
      <div className="w-[100%] h-[8vh] bg-stone-600 text-center p-4">
        &copy; Copyright 2024
      </div>
    </footer>
  );
}
