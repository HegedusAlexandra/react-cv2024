import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

function CircularMenu({screen}) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const edge = useCallback(
    (str) => (
      {/* <Link
        to={str === "home" ? "/" : str === "steps" ? "/steps/1/" : `/${str}/`}
        className="menu-item"
        key={str}
      >
        <p className="text-xs">{t(str)}</p>
      </Link> */}
    ),
    [t]
  );

  return (
    <div className={`flex ${screen === 'steps' ? 'flex-col' : 'flex-row'} w-[100%] justify-between md:hidden`}>
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
                ? "absolute h-[10%] w-[70%]  mx-[5%] bg-background rounded-lg rotate-45"
                : "h-[10%] w-[70%] my-[10%] mx-[16px] bg-background rounded-lg"
            }
          />
          {!isVisible && (
            <div className="h-[10%] w-[70%] my-[10%] mx-[5%] bg-background rounded-lg " />
          )}
          <div
            className={
              isVisible
                ? "absolute h-[10%] w-[70%]  mx-[5%] bg-background rounded-lg -rotate-45"
                : "h-[10%] w-[70%] my-[1%] mx-[16px] bg-background rounded-lg"
            }
          />
        </motion.button>
        <menu className="items-wrapper">
          {edge("home")}
          {edge("steps")}
          {edge("contact")}
          {edge("blog")}
        </menu>
      </div>
      <LanguageDropdown screen={screen} />
    </div>
  );
}

export default memo(CircularMenu);
