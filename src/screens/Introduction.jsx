import React from "react";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-[100%] md:px-[30%] mb-[10vh]">
      <div className="flex flex-col justify-start items-center w-[100%] h-min-[100vh] bg-lemon bg-cover bg-no-repeat md:rounded-lg">    
          <p className="md:w-[92%] md: w-[100%] px-[4%] bg-[#ffffff00] my-[10vh] backdrop-blur-lg leading-8">
            {t("introduction.1")}
            {t("introduction.2")}
          </p>        
      </div>
    </div>
  );
}
