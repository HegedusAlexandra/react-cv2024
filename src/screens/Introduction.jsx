import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLottie } from "lottie-react";
import lottie from "../assets/girl.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { variants } from "../utils/animations";

export default function Introduction({ id }) {

  const { t } = useTranslation();
  const options = {
    animationData: lottie,
    loop: true
  };

  const { View } = useLottie(options);

  // For text
  const [textRef, textInView] = useInView({
    threshold: 0.3
  });

  // For Lottie animation
  const [lottieRef, lottieInView] = useInView({
    threshold: 0.3
  });

  return (
    <div
      id={id}
      className="flex md:flex-row flex-col justify-center items-center w-[100%] md:h-[64vh] h-[100vh] md:pl-[10%] md:pr-[10%] bg-sky-900 snap-child gap-[2vw]"
    >
      <div className="flex flex-col justify-center items-center md:w-[84%] h-[64vh] w-[92%] text-[2vh] pt-[6vh]">
        <motion.div
          ref={textRef}
          initial="hiddenText"
          animate={textInView ? "visibleText" : "hiddenText"}
          variants={variants}
          className="flex flex-col md:h-[22vh] justify-start items-start w-[100%] md:rounded-md font-roboto mb-[2vh] mt-[4vh]"
        >
          <h2>Introduction</h2>
          <p>{t("introduction.1")}</p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hiddenText"
          animate={textInView ? "visibleText" : "hiddenText"}
          className="flex flex-row justify-start items-start w-[100%] md:h-[42vh] md:rounded-md font-roboto"
        >
          <p>{t("introduction.2")}</p>
        </motion.div>
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
