import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

function CircularMenu({screen}) {
  const [isVisible, setIsVisible] = useState(false);


  const edge = useCallback(
    (str) => (
     <a
        href={`#${str}`}
        className="menu-item"
        key={str}
      >
        <p className="text-xs">{str}</p>
      </a> 
    ),
    []
  );

  return (
    <div className={`flex flex-row w-[100%] justify-between items-center md:hidden`}>
      <div
        id="circularMenu1"
        className={`circular-menu md:hidden ${isVisible && "visible"}`}
      >
        {isVisible && <div className={`circular-menu-2`}> </div>}
        {isVisible && <div className={`circular-menu-3`}> </div>}
        {isVisible && <div className={`circular-menu-4`}> </div>}

        <motion.button
          whileHover={{ scale: 0.9, rotate: 10 }}
          whileTap={{
            scale: 0.9,
            rotate: -90,
            borderRadius: "100%"
          }}
          onClick={() => setIsVisible(!isVisible)}
          className="main-btn"
        >
          <div
            className={
              isVisible
                ? "absolute h-[10%] w-[70%] mx-[5%] bg-black rounded-lg rotate-45"
                : "h-[10%] w-[70%] my-[10%] mx-[16px] bg-black rounded-lg"
            }
          />
          {!isVisible && (
            <div className="h-[10%] w-[70%] my-[10%] mx-[5%] bg-black rounded-lg " />
          )}
          <div
            className={
              isVisible
                ? "absolute h-[10%] w-[70%] mx-[5%] bg-black rounded-lg -rotate-45"
                : "h-[10%] w-[70%] my-[1%] mx-[16px] bg-black rounded-lg"
            }
          />
        </motion.button>
        <menu className="items-wrapper">
          {edge("about me")}
          {edge("projects")}
          {edge("contact")}
        </menu>
      </div>
      <LanguageDropdown screen={screen} />
    </div>
  );
}

export default memo(CircularMenu);
