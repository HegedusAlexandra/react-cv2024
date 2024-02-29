import React from "react";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../components/ScreenHeader";
import { useLottie } from "lottie-react";
import window from "../assets/window.json";

export default function Introduction({id}) {
  const { t } = useTranslation();
  const options = {
    animationData: window,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <div id={id} className="flex flex-col w-[100%] h-[84vh] md:px-[30%] pl-[20%] bg-[#FEF08A] bg-bee bg-no-repeat snap-child">
      <ScreenHeader title={`menu.${id}`}/>
      <div className="flex flex-row justify-start items-center w-[100%] md:rounded-lg mt-[10vh]">             
          <p >
            {t("introduction.1")}
            {t("introduction.2")}
          </p>        
      </div>
    </div>
  );
}
