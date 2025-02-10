import React from "react";
import { motion } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";
import lamp from "../assets/pictures/lamp.png";
import Scale from "../components/Scale";
import { useTranslation } from "react-i18next";
import AnimatedIcons from "../components/AnimatedIcons";

export default function Skills({ id }) {

  const [sectionRef, sectionInView] = useInView();
  const { t } = useTranslation();

  return (
    <div

      id={id}
      className="flex flex-col w-[100%] font-montserrat text-[2.5vh] "
    >
      <motion.div
        ref={sectionRef}
        initial="hiddenShadow"
        animate={sectionInView ? 'hiddenShadow' : 'visibleShadow'}
        variants={variants}
        className="bg-stone-950 w-[100%] h-[80vh] absolute z-20 left-[0vw]"
      ></motion.div>
      <div className="flex flex-col w-[100%] md:h-[84vh] h-[30vh] font-montserrat bg-[#FFC30B]">
        <motion.div className="w-[100%] flex flex-row">
          <img src={lamp} alt={lamp} className=" w-[100vw]" />
          {/*  <div class="relative left-0 triangle"></div>
          <div class="relative right-0 triangleRight"></div> */}
        </motion.div>
      </div>
      <div className="flex flex-col w-[100%] font-montserrat bg-gradient-to-b from-[#FFC30B] to-[20%] to-[#fdfbf7] md:px-[9%] px-[4%]">
       {/*  <motion.div
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
        </motion.div> */}
        <AnimatedIcons/>
        <div className="w-[100%] flex md:flex-row flex-col mb-[20vh] gap-[10%]">
          <h2
            className="flex justify-center md:items-center items-start md:text-[8vh] text-[6vh] font-bold text-amber-100 w-[90%] md:w-[30%] md:rotate-0 md:mb-0 mb-[10vh]"
            style={
              window.innerWidth > 780
                ? { textShadow: "-1px -1px 0px rgba(0, 0, 0, 1),1px 1px 0px rgba(50, 50, 50, 1),1.5px 1.5px 0px rgba(45, 45, 45, 1), 2px 2px 0px rgba(40, 40, 40, 1), 3px 3px 0px rgba(35, 35, 35, 1), 4px 4px 0px rgba(30, 30, 30, 1), 5px 5px 0px rgba(25, 25, 25, 1),  6px 6px 0px rgba(20, 20, 20, 1),  7px 7px 0px rgba(15, 15, 15, 1),  8px 8px 0px rgba(10, 10, 10, 1)"
                }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.technical_skills")}
          </h2>
          <span className="flex flex-col md:w-[60%] w-[100%] h-[100%] gap-[2vh] text-stone-600">
            <p className="font-bold text-stone-800">Experienced</p>
            <p className="text-[2vh] md:text-[3vh]">
              JavaScript, TypeScript, HTML5, React, React Native, CSS3, SASS,
              Tailwind, Node.js, Figma, GraphQL, Apollo, Redux, Performance
              Optimization, SEO Basics, Responsive design
            </p>
            <p className="font-bold text-stone-800">Familiar</p>
            <p className="text-[2vh] md:text-[3vh]">
              Python, PHP, SQL / MySQL, Docker,AWS, OAuth & JWT{" "}
            </p>
          </span>
        </div>
        <div className="w-[100%] flex md:flex-row flex-col-reverse mb-[20vh] gap-[10%]">
          <span className="flex flex-col md:w-[70%] w-[100%] h-[100%] gap-[2vh]">
            <p className="text-[2vh] md:text-[3vh] text-stone-600">
              {t("knowledge.soft_skills_des")}
            </p>
          </span>
          <h2
            className="flex md:justify-center justify-start md:items-center items-start md:text-[8vh] text-[6vh] font-bold text-amber-100 w-[90%] md:w-[30%] md:rotate-0 md:mb-0 mb-[10vh]"
            style={
              window.innerWidth > 780
                ? { textShadow: "-1px -1px 0px rgba(0, 0, 0, 1),1px 1px 0px rgba(50, 50, 50, 1),1.5px 1.5px 0px rgba(45, 45, 45, 1), 2px 2px 0px rgba(40, 40, 40, 1), 3px 3px 0px rgba(35, 35, 35, 1), 4px 4px 0px rgba(30, 30, 30, 1), 5px 5px 0px rgba(25, 25, 25, 1),  6px 6px 0px rgba(20, 20, 20, 1),  7px 7px 0px rgba(15, 15, 15, 1),  8px 8px 0px rgba(10, 10, 10, 1)" }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.soft_skills")}
          </h2>
        </div>
        <div className="w-[100%] flex md:flex-row flex-col mb-[20vh] gap-[10%]">
          <h2
            className="flex md:justify-center justify-start md:items-center items-start md:text-[8vh] text-[6vh] font-bold text-amber-100 w-[90%] md:w-[30%] md:rotate-0 md:mb-0 mb-[10vh]"
            style={
              window.innerWidth > 780
                ? { textShadow: "-1px -1px 0px rgba(0, 0, 0, 1),1px 1px 0px rgba(50, 50, 50, 1),1.5px 1.5px 0px rgba(45, 45, 45, 1), 2px 2px 0px rgba(40, 40, 40, 1), 3px 3px 0px rgba(35, 35, 35, 1), 4px 4px 0px rgba(30, 30, 30, 1), 5px 5px 0px rgba(25, 25, 25, 1),  6px 6px 0px rgba(20, 20, 20, 1),  7px 7px 0px rgba(15, 15, 15, 1),  8px 8px 0px rgba(10, 10, 10, 1)" }
                : { textShadow: "1.5px 1.5px 1px rgba(0, 0, 0, 0.8)" }
            }
          >
            {t("knowledge.lang_skills")}
          </h2>
          <span className="flex flex-col md:w-[60%] w-[100%] h-[100%] gap-[2vh]">
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
