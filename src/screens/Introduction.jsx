import React from "react";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-[100%] md:px-[30%]">
      <div className="flex flex-col justify-start items-center w-[100%] h-[100vh] bg-lemon bg-cover bg-no-repeat rounded-lg">    
          <p className="w-[60%] bg-[#ffffff00] mt-[10vh] backdrop-blur-lg">
            {t("introduction.1")}
            {t("introduction.2")}
          </p>        
      </div>
    </div>
  );
}
