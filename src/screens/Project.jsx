import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";

export default function Project({ id }) {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] h-[84vh] md:px-[20%] bg-stone-600 snap-child"
    >
      <div className="flex justify-center w-[100%] mb-[4vh]">
        <ScreenHeader title={"menu.projects"} />
      </div>
      <div
        id={id}
        className="flex flex-row justify-between w-[100%] h-[64vh] bg-stone-600 snap-child"
      >
        <a
          href="https://leohunts.com/"
          className={`w-[40vh] h-[40vh] bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] h-[38vh] bg-LH bg-cover bg-right bg-no-repeat rounded-2xl"></div>
          
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-yellow-400 rounded-l-xl pl-2">
              LEOHUNTS
            </h2>
          
        </a>
        <a
          href="https://hegedusalexandra.github.io/bankist/"
          className={`w-[40vh] h-[40vh] bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] h-[38vh] bg-BANK bg-cover bg-left bg-no-repeat rounded-2xl"></div>
         
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-yellow-400 rounded-l-xl pl-2">
              BANKIST
            </h2>
          
        </a>
        <NavLink
          to="/projects"
          className={`w-[40vh] h-[40vh] bg-stone-700 p-2 rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] overflow-hidden`}
        >
          <div className="w-[100%] h-[38vh] bg-arrow bg-cover bg-top bg-no-repeat rounded-2xl"></div>
          <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[3px_5px_6px_3px_rgba(0,0,0,0.6)] bg-red-600 rounded-l-xl pl-2">
              {t('menu.projects')}
            </h2>
        </NavLink>
      </div>
    </div>
  );
}
