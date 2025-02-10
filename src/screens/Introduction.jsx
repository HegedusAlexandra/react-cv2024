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
      className="flex md:flex-row flex-col justify-center items-center w-[100%] md:pl-[10%] md:pr-[10%] bg-[#fdfbf7] gap-[2vw]"
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
            className="md:text-[12vh] text-[6vh] font-bold text-[#fcefc0] my-[8vh] capitalize"
            style={{
              textShadow:
                "-1px -1px 0px rgba(50, 50, 50, 1),1px 1px 0px rgba(50, 50, 50, 1),1.5px 1.5px 0px rgba(45, 45, 45, 1), 2px 2px 0px rgba(40, 40, 40, 1), 3px 3px 0px rgba(35, 35, 35, 1), 4px 4px 0px rgba(30, 30, 30, 1), 5px 5px 0px rgba(25, 25, 25, 1),  6px 6px 0px rgba(20, 20, 20, 1),  7px 7px 0px rgba(15, 15, 15, 1),  8px 8px 0px rgba(10, 10, 10, 1)"
            }}
          >
            {t("menu.introduction")}
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
