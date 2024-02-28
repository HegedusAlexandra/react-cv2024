import React from "react";
import Menu from "../components/Menu";
import CircularMenu from "../components/CircularMenu";

/* <ProjectCard link={} background={} headline={} description={}/> */

export default function Projects() {
  return (
    <div className="flex flex-col w-[100%] h-[10vh] bg-stone-200">
      {window.innerWidth > 780 ? <Menu /> : <CircularMenu />}
      <div className="flex flex-col w-[100%] gap-[10px] md:px-[30%] px-[4%] py-[4%] md:py-[4%] bg-stone-200">
        <a
          href="https://hegedusalexandra.github.io/PCL/PCL.html"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] "
        >
          <div className="w-[100%] h-[30vh] bg-PCT bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              PetChat
            </h2>
            <p>
              Mobile app, and this is a simple site to redirect to app download
              from desktop view, I was participated in the project and created
              this site, it was made wih react native, expo, GQL, apollo
            </p>
          </div>
        </a>
        <a
          href="https://www.golfracks.club/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-GF bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              GolfRacks
            </h2>
            <p>
              Mobile app i was participated of the creation and correction, and
              this is a simple site to redirect to app download from desktop
              view
            </p>
          </div>
        </a>
        <a
          href="https://hegedusalexandra.github.io/weather_forecast/frontend/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-WA bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              Weather App
            </h2>
            <p>
              School project made with JavaScript, if you type the name of the
              city and hi enter rovies the actual datas about it
            </p>
          </div>
        </a>
        <a
          href="https://leohunts.com/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-LH bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              LEOHUNTS
            </h2>
            <p>
              Real Esttate selling company website, I was helping with the
              correction and some function creation.Created with React, Algolia,
              Next.js
            </p>
          </div>
        </a>
        <a
          href="https://hegedusalexandra.github.io/bankist/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-BANK bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              BANKIST
            </h2>
            <p>Practicing JavaScript I have made a fake bank website project</p>
          </div>
        </a>
        <a
          href="https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-OKS bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              OMA's KLEIDERSCHRANK
            </h2>
            <p>
              I have made a website with react for a secon-hand clothshop, but
              since it closed,even though here is the website
            </p>
          </div>
        </a>
        <a
          href="https://hegedusalexandra.github.io/small_projects/"
          className="flex-1 bg-stone-700 p-2 rounded-2xl mb-[4vh] shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)]"
        >
          <div className="w-[100%] h-[30vh] bg-SP bg-top bg-cover rounded-2xl "></div>
          <div className="w-[100%]  pt-1 text-stone-100 font-opensans">
            <h2 className="font-opensans uppercase font-bold text-[4vh]">
              SMALL PROJECTS
            </h2>
            <p>JavaScript practice with some fun, riddles and games</p>
          </div>
        </a>
      </div>
    </div>
  );
}
