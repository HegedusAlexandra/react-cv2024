import React from "react";
import { useTranslation } from "react-i18next";
import githubpic from "../assets/simple_icon/github.svg";
import { motion } from "framer-motion";

export default function ProjectCard({

  link,
  github,
  background,
  headline,
  description
}) {
  const { t } = useTranslation();

  return (
    <div key={background} className={`${headline  ? "flex" : "hidden"} md:flex flex-col justify-between min-h-[80vh]  border border-gray-700`}>
      <h2 className="mt-[4vh] font-bold text-[4vh] md:text-gray-800 text-gray-600 p-4 leading-10 tracking-tight">
        {t(headline)}
      </h2>
      {background && (
        <div
          className={` md:h-[30vh] h-[30vh]  mx-4 ${background} bg-top bg-cover bg-gray-500 shadow-[0px_6px_6px_2px_rgba(0,0,0,0.6)] `}
        />
      )}
      {headline && (
        <div className="flex-1 flex flex-col items-start w-[100%] ">
          <p className="flex-1 md:text-gray-800 text-gray-600 text-sm p-4">
            {t(description)}
          </p>
          <div className=" flex flex-row justify-between items-center w-[100%] pl-4 text-gray-100  border-t-2 border-gray-800">
            <motion.a
              target="blank"
              whileHover={{ scale: 1.1, backgroundColor: "#F6F6F6" }}
              className={`flex justify-center items-center size-[3.8vh] rounded-full mr-[2vh]  ${
                github === "" && "hidden"
              }`}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={github}
            >
              <img
                width={150}
                height={150}
                loading="lazy"
                className=" size-[3.2vh]"
                alt="github"
                src={githubpic}
              />
            </motion.a>

            <a target="blank" href={link}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#464646" }}
                className="flex flex-row justify-center items-center bg-gray-900 px-6 py-2 text-gray-100 uppercase gap-4"
              >
                {t("projects.check")}
                <span className="material-symbols-outlined">arrow_outward</span>
              </motion.button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
