/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect } from "react";
import "./Main.css";
import Landing from "./screens/Landing";
import Skills from "./screens/Skills";
import ParallaxTops from "./components/ParallaxTops";
import Menu from "./components/Menu";
import CircularMenu from "./components/CircularMenu";
import Introduction from "./screens/Introduction";
import Project from "./screens/Project";
import Contact from "./screens/Contact";

import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import HelmetComp from "./components/HelmetComponent";
import ProjectCard from "./components/ProjectCard";
import { allCardDetails } from "../src/utils/allCardDetails";

function Main() {
  const { slug } = useParams();
  const { t } = useTranslation();
  console.log(
    "Welcome to my page, if you have any question or just want to say hello, please don't hesitate to contact me! :)"
  );
  console.log("====================================");

  useEffect(() => {
    scrollToSection(slug);
  }, [slug]);

  const scrollToSection = (slug) => {
    console.log(slug);
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-stone-900 ">
      <HelmetComp title={'helmet.main'} url="" content={'helmet.pro_desc'}/>
      {window.innerWidth > 0 ? <Menu /> : <CircularMenu />}
      <div className="w-[100%] h-[500vh] snap-parent">
        <Landing id={"landing"} />
        <Skills id={"skills"} />
        <Introduction id={"introduction"} />
        <Project id={"project"} />
        <Contact id={"contact"} />
      </div>
    </div>
  );
}

export default Main;
