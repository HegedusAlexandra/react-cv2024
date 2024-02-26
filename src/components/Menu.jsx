import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import linkedin from "../assets/simple_icon/linkedin.svg";
import github from "../assets/simple_icon/github.svg";

function Menu() {
  const { t } = useTranslation();

  const edge = useCallback(
    (str) => (
      <motion.li
        whileHover={{ scale: 1.2, color: "#B91C1C" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        key={str}
        className="text-black uppercase font-bold text-[2vh] invisible md:visible mx-auto"
      >
        <a href={`#${str}`}>{t(`menu.${str}`)}</a>
      </motion.li>
    ),
    [t]
  );

  return (
    <div
      className={`invisible md:visible flex flex-row fixed z-10 top-0 w-full h-[8%] backdrop-blur-md bg-white-50/500 py-[1%] font-roboto items-center px-[4%]`}
    >
      <div className="w-[26%] h-[100%] flex items-center">
        <h2>{t("menu.wdp")}</h2>
      </div>
      <ul
        className={`flex flex-row w-[30%] text-[3vw] md:text-[2vw] list-none `}
      >
        {edge("about me")}
        {edge("projects")}
        {edge("contact")}
      </ul>
      <div className="w-[22%] flex justify-end">
        <a href="https://github.com/HegedusAlexandra?tab=repositories">
          <img
            loading="eager"
            className=" size-[2.5vh] mr-[2vh]"
            alt="github"
            src={github}
          />
        </a>
        <a href="https://www.linkedin.com/in/alexandra-heged%C3%BCs-135220269/">
          <img
            loading="eager"
            className=" size-[2.5vh] mr-[2vh]"
            alt="linkedin"
            src={linkedin}
          />
        </a>
      </div>
      <div className="w-[22%] flex justify-end">
        <LanguageDropdown />
      </div>
    </div>
  );
}

export default memo(Menu);
