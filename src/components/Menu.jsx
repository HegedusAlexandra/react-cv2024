import React, { memo } from "react";
import { motion } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import linkedin from "../assets/simple_icon/linkedin.svg";
import github from "../assets/simple_icon/github.svg";
import { NavLink, useLocation } from "react-router-dom";

function Menu() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div
      className={`invisible md:visible fixed flex flex-row z-10 top-0 left-0 w-full h-[8%] py-[1%] font-roboto items-center px-[4%] backdrop-blur-md bg-white/10`}
    >
      <div className="w-[26%] h-[100%] flex items-center">
        <h2>{t("menu.wdp")}</h2>
      </div>
      <ul
        className={`flex flex-row w-[30%] text-[3vw] md:text-[2vw] list-none `}
      >
        <motion.div
          whileHover={{ scale: 1.2, color: "#B91C1C" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          key={location.pathname === "/projects" ? "home" : "projects"}
          className="text-black uppercase font-bold text-[2vh] invisible md:visible mx-auto"
        >
          <NavLink to={location.pathname === "/projects" ? "/" : "/projects"}>
            {location.pathname === "/projects"
              ? t("menu.home")
              : t("menu.projects")}
          </NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color: "#B91C1C" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          key={"about me"}
          className="text-black uppercase font-bold text-[2vh] invisible md:visible mx-auto"
        >
          <NavLink to="/about me">{t("menu.about me")}</NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color: "#B91C1C" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          key={"contact"}
          className="text-black uppercase font-bold text-[2vh] invisible md:visible mx-auto"
        >
          <NavLink to="/contact">{t("menu.contact")}</NavLink>
        </motion.div>
      </ul>
      <div className="w-[22%] flex justify-end">
        <motion.a
          whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
          className=" flex justify-center items-center size-[3vh] rounded-full mr-[2vh]"
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
          className=" flex justify-center items-center size-[3vh] rounded-sm mr-[2vh]"
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
      </div>
      <div className="w-[22%] flex justify-end">
        <LanguageDropdown />
      </div>
    </div>
  );
}

export default memo(Menu);
