import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Project() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row w-[100%] md:px-[30%] px-[4%] py-[4%] md:py-[4%] bg-stone-600">
      <a
      href=''
        className={`w-[32vh] bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]`}
      >
       <div className="w-[100%] h-[30vh] bg-LH bg-cover bg-top bg-no-repeat rounded-2xl"></div>
        <div className="absolute text-stone-600 font-opensans font-bold">
          <h2 className="-translate-y-[18vh] font-opensans uppercase font-bold text-[3vh]">
            {t("menu.projects")}
          </h2>
          <p className="-translate-y-[18vh] ml-[1vh]">
            Want to see more?
          </p>
        </div>
      </a>
      <NavLink
        to="/projects"
        className={`w-[32vh] bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]`}
      >
        <div className="w-[100%] h-[30vh] bg-arrow bg-cover bg-top bg-no-repeat rounded-2xl"></div>
        <div className="absolute text-stone-600 font-opensans font-bold">
          <h2 className="-translate-y-[18vh] font-opensans uppercase font-bold text-[3vh]">
            {t("menu.projects")}
          </h2>
          <p className="-translate-y-[18vh] ml-[1vh]">
            Want to see more?
          </p>
        </div>
      </NavLink> 
      {/* <NavLink
        to="/projects"
        className={` bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]`}
      >
        <div className="w-[100%] h-[30vh] bg-abstract bg-cover bg-top bg-no-repeat rounded-2xl"></div>
        <div className="absolute pt-1 text-stone-600 font-opensans font-bold">
          <h2 className="-translate-y-[18vh] font-opensans uppercase font-bold text-[8vh]">
            {t("menu.projects")}
          </h2>
          <p className="-translate-y-[18vh] ml-[1vh]">
            If you want to see some visually appealing awesome projects
          </p>
        </div>
      </NavLink> */}
    </div>
  );
}
