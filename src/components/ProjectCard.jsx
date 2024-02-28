import React from "react";

export default function ProjectCard({link,background,headline,description}) {
  return (
    <a
      href={link}
      className={`${background} flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]`}
    >
      <div className="w-[100%] h-[30vh] bg-PCT bg-top bg-cover rounded-2xl "></div>
      <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
        <h2 className="font-opensans uppercase font-bold text-[4vh]">
          {headline}
        </h2>
        <p>
          {description}
        </p>
      </div>
    </a>
  );
}
