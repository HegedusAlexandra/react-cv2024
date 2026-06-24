import React from "react";

export default function SkillCard({ children, title }) {
  return (
    <div className="w-full md:min-h-[20vh] flex md:flex-row flex-col border border-gray-700 md:text-gray-800 text-gray-600">
      <h2 className=" flex justify-start items-center md:text-5xl text-2xl font-bold p-4 md:w-[30%] md:border-r-2 md:border-b-0 border-b-2 border-gray-700">
        {title}
      </h2>
      <div className="flex flex-col w-[100%] gap-[2vh] ">
        {children}
      </div>
    </div>
  );
}
