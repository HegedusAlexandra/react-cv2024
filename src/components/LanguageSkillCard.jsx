import React from "react";
import Scale from "./Scale";

export default function LanguageSkillCard({language,level,numlevel}) {
  return (
    <span className="flex md:flex-row flex-col w-[100%] h-[100%] gap-[2vh]">
      <div className="flex flex-row md:w-[40%]">
        <p className=" w-[50%] text-base ">{language}</p>
        <p className="w-[50%] text-base ">{level}</p>
      </div>
      <Scale scaleWidth={numlevel} />
    </span>
  );
}
