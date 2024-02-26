import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col w-[100%] h-[200vh] gap-[10px] md:px-[30%] px-[4%] py-[4%] md:py-0 md:bg-transparent bg-stone-200">
      <a href="https://hegedusalexandra.github.io/weather_forecast/frontend/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-WA bg-top bg-cover rounded-2xl "></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            Weather App
          </h2>
          <p>School project made with JavaScript, if you type the name of the city and hi enter rovies the actual datas about it</p>
        </div>
      </a>
      <a href="https://hegedusalexandra.github.io/PCL/PCL.html" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-PCT bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            PetChat
          </h2>
          <p>Mobile app, and this is a simple site to redirect to app download from desktop view, I was participated in the project and created this site, it was made wih react native, expo, GQL, apollo</p>
        </div>
      </a>
      <a href="https://www.golfracks.club/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-GF bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            GolfRacks
          </h2>
          <p>Mobile app i was participated of the creation and correction, and this is a simple site to redirect to app download from desktop view</p>
        </div>
      </a>
      <a href="https://leohunts.com/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-LH bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            LEOHUNTS
          </h2>
          <p>Real Esttate selling company website, I was helping with the correction and some function creation.Created with React, Algolia, Next.js</p>
        </div>
      </a>   
      <a href="https://hegedusalexandra.github.io/bankist/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-BANK bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            BANKIST
          </h2>
          <p>Practicing JavaScript I have made a fake bank website project</p>
        </div>
      </a>   
    </div>
  );
}
