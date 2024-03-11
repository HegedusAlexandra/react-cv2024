import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";
import { motion } from "framer-motion";
import {useInViewAnimation} from '../hooks/inView'

export default function Project({ id }) {
  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };

  const [setRef, inView] = useInViewAnimation({
    threshold: 0.3, // Customize this value as needed
  });

  return (
    <div
      id={id}
      className="flex flex-col w-[100%] md:h-[84vh] h-[100vh] md:px-[20%] bg-stone-600 snap-child"
    >
      <div className="flex justify-center w-[100%] md:mb-[0vh] mb-[4vh]">
        <ScreenHeader title={"menu.projects"} />
      </div>
      <div
        id={id}
        className="flex md:flex-row flex-col justify-between items-start w-[100%] md:h-[64vh] h-[100vh] p-[4vw] pt-[8vh] md:p-0 md:pt-[6vh] md:gap-0 gap-[2vw] bg-stone-600 snap-child"
      >
        <motion.a
        ref={setRef}
         variants={variants}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         custom={0}
          href="https://leohunts.com/"
          className={`md:w-[40vh] w-[92vw] md:h-[40vh]  bg-stone-700 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[20vh] bg-LH bg-cover bg-right bg-no-repeat rounded-md"></div>
          
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] bg-yellow-400 rounded-l-md pl-2">
              LEOHUNTS
            </h2>
          
        </motion.a>
        <motion.a
        ref={setRef}
         variants={variants}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         custom={1}
          href="https://hegedusalexandra.github.io/bankist/"
          className={`md:w-[40vh] w-[92vw] md:h-[40vh]  bg-stone-700 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          <div className="w-[100%] md:h-[38vh] h-[20vh] bg-BANK bg-cover bg-left bg-no-repeat rounded-md"></div>
         
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] bg-yellow-400 rounded-l-md pl-2">
              BANKIST
            </h2>
          
        </motion.a>
        <motion.div
        ref={setRef}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2} // Adjust the custom delay as needed
          className="md:w-[40vh] w-[92vw] md:h-[40vh] h-fit bg-stone-700 p-2 rounded-md shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          <NavLink to="/projects">
            <div className="w-[100%] md:h-[38vh] h-[20vh] bg-arrow bg-cover md:bg-top bg-center bg-no-repeat rounded-md"></div>
            <h2 className="-translate-y-[6vh] translate-x-[3vh] font-opensans uppercase font-bold text-[3vh] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] bg-red-600 rounded-l-md pl-2">
                {t('menu.projects')}
            </h2>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
