import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../components/ScreenHeader";
import { useLottie } from "lottie-react";
import lottie from "../assets/girl.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { variants } from "../utils/animations";

export default function Introduction({ id }) {
  const [isIntOpen, setIntOpen] = useState(false);
  const { t } = useTranslation();
  const options = {
    animationData: lottie,
    loop: true
  };

  const { View } = useLottie(options);
  const openInt = () => setIntOpen(true);

  // For text
  const [textRef, textInView] = useInView({ 
    threshold: 0.3,
  });

  // For Lottie animation
  const [lottieRef, lottieInView] = useInView({
    threshold: 0.3,
  });

  return (
    <div
      id={id}
      className="flex md:flex-row flex-col justify-center items-center w-[100%] md:h-[84vh] min-h-[100vh] md:pl-[20%] md:pr-[10%] bg-stone-400 snap-child"
    >
      <div className="md:h-[84vh] md:w-[60%] w-[92%] text-[2vh]">
        <ScreenHeader title={`menu.${id}`} />
        <motion.div
          ref={textRef}
          initial="hiddenText"
          animate={textInView ? "visibleText" : "hiddenText"}
          variants={variants}
          className="flex flex-row md:h-[22vh] justify-start items-center w-[100%] md:rounded-md font-roboto mb-[2vh] mt-[4vh]"
        >
          <p>{t("introduction.1")}</p>
        </motion.div>
        {isIntOpen ? (
          <motion.div
            variants={variants}
            initial="hiddenText"
            animate={textInView ? "visibleText" : "hiddenText"}
            className="flex flex-row justify-start items-start w-[100%] md:h-[42vh] md:rounded-md font-roboto"
          >
            <p>{t("introduction.2")}</p>
          </motion.div>
        ) : (
          <button
            onClick={openInt}
            className="md:w-[30%] md:h-[8vh] bg-[#F7C003] md:mt-[4vh] px-6 py-2 rounded-md font-roboto font-bold uppercase shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)]"
          >
            {t("introduction.more")}
          </button>
        )}
      </div>
      <motion.div
        ref={lottieRef}
        initial="hiddenLottie"
        animate={lottieInView ? "visibleLottie" : "hiddenLottie"}
        variants={variants}
        className="md:h-[84vh] md:w-[40%] h-[40vh] w-[92%] md:mt-[20vh]"
      >
        {View}
      </motion.div>
    </div>
  );
}
