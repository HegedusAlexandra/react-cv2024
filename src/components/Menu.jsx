import React, { memo } from "react";
import { motion } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import linkedin from "../assets/simple_icon/linkedin.svg";
import github from "../assets/simple_icon/github.svg";
import { NavLink } from "react-router-dom";

function Menu({ screen }) {
  const { t } = useTranslation();

  return (
    <div className="md:fixed md:flex hidden z-30 flex-col w-[100%]">
      <div
        className={`invisible md:visible fixed flex md:flex-row flex-col z-10 w-full h-[8vh]  items-center px-16 backdrop-blur-sm bg-black/10 border-b-2 border-solid border-black`}
      >
        <div
          className={`text-black border-x-2 border-black px-4 uppercase text-[2vh] invisible md:visible w-[26%] h-[100%] flex items-center`}
        >
          <h2>{t("menu.wdp")}</h2>
        </div>
        <div className=" w-[12%] h-full flex justify-center items-center border-r-2 border-black">
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
            className="flex justify-center items-center size-[3vh] rounded-sm mr-[2vh]"
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
        <ul
          className={`flex md:flex-row  flex-col justify-center items-center flex-1 h-full text-[3vw] md:text-[2vw] list-none border-r-2 border-black`}
        >
          <motion.div
            whileHover={{ scale: 1.035, color: "#ef4444" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            key={"projects"}
           className={` text-black uppercase text-[2vh] invisible md:visible mx-auto`}
          >
            <NavLink to={"/projects"}>
              { t("menu.projects")}
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.035, color: "#ef4444" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            key={"about me"}
            className={` text-black uppercase text-[2vh] invisible md:visible mx-auto`}
          >
            <NavLink to="/introduction">{t("menu.about me")}</NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.035, color: "#ef4444" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            key={"skills"}
            className={` text-black uppercase text-[2vh] invisible md:visible mx-auto`}
          >
            <NavLink to="/skills">{t("menu.skills")}</NavLink>
          </motion.div>
        </ul>

        <div className="border-r-2 border-black w-[6%] h-full flex justify-center items-center">
          <LanguageDropdown screen={screen} />
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
