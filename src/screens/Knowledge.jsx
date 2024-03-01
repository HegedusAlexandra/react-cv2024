import React from "react";
import ScreenHeader from "../components/ScreenHeader";
import { useTranslation } from "react-i18next";

export default function Knowledge({ id }) {
const {t} = useTranslation()

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] h-[92vh] bg-gradient-to-b from-stone-300 to-white md:px-[20%] px-[4%] snap-child"
    >
      <ScreenHeader title={`menu.${id}`} />

      <div className=" w-[100%] h-[40vh] grid grid-cols-6 gap-[2vh] mt-[4vh] p-2 rounded-xl font-bold font-opensans">
        <div class="flex justify-center items-center col-start-1 col-span-2 h-[8vh] bg-red-600 p-2 rounded-full">
        {t('knowledge.eng')}
        </div>
        <div class="flex justify-center items-center col-start-3 col-span-1 h-[8vh] bg-red-600 p-2 rounded-full">
        {t('knowledge.eng_level')}
        </div>
        <div class="flex justify-center items-center col-start-4 col-span-3 h-[8vh] bg-[#F7C001] p-2 rounded-full">
        {t('knowledge.gimn')}
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-3 h-[8vh] bg-stone-300 p-2 rounded-full">
        {t('knowledge.ten_years')}
        </div>
        <div class="flex justify-center items-center col-start-4 col-span-2 h-[8vh] bg-red-600 p-2 rounded-full">
        {t('knowledge.hun')}
        </div>
        <div class="flex justify-center items-center col-start-6 col-span-1 h-[8vh] bg-red-600 p-2 rounded-full">
        {t('knowledge.hun_level')}
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-2 h-[8vh] bg-red-300 p-2 rounded-full">
        {t('knowledge.ita')}
        </div>
        <div class="flex justify-center items-center col-start-3 col-span-1 h-[8vh] bg-red-200 p-2 rounded-full">
        {t('knowledge.ita_level')}
        </div>
        <div class="flex justify-center items-center col-start-4 col-span-2 h-[8vh] bg-red-300 p-2 rounded-full">
        {t('knowledge.ger')}
        </div>
        <div class="flex justify-center items-center col-start-6 col-span-1 h-[8vh] bg-red-200 p-2 rounded-full">
        {t('knowledge.ita_level')}
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[8vh] bg-stone-300 p-2 rounded-full">
          2023 -
        </div>  
        <div class="flex justify-center items-center col-start-2 col-span-1 h-[8vh] bg-stone-400 p-2 rounded-full">
          GDE
        </div> <div class="flex justify-center items-center col-start-3 col-span-4 h-[8vh] bg-[#F7C001] p-2 rounded-full">
        {t('knowledge.EI')}
        </div>     
        <div class="flex justify-center items-center col-start-1 col-span-2 h-[8vh] bg-yellow-200 p-2 rounded-full">
          Codecool
        </div>
        <div class="flex justify-center items-center col-start-3 col-span-2 h-[8vh] bg-yellow-200 p-2 rounded-full">
          Ruander
        </div>
        <div class="flex justify-center items-center col-start-5 col-span-2 h-[8vh] bg-yellow-200 p-2 rounded-full">
          Udemy
        </div>
        <div class="flex justify-center items-center col-start-1 col-span-1 h-[8vh] bg-stone-200 p-2 rounded-full">
          2022 -
        </div>
        <div class="flex justify-center items-center col-start-2 col-span-5 h-[8vh] bg-[#F7C001] p-2 rounded-full">
        {t('knowledge.frontend')}
        </div>
      </div>
    </div>
  );
}
