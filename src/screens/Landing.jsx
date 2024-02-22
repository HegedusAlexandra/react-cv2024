import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-landing bg-cover bg-no-repeat">
      <h1 className="flex flex-col items-start w-[40%]">
        <p className="md:text-[5vh] font-opensans font-semibold">Hello!</p>
        <p className="md:text-[5vh] font-opensans font-semibold">I am Alexandra a passionate frontend <span className="text-red-700 font-bold"> developer</span></p>
        <p className="">
          Welcome to my stylish portfolio site.I specialize in web development
          and love creating visually appealing websites.Explore my projects and
          get in touch with me.
        </p>
      </h1>
    </div>
  );
}
