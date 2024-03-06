import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";

export default function Project({ id }) {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] md:h-[84vh] h-[100vh] md:px-[20%] bg-stone-600 snap-child"
    >
      <div className="flex justify-center w-[100%] mb-[4vh]">
        <ScreenHeader title={"menu.projects"} />
      </div>
      <div
        id={id}
        className="flex md:flex-row flex-col justify-between items-center w-[100%] md:h-[64vh] h-[100vh] p-[4vw] pt-[8vh] md:p-0 md:gap-0 gap-[2vw] bg-stone-600 snap-child"
      >
        <a
          href="https://leohunts.com/"
          className={`md:w-[40vh] w-[92vw] md:h-[40vh]  bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[20vh] bg-LH bg-cover bg-right bg-no-repeat rounded-2xl"></div>
          
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-yellow-400 rounded-l-xl pl-2">
              LEOHUNTS
            </h2>
          
        </a>
        <a
          href="https://hegedusalexandra.github.io/bankist/"
          className={`md:w-[40vh] w-[92vw] md:h-[40vh]  bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[20vh] bg-BANK bg-cover bg-left bg-no-repeat rounded-2xl"></div>
         
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-yellow-400 rounded-l-xl pl-2">
              BANKIST
            </h2>
          
        </a>
        <NavLink
          to="/projects"
          className={`md:w-[40vh] w-[92vw] md:h-[40vh] h-fit bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[20vh] bg-arrow bg-cover md:bg-top bg-center bg-no-repeat rounded-2xl"></div>
          <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-red-600 rounded-l-xl pl-2">
              {t('menu.projects')}
            </h2>
        </NavLink>
      </div>
    </div>
  );
}
