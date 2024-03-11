import React,{useEffect} from "react";
import amazon from "../assets/simple_icon/amazonaws.svg";
import apollo from "../assets/simple_icon/apollographql.svg";
import docker from "../assets/simple_icon/docker.svg";
import figma from "../assets/simple_icon/figma.svg";
import github from "../assets/simple_icon/github.svg";
import html5 from "../assets/simple_icon/html5.svg";
import javascript from "../assets/simple_icon/javascript.svg";
import nextdotjs from "../assets/simple_icon/nextdotjs.svg";
import nodedotjs from "../assets/simple_icon/nodedotjs.svg";
import react from "../assets/simple_icon/react.svg";
import sass from "../assets/simple_icon/sass.svg";
import graphql from "../assets/simple_icon/graphql.svg";
import tailwindcss from "../assets/simple_icon/tailwindcss.svg";
import ScreenHeader from "../components/ScreenHeader";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";

export default function Skills({ id }) {
const controls = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
  if (inView) {
    controls.start("visibleCard");
  }
}, [controls, inView]);

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] md:h-[64vh] h-[100vh] font-montserrat bg-stone-300 md:px-[20%] px-[4%] snap-child"
    >
      <ScreenHeader title={`menu.${id}`} />
      <motion.div ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants} className="flex flex-col items-start w-[100%] md:h-[40vh] h-[50vh] mt-[10vh]">
        <div className="flex md:flex-row flex-col w-[100%] md:h-[10vh] h-[25vh] gap-[6vw]">
          <div className="flex flex-row flex-wrap justify-between items-start w-[100%]">
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="apollo"
              src={apollo}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="graphql"
              src={graphql}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="docker"
              src={docker}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-between items-start w-[100%]">
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="figma"
              src={figma}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="github"
              src={github}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="html5"
              src={html5}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-[100%] md:h-[10vh] h-[25vh] gap-[6vw]">
          <div className="flex flex-row flex-wrap justify-between items-start w-[100%]">
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="javascript"
              src={javascript}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="nodedotjs"
              src={nodedotjs}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="nextdotjs"
              src={nextdotjs}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-between items-start w-[100%]">
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="react"
              src={react}
            />

            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="sass"
              src={sass}
            />
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
              alt="tailwindcss"
              src={tailwindcss}
            />
          </div>
        </div>
      {/*   <div className="font-roboto uppercase p-2 flex md:flex-row flex-col w-[100%] gap-[6vw] bg-stone-300 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col"> 
          <p>{t("knowledge.hun")} - {t("knowledge.hun_level")}</p>
          <p>{t("knowledge.eng")} - {t("knowledge.eng_level")}</p>    
          <p>{t("knowledge.ita")} - {t("knowledge.ita_level")}</p>  
          <p>{t("knowledge.ger")} - {t("knowledge.ita_level")}</p>  
        </div>
        <div className="flex flex-col">
        <p>2022 - Codecool</p>
        <p> 2022 -  Ruander </p>
        <p> 2023 - GDE {t("knowledge.EI")} (Bsc) </p>
        <p> 2022 -  Vamosoft - {t("knowledge.frontend")}</p> 
         
         </div>    
        </div> */}
      </motion.div>
    </div>
  );
}
