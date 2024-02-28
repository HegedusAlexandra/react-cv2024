import React from "react";
import globe from "../assets/simple_icon/globe.svg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

export default function Landing() {
const {t} = useTranslation()
const {selectedLanguage} = useLanguage();

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-landing bg-cover bg-no-repeat">
      <div className="flex flex-row justify-start items-center md:w-[40%] w-[90%] md:bg-transparent bg-[#ffffff46] rounded-md p-[1%] md:p-[0%] font-roboto font-semibold mb-[2vh] md:-translate-y-[8vh]">
        <img className="size-[3vh]" alt="globe" src={globe} loading='eager'/>
        <p className="mx-[1vh]">{selectedLanguage === 'it' ? ' Udine' : ' Budapest'}</p>
      </div>
      <h1 className="flex flex-col items-start md:w-[40%] w-[90%] p-[1%] md:p-[0%] md:bg-transparent bg-[#ffffff46] rounded-md">
        <p className="md:w-[80%] w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
          {t('landing.hello')}
        </p>
        
        <p className="w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
          {t('landing.iam')}
        </p>
        
        <p className="w-[100%] md:text-[5vh] text-red-700 text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
          {t('landing.developer')}
        </p>
        
        
        <p className="md:text-[2vh] font-opensans md:text-stone-600 text-black">
          {t('landing.long')}
        </p>
      </h1>
    </div>
  );
}
