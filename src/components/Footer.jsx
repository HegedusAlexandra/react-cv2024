import React ,{useState}from "react";
import {motion} from 'framer-motion'
import github from '../assets/simple_icon/github.svg'
import linkedin from '../assets/simple_icon/linkedin.svg'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer({ id }) {
  const [visible,setVisible] = useState(false)
const {t} = useTranslation()

  return (
    <footer id={id} className="flex md:flex-row flex-col bg-stone-600 w-[100%] px-[4%]">
      <div onClick={() => setVisible(!visible)} className="flex-1 flex flex-col md:items-start w-[100%] h-[20vh] bg-stone-600 text-center p-4 font-bold font-montserrat text-[2vh] ">
         <motion.p  whileHover={{ scale: 1.2, backgroundColor: "#F7C003" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }} className="hover:bg-stone-700 p-2 rounded-md">Sitemap</motion.p> {visible &&   <>
          <NavLink to="/"><p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">{t("menu.home")}</p></NavLink>       
          <NavLink to="/projects"><p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">{t("menu.projects")}</p></NavLink>       
          <NavLink to="/introduction"><p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">{t("menu.about me")}</p></NavLink>       
          <NavLink to="/contact"><p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">{t("menu.contact")}</p></NavLink></>     }    
      </div>
      <div className="flex-1 w-[100%] h-[20vh] bg-stone-600 text-center p-4">
          <p>h.alexa.dev@gmail.com</p>
          <p>&copy; Copyright 2024 Hegedüs Alexandra</p> 
      </div>
      <div className="flex-1 flex flex-row items-start md:justify-end justify-center w-[100%] h-[20vh] bg-stone-600 text-center p-4">    
          <motion.a
            whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
            className=" flex justify-center items-center size-[3vh] rounded-full mr-[2vh] " 
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="https://github.com/HegedusAlexandra?tab=repositories"
          >
            <img
              width={150}
              height={150}
              loading="eager"
              className=" size-[2.5vh]"
              alt="github"
              src={github}
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
            className=" flex justify-center items-center size-[3vh] rounded-sm mr-[2vh]"
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="https://www.linkedin.com/in/alexandra-heged%C3%BCs-135220269/"
          >
            <img
              width={150}
              height={150}
              loading="eager"
              className=" size-[2.5vh]"
              alt="linkedin"
              src={linkedin}
            />
          </motion.a>        
      </div>
    </footer>
  );
}
