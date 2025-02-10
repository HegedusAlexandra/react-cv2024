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
      className="flex md:flex-row flex-col justify-center items-center w-[100%] h-[100vh] md:pl-[30%] md:pr-[10%] bg-landing bg-cover bg-no-repeat"
    >
      <div className="flex flex-col justify-start items-center md:w-[100%] w-[90%] md:bg-transparent md:pt-0 pt-[10vh] bg-[#ecc5c546] rounded-md font-roboto font-semibold  md:translate-y-0 translate-y-[4vh]">
      {window.innerWidth < 780 && <div className="flex justify-center md:h-[64vh] h-[20vh] md:w-[60%] w-[100%] -translate-y-[4vh]">
        <FlipPic />
      </div> }
        <div className="flex flex-row w-[100%] md:mb-[2vh] p-[3vw] md:p-0">        
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
        <div className="flex flex-col items-start md:w-[100%] w-[90%] bg-transparent rounded-md">
          <p className="md:w-[80%] w-[100%] md:text-[5vh] text-[2.8vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
            {t("landing.hello")}
          </p>
          <h1>
            <p className="w-[100%] md:text-[5vh] text-[2.8vh] font-roboto font-semibold leading-[5vh] md:leading-[5vh]">
              {t("landing.iam")}
            </p>
            <p  style={{
              textShadow:
                "-1px -1px 0px rgba(50, 50, 50, 1),1px 1px 0px rgba(50, 50, 50, 1),1.5px 1.5px 0px rgba(45, 45, 45, 1), 2px 2px 0px rgba(40, 40, 40, 1), 3px 3px 0px rgba(35, 35, 35, 1), 4px 4px 0px rgba(30, 30, 30, 1), 5px 5px 0px rgba(25, 25, 25, 1),  6px 6px 0px rgba(20, 20, 20, 1),  7px 7px 0px rgba(15, 15, 15, 1),  8px 8px 0px rgba(10, 10, 10, 1)"
            }} className="mt-[10vh] h-[30vh] md:text-[14vh] text-red-500 text-[4vh] font-roboto font-semibold md:mb-0 mb-[2vh] leading-[6vh] md:leading-[10vh]">
              {t("landing.developer")}
            </p>
          </h1>
        </div>
      </div>
      {window.innerWidth > 780 && <div className="md:static absolute flex justify-center md:h-[64vh] h-[20vh] md:w-[60%] w-[100%] md:translate-x-[2vw] md:translate-y-[16vh] top-[6vh]">
        <FlipPic />
      </div> }
    </div>
  );
}
