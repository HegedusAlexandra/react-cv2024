import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] px-[30%] py-[4%] bg-gradient-to-b from-[#F9E3D5] to-gray-200 to-[20%] gap-[1px]">
      <h2 className="font-opensans md:text-[3vh]">// Projects</h2>
      <div className="flex flex-row w-[100%] h-[80vh] gap-[1px]">
        <a
          href="https://leohunts.com/"
          className="flex-1 h-[100%] bg-LH bg-top rounded-3xl"
        >
          
        </a>
        <a
          href="https://www.golfracks.club/"
          className="flex-1 h-[100%] bg-GF bg-center rounded-3xl"
        >
         
        </a>
      </div>
    </div>
  );
}
