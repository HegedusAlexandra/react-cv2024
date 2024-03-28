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
import lamp from '../assets/pictures/lamp.png'

export default function Skills({ id }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [shadowRef, shadowInView] = useInView({
    threshold: 1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] md:h-[140vh] h-[100vh] font-montserrat bg-stone-950 md:px-[1%]"
    >
      <div
        id={id}
        className="flex flex-col w-[100%] md:h-[84vh] h-[100vh] font-montserrat bg-[#FFC30B]"
      >
        <div className="bg-stone-950 w-[100%] h-[72vh]"></div>
        <motion.div
          ref={shadowRef}
          initial={{ backgroundColor: "#1c1917" }}
          animate={shadowInView && "visibleShadow"}
          variants={variants}
          className="w-[100%] flex flex-row"
        >
          <img src={lamp} alt={lamp} className=" w-[100vw]"/> 
         {/*  <div class="relative left-0 triangle"></div>
          <div class="relative right-0 triangleRight"></div> */}
        </motion.div>
      </div>
      <div
        id={id}
        className="flex flex-col w-[100%] md:h-[84vh] h-[100vh]  font-montserrat bg-gradient-to-b from-[#FFC30B] to-[#FFD662] md:px-[9%] px-[4%] snap-child"
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-row items-start w-[100%] md:h-[40vh] h-[50vh] mt-[10vh]"
        >
          <div className="flex md:flex-row flex-wrap justify-between w-[100%] md:h-[10vh] h-[25vh]">
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
      </div>
    </div>
  );
}
