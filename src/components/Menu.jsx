import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();

  const edge = useCallback(
    (str) => (
      <motion.li
        whileHover={{ scale: 1.1, color: "#b4b4b4" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        key={str}
        className="text-black uppercase font-bold text-[2vh] invisible md:visible mx-auto"
      >
        <a href={`#${str}`}>{t(str)}</a>
      </motion.li>
    ),
    [t]
  );

  return (
    <div
      className={`invisible md:visible flex flex-row fixed z-10 top-0 w-full h-[8%] backdrop-blur-md bg-white-50/500 py-[1%] font-roboto items-center px-[4%]`}
    >
      <div className="w-[26%] h-[100%] flex items-center">
       <h2>web developer portfolio</h2>
      </div>      
      <ul
        className={`flex flex-row w-[30%] text-[3vw] md:text-[2vw] list-none`}
      >
        {edge("about me")}
        {edge("projects")}
        {edge("contact")}
      </ul>
      <div className="w-[44%] flex justify-end">
        <LanguageDropdown />
      </div>      
    </div>
  );
}

export default memo(Menu);
