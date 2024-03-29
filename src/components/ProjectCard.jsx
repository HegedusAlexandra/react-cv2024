import React ,{useEffect} from "react";
import { useTranslation } from "react-i18next";
import githubpic from "../assets/simple_icon/github.svg";
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({
  link,
  github,
  background,
  headline,
  description
}) {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  return (
    <motion.a
    target="blank"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
      href={link}
      className={`bg-stone-700 p-2 mt-[20vh] mb-[5vh] mx-[4%] md:mx-[10%] rounded-md shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] snap-child`}
    >
      <div
        className={`w-[100%] md:h-[50vh] h-[40vh] ${background} bg-top bg-cover rounded-md`}
      />
      <div className="w-[100%] pt-1 text-stone-100 font-opensans">
        <div className="flex justify-between items-center w-[100%] pt-1 text-stone-100 font-opensans">
          <h2 className="font-opensans uppercase font-bold text-[4vh]">
            {t(headline)}
          </h2>
          {(background === 'bg-OKS' || background === 'bg-WA' || background === 'bg-BANK' || background === 'bg-SP') && <motion.a
           target="blank"
            whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
            className=" flex justify-center items-center size-[3.8vh] rounded-full mr-[2vh] "
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href={github}
          >
            <img
              width={150}
              height={150}
              loading="eager"
              className=" size-[3.2vh]"
              alt="github"
              src={githubpic}
            />
          </motion.a>}
        </div>
        <p className="text-stone-400">{t(description)}</p>
      </div>
    </motion.a>
  );
}
