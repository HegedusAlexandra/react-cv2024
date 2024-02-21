import "./Main.css";
import Landing from "./screens/Landing";
import ParallaxTops from "./components/ParallaxTops";

function Main() {
  return (
    <div className="w-[100%] h-[400vh]">
      <div className="absolute w-[100%] h-[200vh] overflow-hidden">
        <ParallaxTops />
      </div>
      <Landing />
    </div>
  );
}

export default Main;
