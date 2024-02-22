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
    <div className="w-[100%] h-[450vh] snapy">
      {window.innerWidth > 780 ? <Menu /> : <CircularMenu />}
      <FlipPic />
      <div className="absolute w-[100%] h-[200vh] overflow-hidden">
        <ParallaxTops />
      </div>
      <div className="">
        <Landing />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <Introduction />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  );
}

export default Main;
