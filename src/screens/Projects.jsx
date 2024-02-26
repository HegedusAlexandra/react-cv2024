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
      <a href="https://leohunts.com/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-GF bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            Golfracks
          </h2>
          <p>valami leirás az oldalhoz majd utána názek</p>
        </div>
      </a>
      <a href="https://leohunts.com/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-LH bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            LEOHUNTS
          </h2>
          <p>valami leirás az oldalhoz majd utána názek</p>
        </div>
      </a>
      <a href="https://leohunts.com/" className="flex-1 mb-[6vh]">
        <div className="w-[100%] h-[70%] bg-LH bg-top bg-cover rounded-2xl"></div>
        <div className="w-[100%] h-[30%]">
          <h2 className="font-opensans uppercase font-bold mt-[2vh]">
            LEOHUNTS
          </h2>
          <p>valami leirás az oldalhoz majd utána názek</p>
        </div>
      </a>
      
    </div>
  );
}
