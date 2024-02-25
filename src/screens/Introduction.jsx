import React from "react";
import lemon from "../assets/pictures/lemon.jpg";
import arrow from "../assets/pictures/arrow.jpg";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col justify-center w-[100%]">
        <div className="flex flex-col items-end md:w-[50%] w-[100%] bg-[#ffffff14] backdrop-blur-sm md:bg-gradient-to-b from-[#f2be0300] to-[30%] to-[#FEE946]">
          <div className="md:absolute static md:w-[20vw] md:py-[2vh] py-[2vh] px-[4%] md:pl-[0.5vw] md:pr-[1vw] font-roboto text-[2vh] bg-[#ffffff63] md:bg-transparent backdrop-blur-sm">
            {t("introduction.1")}
            {window.innerWidth < 780 && <p>{t("introduction.2")}</p>}
          </div>
          {window.innerWidth > 780 && (
            <img
              loading="eager"
              className="md:w-[100%] md:h-auto object-cover py-[2vh] md:py-[0vh]"
              src={lemon}
              alt="lemon"
            />
          )}
        </div>
        {window.innerWidth > 780 && (
          <div className="flex flex-col items-start md:w-[50%] w-[100%] bg-transparent md:bg-[#CFC7B9]">
            <img
              className="md:w-[100%] h-[100vh] md:h-auto object-cover object-left"
              src={arrow}
              alt="arrow"
              loading="eager"
            />
            {/* <h2 className="absolute w-[30%] py-[2vh] mt-10 ml-4 text-[8vh] font-bold font-roboto">In the midst of chaos, there is also opportunity. - Sun Tzu</h2> */}
            <div className="w-[40%] font-roboto py-[2vh] pl-[1vw] text-[2vh]">
              <p>{t("introduction.2")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
