import React from "react";
import Menu from "../components/Menu";
import CircularMenu from "../components/CircularMenu";
import ProjectCard from "../components/ProjectCard";

/* <ProjectCard link={} background={} headline={} description={}/> */

export default function Projects() {
  const allCardDetails = [
    {
      link: "https://leohunts.com/",
      background: "bg-LH",
      headline: "LEOHUNTS",
      description:
        "Real Esttate selling company website, I was helping with the correction and some function creation.Created with React, Algolia, Next.js"
    },
    {
      link: "https://hegedusalexandra.github.io/PCL/PCL.html",
      background: "bg-PCT",
      headline: "PetChat",
      description:
        "Mobile app, and this is a simple site to redirect to app downloadm from desktop view, I was participated in the project and created this site, it was made wih react native, expo, GQL, apollo"
    },
    {
      link: "https://www.golfracks.club/",
      background: "bg-GF",
      headline: "GolfRacks",
      description:
        "Mobile app i was participated of the creation and correction, and this is a simple site to redirect to app download from desktop view"
    },
    {
      link: "https://hegedusalexandra.github.io/weather_forecast/frontend/",
      background: "bg-WA",
      headline: "Weather App",
      description:
        "School project made with JavaScript, if you type the name of the city and hi enter rovies the actual datas about it"
    },
    {
      link: "https://hegedusalexandra.github.io/bankist/",
      background: "bg-BANK",
      headline: "BANKIST",
      description:
        "Practicing JavaScript I have made a fake bank website project"
    },
    {
      link: "https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/",
      background: "bg-OKS",
      headline: "OMA's KLEIDERSCHRANK",
      description:
        "I have made a website with react for a secon-hand clothshop, but since it closed,even though here is the website"
    },
    {
      link: "https://hegedusalexandra.github.io/small_projects/",
      background: "bg-SP",
      headline: "SMALL PROJECTS",
      description: "JavaScript practice with some fun, riddles and games"
    }
  ];

  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-stone-500 ">
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
