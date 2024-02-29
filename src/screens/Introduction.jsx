import React from "react";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../components/ScreenHeader";

export default function Introduction({id}) {
  const { t } = useTranslation();
  return (
    <div id={id} className="flex flex-col w-[100%] h-[84vh] md:px-[30%] snap-child">
      <ScreenHeader title={`menu.${id}`}/>
      <div className="flex flex-col justify-start items-center w-[100%] bg-stone-200 md:rounded-lg p-4 mt-[10vh]">    
          <p className="md:w-[100%] bg-[#ffffff00]">
            {t("introduction.1")}
            {t("introduction.2")}
          </p>        
      </div>
    </div>
  );
}
