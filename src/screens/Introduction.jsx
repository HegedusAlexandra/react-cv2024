import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../components/ScreenHeader";
import { useLottie } from "lottie-react";
import lottie from "../assets/girl.json";

export default function Introduction({ id }) {
  const [isIntOpen, setIntOpen] = useState(false);
  const { t } = useTranslation();
  const options = {
    animationData: lottie,
    loop: true
  };

  const { View } = useLottie(options);
  const openInt = () => setIntOpen(true);

  return (
    <div
      id={id}
      className="flex flex-row justify-center items-center w-[100%] h-[84vh] md:pl-[20%] md:pr-[10%] bg-stone-400 snap-child"
    >
      <div className="h-[84vh] w-[60%]">
        <ScreenHeader title={`menu.${id}`} />
        <div className="flex flex-row h-[22vh] justify-start items-center w-[100%] md:rounded-lg font-roboto mb-[2vh] mt-[4vh]">
          <p>{t("introduction.1")}</p>
        </div>
        {isIntOpen ? (
          <div className="flex flex-row justify-start items-start w-[100%] h-[42vh] md:rounded-lg font-roboto">
            <p>{t("introduction.2")}</p>
          </div>
        ) : (
          <button
            onClick={openInt}
            className="w-[20%] md:h-[8vh] bg-[#F7C003] mt-[4vh] px-6 py-2 rounded-xl border-text font-roboto text-text font-bold uppercase"
          >
            Tovább
          </button>
        )}
      </div>
      <div className="h-[84vh] w-[40%] mt-[20vh]">{View}</div>
    </div>
  );
}
