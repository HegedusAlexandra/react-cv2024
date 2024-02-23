import React from "react";
import globe from "../assets/simple_icon/globe.svg";

export default function Landing() {

const language = 'en'

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-landing bg-cover bg-no-repeat">
      <div className="flex flex-row justify-start items-center md:w-[40%] w-[90%] md:bg-transparent bg-[#ffffff46] rounded-md p-[1%] font-roboto font-semibold mb-[2vh] md:-translate-y-[8vh]">
        <img className="size-[3vh]" alt="globe" src={globe} />
        <p>{language === 'it' ? ' Udine' : ' Budapest'}</p>
      </div>
      <h1 className="flex flex-col items-start md:w-[40%] w-[90%] p-[1%] md:bg-transparent bg-[#ffffff46] rounded-md">
        <p className="md:w-[80%] w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
          Hello dear visitor!
        </p>
        <p className="md:w-[80%] w-[100%] md:text-[5vh] text-[4vh] font-roboto font-semibold leading-[5vh] md:leading-[7vh]">
          I am Alexandra a passionate frontend{" "}
          <span className="text-red-700 font-bold"> developer</span>
        </p>
        <p className=" md:text-[2vh] font-opensans md:text-gray-600 text-black">
          Welcome to my stylish portfolio site.I specialize in web development
          and love creating visually appealing websites.Explore my projects and
          get in touch with me.
        </p>
      </h1>
    </div>
  );
}
