import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export default function Project() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-[100%] md:px-[30%] px-[4%] py-[4%] md:py-[4%] ">
      <a
        /* href={link} */
        className={` bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]`}
      >
        <div className="w-[100%] h-[30vh] bg-abstract bg-cover bg-top bg-no-repeat rounded-2xl "></div>
        <div className="absolute pt-1 text-stone-950 font-opensans font-bold">
          <h2 className="-translate-y-[18vh] font-opensans uppercase font-bold text-[8vh]">
            {t("menu.projects")}
          </h2>
          <p className="-translate-y-[18vh] ml-[1vh]">
            If you want to see some visually appealing awesome projects
          </p>
        </div>
      </a>
    </div>
  );
}
