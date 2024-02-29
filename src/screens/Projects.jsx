import React from "react";
import Menu from "../components/Menu";
import CircularMenu from "../components/CircularMenu";
import ProjectCard from "../components/ProjectCard";
import { allCardDetails } from "../utils/allCardDetails";
import HelmetComp from "../components/HelmetComponent";

export default function Projects() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-stone-500 ">
     {/*  <HelmetComp title={'helmet.projects'} url="projects" content={'helmet.pro_desc'}/> */}
      <div className="flex flex-col w-[100%] px-[4%] md:px-[20%] pb-[20vh] bg-stone-100 snap-parent">
        {window.innerWidth > 0 ? <Menu /> : <CircularMenu />}
        {allCardDetails.map((el) => (
          <ProjectCard
            key={el.background}
            link={el.link}
            background={el.background}
            headline={el.headline}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
}
