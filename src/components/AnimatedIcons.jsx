import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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

const iconList = [
  { alt: "apollo", src: apollo },
  { alt: "graphql", src: graphql },
  { alt: "docker", src: docker },
  { alt: "figma", src: figma },
  { alt: "github", src: github },
  { alt: "html5", src: html5 },
  { alt: "javascript", src: javascript },
  { alt: "nodedotjs", src: nodedotjs },
  { alt: "nextdotjs", src: nextdotjs },
  { alt: "react", src: react },
  { alt: "sass", src: sass },
  { alt: "tailwindcss", src: tailwindcss }
];

export default function AnimatedIcons() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref); // Correct usage

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} className="absolute overflow-hidden w-full flex flex-row items-start md:mb-[16vh] mb-[4vh] left-0 -translate-y-[20vh]">
      <motion.div
        className="flex flex-row flex-nowrap w-max gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100
        }}
      >
        {iconList.concat(iconList).concat(iconList).concat(iconList).concat(iconList).concat(iconList).concat(iconList).map((icon, index) => (
          <img
            key={index}
            width={150}
            height={150}
            loading="eager"
            className="md:size-[8vh] size-[7vh] mx-[2vh] md:mx-[0vh] mb-[3vh] md:mb-0"
            alt={icon.alt}
            src={icon.src}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
