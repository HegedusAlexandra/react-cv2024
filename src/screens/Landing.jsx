import React from "react";
import globe from "../assets/simple_icon/globe.svg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import FlipPic from "../components/FlipPic";

export default function Landing({ id }) {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  return (
    <div
      id={id}
      className="flex flex-row justify-center items-center w-[100%] h-[100vh] pl-[30%] pr-[10%] bg-landing bg-cover bg-no-repeat snap-child"
    >
      <div className="flex flex-col justify-start items-center md:w-[100%] w-[90%] md:bg-transparent bg-[#ffffff46] rounded-md font-roboto font-semibold">
        <div className="flex flex-row w-[100%] mb-[10vh]">        
          <img
            className="size-[3vh]"
            width={24}
            height={24}
            alt="globe"
            src={globe}
            loading="eager"
          />
          <p className="mx-[1vh]">
            {selectedLanguage === "it" ? " Udine" : " Budapest"}
          </p>
        </div>
        <div className="flex flex-col items-start md:w-[100%] w-[90%] md:bg-transparent bg-[#ffffff46] rounded-md">
          <p className="md:w-[80%] w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
            {t("landing.hello")}
          </p>
          <h1>
            <p className="w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
              {t("landing.iam")}
            </p>
            <p className="w-[100%] md:text-[5vh] text-red-700 text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
              {t("landing.developer")}
            </p>
          </h1>
          <p className="md:text-[2vh] font-opensans md:text-stone-600 text-black">
            {t("landing.long")}
          </p>
        </div>
      </div>
      <div className="flex justify-start h-[64vh] -translate-x-[6vw]">
        <FlipPic />
      </div> 
    </div>
  );
}
