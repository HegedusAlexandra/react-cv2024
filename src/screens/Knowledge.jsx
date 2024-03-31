import React from "react";
import ScreenHeader from "../components/ScreenHeader";
import { useTranslation } from "react-i18next";

export default function Knowledge({ id }) {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] md:h-[100vh] h-[100vh] bg-stone-50 md:px-[20%] px-[4%] md:pt-0 pt-[20vh]"
    >
      <ScreenHeader title={`menu.${id}`} />
      <div className="w-[100%] grid grid-cols-4 gap-[2vh] mt-[4vh] rounded-xl font-opensans text-[2vh]">
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.hun")}
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.hun_level")}
        </div>      
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.eng")}
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.eng_level")}
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.ita")}
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          {t("knowledge.ita_level")}
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          2022 -
        </div>        
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          Codecool
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          2023 -
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          Ruander
        </div>
        <div class="flex justify-center items-center col-start-1 md:col-span-1 col-span-2 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          folyamatosan
        </div>
        <div class="flex justify-center items-center md:col-start-2 col-start-3 md:col-span-3 col-span-2 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          Udemy
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          2023 -
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
           GDE {t("knowledge.EI")} (Bsc)
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500">
          2022 -
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-3 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500 ">
          Vamosoft {window.innerWidth > 780 && t("knowledge.frontend")}
        </div>
        <div class="md:hidden flex justify-center items-center col-start-1 col-span-4 h-[4vh] bg-yellow-100 p-2 rounded-full shadow-xl border-b-[2px] border-solid border-yellow-500 ">
          {t("knowledge.frontend")}
        </div>
      </div>
    </div>
  );
}
