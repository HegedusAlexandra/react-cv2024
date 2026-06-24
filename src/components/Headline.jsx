import React from "react";

export default function Headline({ title,description }) {
  return (
    <div className=" flex md:flex-row  flex-col justify-start items-stretch w-[100%] h-full border-x-2 border-t-2 border border-gray-700">
      <h2 className="tracking-tighter md:text-9xl text-4xl font-black text-gray-900 p-[4vh] uppercase md:border-r-2 md:border-b-0 border-b-2 border-gray-700 bg-white">
        {title}
      </h2>
     
      <p className="md:w-[14vw] p-4 content-center text-xs  md:text-gray-800 text-gray-600">
        { description || "A collection of personal projects built with React,TypeScript, GraphQL, Python, Redux and Tailwind CSS."}
      </p>
   
    </div>
  );
}
