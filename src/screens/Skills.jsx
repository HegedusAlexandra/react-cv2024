import React from "react";
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
import tailwindcss from "../assets/simple_icon/tailwindcss.svg";

export default function Skills() {
  return (
    <div className="flex flex-row flex-wrap justify-between w-[100%] h-[50vh] bg-transparent md:bg-stone-200 md:px-[30%] px-[4%] py-[6%] md:gap-12">
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="amazon"
        src={amazon}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="apollo"
        src={apollo}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="docker"
        src={docker}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="figma"
        src={figma}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="github"
        src={github}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="html5"
        src={html5}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="javascript"
        src={javascript}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="nextdotjs"
        src={nextdotjs}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="nodedotjs"
        src={nodedotjs}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="react"
        src={react}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="sass"
        src={sass}
      />
      <img
        loading="eager"
        className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh]"
        alt="tailwindcss"
        src={tailwindcss}
      />
    </div>
  );
}
