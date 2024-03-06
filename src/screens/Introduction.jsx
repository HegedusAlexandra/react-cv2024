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
      className="flex md:flex-row flex-col justify-center items-center w-[100%] md:h-[84vh] min-h-[100vh] md:pl-[20%] md:pr-[10%] bg-stone-400 snap-child"
    >
      <div className="md:h-[84vh] md:w-[60%] w-[92%] text-[2vh]">
        <ScreenHeader title={`menu.${id}`} />
        <div className="flex flex-row md:h-[22vh] justify-start items-center w-[100%] md:rounded-lg font-roboto mb-[2vh] mt-[4vh]">
          <p>{t("introduction.1")}</p>
        </div>
        {isIntOpen ? (
          <div className="flex flex-row justify-start items-start w-[100%] md:h-[42vh] md:rounded-lg font-roboto">
            <p>{t("introduction.2")}</p>
          </div>
        ) : (
          <button
            onClick={openInt}
            className="md:w-[20%] md:h-[8vh] bg-[#F7C003] md:mt-[4vh] px-6 py-2 rounded-xl font-roboto font-bold uppercase"
          >
            {t('introduction.more')}
          </button>
        )}
      </div>
      <div className="md:h-[84vh] md:w-[40%] h-[40vh] w-[92%] md:mt-[20vh]">{View}</div>
    </div>
  );
}
