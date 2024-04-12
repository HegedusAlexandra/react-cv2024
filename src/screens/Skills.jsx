import React, { useEffect } from "react";
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
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";
import lamp from "../assets/pictures/lamp.png";
import Scale from "../components/Scale";
import { useTranslation } from "react-i18next";

export default function Skills({ id }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [sectionRef, sectionInView] = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);


  return (
    <div

      id={id}
      className="flex flex-col w-[100%] font-montserrat text-[2.5vh] bg-stone-950 md:px-[1%]"
    >
      <motion.div
        ref={sectionRef}
        initial="hiddenShadow"
        animate={sectionInView ? 'hiddenShadow' : 'visibleShadow'}
        variants={variants}
        className="bg-stone-950 w-[100%] h-[260vh] absolute z-20 left-[0vw]"
      ></motion.div>
      <div className="flex flex-col w-[100%] md:h-[84vh] h-[30vh] font-montserrat bg-[#FFC30B]">
        <motion.div className="w-[100%] flex flex-row">
          <img src={lamp} alt={lamp} className=" w-[100vw]" />
          {/*  <div class="relative left-0 triangle"></div>
          <div class="relative right-0 triangleRight"></div> */}
        </motion.div>
      </div>
      <div className="flex flex-col w-[100%] font-montserrat bg-gradient-to-b from-[#FFC30B] to-[#EAE7DC] md:px-[9%] px-[4%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-row items-start w-[100%] md:mb-[16vh] mb-[4vh]"
        >
          <div className="flex md:flex-row flex-wrap justify-between w-[100%]">
            <img
              width={150}
              height={150}
              loading="eager"
              className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0 "
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
        </motion.div>
        <div className="w-[100%] flex flex-row mb-[20vh] gap-[10%]">
          <h2
            className="flex justify-center items-center md:text-[8vh] text-[4vh] font-bold text-sky-700 w-[20%] md:w-[30%] md:rotate-0 -rotate-90"
            style={
              window.innerWidth > 780
                ? { textShadow: "4px 4px 1px rgba(0, 0, 0, 0.8)" }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.technical_skills")}
          </h2>
          <span className="flex flex-col md:w-[60%] w-[70%] h-[100%] gap-[2vh]">
            <p className="font-bold">EXPERIENCED</p>
            <p className="text-[2vh] md:text-[3vh]">
              JavaScript, TypeScript, HTML5, React, React Native, CSS3, SASS,
              Tailwind, Node.js, Figma, GraphQL, Apollo, Redux, Performance
              Optimization, SEO Basics, Responsive design
            </p>
            <p className="font-bold">KNOWN</p>
            <p className="text-[2vh] md:text-[3vh]">
              Python, PHP, SQL / MySQL, Docker,AWS, OAuth & JWT{" "}
            </p>
          </span>
        </div>
        <div className="w-[100%] flex flex-row  mb-[20vh] gap-[10%]">
          <span className="flex flex-col w-[60%] md:w-[70%] h-[100%] gap-[2vh]">
            <p className="text-[2vh] md:text-[3vh]">
              {t("knowledge.soft_skills_des")}
            </p>
          </span>
          <h2
            className="flex justify-center items-center md:text-[8vh] text-[4vh] font-bold text-sky-700 md:w-[30%] w-[20%] md:rotate-0 rotate-90"
            style={
              window.innerWidth > 780
                ? { textShadow: "4px 4px 1px rgba(0, 0, 0, 0.8)" }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.soft_skills")}
          </h2>
        </div>
        <div className="w-[100%] flex flex-row mb-[20vh] gap-[10%]">
          <h2
            className="flex justify-center items-center md:text-[8vh] text-[4vh] font-bold text-sky-700 md:w-[30%] w-[20%] md:rotate-0 -rotate-90"
            style={
              window.innerWidth > 780
                ? { textShadow: "4px 4px 1px rgba(0, 0, 0, 0.8)" }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.lang_skills")}
          </h2>
          <span className="flex flex-col w-[60%] h-[100%] gap-[2vh]">
            <span className="flex md:flex-row flex-col w-[100%] h-[100%] gap-[2vh]">
              <div className="flex flex-row md:w-[40%]">
                <p className=" w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.hun")}
                </p>
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.hun_level")}
                </p>
              </div>
              <Scale scaleWidth={100} />
            </span>
            <span className="flex md:flex-row flex-col w-[100%] h-[100%] gap-[2vh]">
              <div className="md:w-[40%] flex flex-row">
                <p className=" w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.eng")}
                </p>
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.eng_level")}
                </p>
              </div>
              <Scale scaleWidth={90} />
            </span>
            <span className="flex md:flex-row flex-col w-[100%] h-[100%] gap-[2vh]">
              <div className="md:w-[40%] flex flex-row">
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.ita")}
                </p>
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.ita_level")}
                </p>
              </div>
              <Scale scaleWidth={22} />
            </span>
            <span className="flex md:flex-row flex-col w-[100%] h-[100%] gap-[2vh]">
              <div className="md:w-[40%] flex flex-row">
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.ger")}
                </p>
                <p className="w-[50%] text-[2vh] md:text-[2.5vh]">
                  {t("knowledge.ita_level")}
                </p>
              </div>
              <Scale scaleWidth={10} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
