/* eslint-disable react/jsx-no-comment-textnodes */
import "./Main.css";
import Landing from "./screens/Landing";
import Skills from "./screens/Skills";
import ParallaxTops from "./components/ParallaxTops";
import Menu from "./components/Menu";
import CircularMenu from "./components/CircularMenu";
import FlipPic from "./components/FlipPic";
import Introduction from "./screens/Introduction";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import { useTranslation } from "react-i18next";

function Main() {
const {t}= useTranslation()
console.log('====================================');
console.log("In the midst of chaos, there is also opportunity. - Sun Tzu");
console.log('====================================');

  return (
    <div className="w-[100%]ts">
      {window.innerWidth > 780 ? <Menu /> : <CircularMenu />}
      <FlipPic />
      <div className="absolute w-[100%] h-[200vh] overflow-hidden">
      {window.innerWidth > 780 && <ParallaxTops />}
      </div>
      <div id="landing">
        <Landing />
      </div>
      <div id="skills">
        <h2 className="flex flex-col w-[100%] md:px-[30%] px-[4%] md:pt-[20vh] md:pb-[10vh] pt-[10vh] pb-[2vh]">
          <p className="md:w-[100%] w-[92%] md:text-[5vh] text-[6vh] font-roboto font-semibold capitalize">
            // {t('menu.skills')}
          </p>
        </h2>
        <Skills />
      </div>
      <div id="about me">
      <h2 className="flex flex-col w-[100%] md:px-[30%] px-[4%] md:pt-[20vh] md:pb-[10vh] pt-[10vh] pb-[2vh]">
          <p className="md:w-[100%] w-[92%] md:text-[5vh] text-[6vh] font-roboto font-semibold capitalize">
            // {t('menu.introduction')}
          </p>
        </h2>
        <Introduction />
      </div>
      <div id="projects">
      <h2 className="flex flex-col w-[100%] md:px-[30%] px-[4%] md:pt-[20vh] md:pb-[10vh] pt-[10vh] pb-[2vh]">
          <p className="md:w-[100%] w-[92%] md:text-[5vh] text-[6vh] font-roboto font-semibold capitalize">
            // {t('menu.projects')}
          </p>
        </h2>
        <Projects />
      </div>
      <div id="contact">
      <h2 className="flex flex-col w-[100%] md:px-[30%] px-[4%] md:pt-[20vh] md:pb-[6vh] pt-[10vh] pb-[2vh]">
          <p className="md:w-[100%] w-[92%] md:text-[5vh] text-[6vh] font-roboto font-semibold capitalize">
            // {t('menu.contact')}
          </p>
        </h2>
        <Contact />
      </div>
      <footer className="bg-stone-600">
        <div className="w-[100%] h-[2vh] bg-stone-600 text-center p-4 font-bold text-[2vh]">
          h.alexa.dev@gmail.com
        </div>
        <div className="w-[100%] h-[8vh] bg-stone-600 text-center p-4">
          &copy; Copyright 2024
        </div>
      </footer>
    </div>
  );
}

export default Main;
