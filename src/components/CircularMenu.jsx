import React, { useState, useCallback, memo, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
import { useScrollPosition } from "../hooks/position";
import { NavLink } from "react-router-dom";
import linkedin from "../assets/simple_icon/linkedin.svg";
import github from "../assets/simple_icon/github.svg";

function CircularMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const scroll = useScrollPosition();
  const { t } = useTranslation();

  useEffect(() => setIsVisible(false), [scroll]);

  const edge = useCallback(
    (str) => (
      <NavLink
        className="menu-item bg-white"
        to={`/${str === "about me" ? "introduction" : str}`}
      >
        <p className="text-xs">{t(`menu.${str}`)}</p>
      </NavLink>
    ),
    []
  );

  return (
    <div
      className={`flex flex-row w-[100%] justify-between items-center md:hidden`}
    >
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
        <menu
          onClick={() => setIsVisible(!isVisible)}
          className="items-wrapper"
        >
          {edge("about me")}
          {edge("projects")}
          {edge("contact")}
          <motion.a
            whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
            className="menu-item bg-white"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="https://github.com/HegedusAlexandra?tab=repositories"
          >
            <img
              width={150}
              height={150}
              loading="eager"
              className=" size-[2.5vh]"
              alt="github"
              src={github}
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
            className="menu-item bg-white"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="https://www.linkedin.com/in/alexandra-heged%C3%BCs-135220269/"
          >
            <img
              width={150}
              height={150}
              loading="eager"
              className=" size-[2.5vh]"
              alt="linkedin"
              src={linkedin}
            />
          </motion.a>
        </menu>
      </div>
      <LanguageDropdown />
    </div>
  );
}

export default memo(CircularMenu);
