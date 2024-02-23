import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col w-[100%] px-[30%]">
      <div className="flex flex-row w-[100%] h-[70vh] gap-[10px]">
        <a
          href="https://leohunts.com/"
          className="flex-1 h-[100%] bg-LH bg-top bg-cover rounded-full"
        ></a>
        <a
          href="https://www.golfracks.club/"
          className="flex-1 h-[100%] bg-GF bg-center bg-cover rounded-full"
        ></a>
        <a
          href="https://www.golfracks.club/"
          className="flex-1 h-[100%] bg-LH bg-center rounded-full"
        ></a>
        <a
          href="https://www.golfracks.club/"
          className="flex-1 h-[100%] bg-GF bg-center rounded-full"
        ></a>
      </div>
    </div>
  );
}
