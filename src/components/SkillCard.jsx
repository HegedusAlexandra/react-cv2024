import React from "react";

export default function SkillCard({ children, title }) {
  return (
    <div className="w-[100%] flex md:flex-row flex-col mb-24 gap-[10%]">
      <h2 className=" flex justify-start items-center md:text-5xl text-4xl font-bold text-stone-600 w-[90%] md:w-[30%] md:rotate-0 md:mb-0 mb-12">
        {title}
      </h2>
      <span className="flex flex-col md:w-[70%] w-[100%] h-[100%] gap-[2vh]">
        {children}
      </span>
    </div>
  );
}
