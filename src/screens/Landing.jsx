import React from "react";
import globe from "../assets/simple_icon/globe.svg";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-landing bg-cover bg-no-repeat">
      <div className="flex flex-row justify-start items-center w-[40%] font-roboto font-semibold mb-[2vh] -translate-y-[8vh]">
        <img className="size-[3vh]" alt="globe" src={globe} />
        <p>Udine,Budapest</p>
      </div>
      <h1 className="flex flex-col items-start w-[40%]">
        <p className="w-[80%] md:text-[5vh] font-roboto font-semibold">
          Hello dear visitor!
        </p>
        <p className="w-[80%]  md:text-[5vh] font-roboto font-semibold">
          I am Alexandra a passionate frontend{" "}
          <span className="text-red-700 font-bold"> developer</span>
        </p>
        <p className=" md:text-[2vh] font-opensans text-gray-600">
          Welcome to my stylish portfolio site.I specialize in web development
          and love creating visually appealing websites.Explore my projects and
          get in touch with me.
        </p>
      </h1>
    </div>
  );
}
