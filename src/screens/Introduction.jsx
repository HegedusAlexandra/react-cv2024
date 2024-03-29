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
      className="flex md:flex-row flex-col justify-center items-center w-[100%] md:pl-[10%] md:pr-[10%] bg-[#EAE7DC] gap-[2vw]"
    >
      <div className="flex flex-col justify-center items-center md:w-[84%] w-[92%] text-[2vh] pt-[6vh] mb-[10vh]">
        <motion.div
          ref={textRef}
          initial="hiddenText"
          animate={textInView ? "visibleText" : "hiddenText"}
          variants={variants}
          className="flex flex-col justify-start items-start w-[100%] md:rounded-md font-roboto mb-[2vh] mt-[4vh]"
        >
          <h2
            className="text-[8vh] font-bold text-sky-700 my-[10vh]"
            style={{ textShadow: "4px 4px 1px rgba(0, 0, 0, 0.8)" }}
          >
            Introduction
          </h2>
          <p>{t("introduction.1")}</p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hiddenText"
          animate={textInView ? "visibleText" : "hiddenText"}
          className="flex flex-row justify-start items-start w-[100%] md:rounded-md font-roboto md:mb-[10vh]"
        >
          <p>{t("introduction.2")}</p>
        </motion.div>
      </div>
      <motion.div
        ref={lottieRef}
        initial="hiddenLottie"
        animate={lottieInView ? "visibleLottie" : "hiddenLottie"}
        variants={variants}
        className=" md:w-[40%] w-[92%] "
      >
        {View}
      </motion.div>
    </div>
  );
}
