import "./Main.css";
import Landing from "./screens/Landing";
import Skills from "./screens/Skills";
import ParallaxTops from "./components/ParallaxTops";
import Menu from "./components/Menu";
import CircularMenu from "./components/CircularMenu";
import FlipPic from "./components/FlipPic";

function Main() {
  return (
    <div className="w-[100%] h-[400vh]">
      {window.innerWidth > 780 ? <Menu/> : <CircularMenu/>}
      <FlipPic/>
       <div className="absolute w-[100%] h-[200vh] overflow-hidden">
        <ParallaxTops />
      </div> 
      <Landing />
      <Skills />
    </div>
  );
}

export default Main;
