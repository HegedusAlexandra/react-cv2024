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

function Main() {
  return (
    <div className="w-[100%]">
      {window.innerWidth > 780 ? <Menu /> : <CircularMenu />}
      <FlipPic />
      <div className="absolute w-[100%] h-[200vh] overflow-hidden">
        <ParallaxTops />
      </div>
      <div className="">
        <Landing />
      </div>
      <div className="">
      <h2 className="flex flex-col w-[100%] px-[30%] py-[10vh]">
        <p className="w-[40%] md:text-[5vh] font-roboto font-semibold">
          // Skills
        </p>
      </h2>
        <Skills />
      </div>
      <div className=""><h2 className="flex flex-col w-[100%] px-[30%] py-[10vh]">
        <p className="w-[40%] md:text-[5vh] font-roboto font-semibold">
          // Introduction
        </p>
      </h2>
        <Introduction />
      </div>
      <div className="">
      <h2 className="flex flex-col w-[100%] px-[30%] py-[10vh]">
        <p className="w-[40%] md:text-[5vh] font-roboto font-semibold">
          // Projects
        </p>
      </h2>
        <Projects />
      </div>
      <div className="">
      <h2 className="flex flex-col w-[100%] px-[30%] py-[10vh]">
        <p className="w-[40%] md:text-[5vh] font-roboto font-semibold">
          // Contact
        </p>
      </h2>
        <Contact />
      </div>
      <footer><div className="w-[100%] h-[6vh] bg-stone-600 text-center p-4">&copy; Copyright 2024</div></footer>
      
    </div>
  );
}

export default Main;
