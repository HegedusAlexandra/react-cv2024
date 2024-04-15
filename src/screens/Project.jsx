import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
export default function Project({ id }) {
  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }
    })
  };

  const [refOne, inViewOne] = useInView();
  const [refTwo, inViewTwo] = useInView();
  const [refThree, inViewThree] = useInView();
  const [refFour, inViewFour] = useInView();

  return (
    <div
      id={id}
      className="flex flex-col justify-center items-center w-[100%] md:px-[10vw] md:py-[20vh] bg-[#EAE7DC] "
    >
      <div
        id={id}
        className="flex md:flex-row flex-col justify-between items-start w-[100%] p-[4vw] pt-[8vh] pb-[1vh] md:p-0 md:pt-[2vh] md:gap-0 gap-[2vw]"
      >
        <motion.a
           ref={refOne}
           target="blank"
           variants={variants}
           initial="hidden"
           animate={inViewOne ? 'visible' : 'hidden'}

          custom={0}
          href="https://hegedusalexandra.github.io/osk/"
          className={`md:w-[39vw] w-[92vw] md:h-[40vh] h-[32vh] bg-stone-500 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[30vh] bg-OKS bg-cover bg-left bg-no-repeat rounded-md"></div>

          <h2 className="-translate-y-[10vh] h-[10vh] font-opensans uppercase font-bold text-[3vh] bg-white/70 pl-2 rounded-b-lg">
            OMA'S
          </h2>
        </motion.a>
        <motion.a
                ref={refTwo}
                target="blank"
                variants={variants}
                initial="hidden"
                animate={inViewTwo ? 'visible' : 'hidden'}
          custom={1}
          href="https://leohunts.com/"
          className={`md:w-[39vw] w-[92vw] md:h-[40vh] h-[32vh] bg-stone-500 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[30vh] bg-LH bg-cover bg-right bg-no-repeat rounded-md"></div>
          <h2 className="-translate-y-[10vh] h-[10vh] font-opensans uppercase font-bold text-[3vh] bg-white/70 pl-2 rounded-b-lg">
            LEOHUNTS
          </h2>
        </motion.a>
        
      </div>
      <div
        id={id}
        className="flex md:flex-row flex-col justify-between items-start w-[100%] p-[4vw] pt-[0vh] md:p-0 md:pt-[8vh] md:gap-0 gap-[2vw]"

      >
        <motion.a
            ref={refThree}
            target="blank"
            variants={variants}
            initial="hidden"
            animate={inViewThree ? 'visible' : 'hidden'}
          custom={2}
          href="https://www.golfracks.club/"
          className={`md:w-[39vw] w-[92vw] md:h-[40vh] h-[32vh] bg-stone-500 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[30vh] bg-GF bg-cover bg-right bg-no-repeat rounded-md"></div>
          <h2 className="-translate-y-[10vh] h-[10vh] font-opensans uppercase font-bold text-[3vh] bg-white/70 pl-2 rounded-b-lg">
            GOLFRACKS
          </h2>
        </motion.a>
        <motion.div
            ref={refFour}
            target="blank"
            variants={variants}
            initial="hidden"
            animate={inViewFour ? 'visible' : 'hidden'}
          custom={3} // Adjust the custom delay as needed
          className="md:w-[39vw] w-[92vw] md:h-[40vh] h-[32vh] bg-stone-500 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          <NavLink to="/projects">
            <div className="w-[100%] md:h-[38vh] h-[30vh] bg-arrow bg-cover bg-center bg-no-repeat rounded-md"></div>
            <h2 className="-translate-y-[10vh] h-[10vh] font-opensans uppercase font-bold text-[3vh] bg-white/70 pl-2 rounded-b-lg">
              {t("menu.projects")}
            </h2>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
