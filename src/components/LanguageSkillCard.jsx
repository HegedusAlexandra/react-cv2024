import React from "react";
import Scale from "./Scale";

export default function LanguageSkillCard({language,level,numlevel}) {
  return (
    <span className="flex md:md:flex-row min-h-[5vh] flex-col w-[100%] text-sm">
      <div className="flex flex-row md:w-[20%]">
        <p className=" w-[50%] border-4 border-gray-700 content-center text-center">{language}</p>
        <p className="w-[50%] border-4 border-gray-700 content-center text-center">{level}</p>
      </div>
      <Scale scaleWidth={numlevel} />
    </span>
  );
}
