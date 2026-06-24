/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect } from "react";
import "./Main.css";
import Landing from "./screens/Landing";
import Menu from "./components/Menu";
import CircularMenu from "./components/CircularMenu";
import Introduction from "./screens/Introduction";
import { useParams } from "react-router-dom";
import HelmetComp from "./components/HelmetComponent";
import Footer from "./components/Footer";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills"

function Main() {
  const { slug } = useParams();


  console.log(
    "Welcome to my page, if you have any question or just want to say hello, please don't hesitate to contact me! :)"
  );
  console.log("====================================");

  useEffect(() => {
    scrollToarticle(slug);
  }, [slug]);

  const scrollToarticle = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col w-full font-opensans">
      <HelmetComp title={"helmet.main"} url="" content={"helmet.pro_desc"} />
      
       <Menu />  
       <CircularMenu />
      
      <article id="landing">
        <Landing />
      </article>

      <article id="introduction">
        <Introduction />
      </article>

    <article id="skills">
        <Skills />
      </article> 

      <article id="projects">
        <Projects />
      </article>
     
      <Footer></Footer>

    </main>
  );
}

export default Main;
