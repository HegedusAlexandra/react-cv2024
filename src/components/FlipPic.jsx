import React from "react";
import me from "../assets/pictures/me.jpg";
import me_cartoon from "../assets/pictures/cartoon_me.jpg";

export default function FlipPic() {
  return (
    <div style={{
      animation: "spin 20s linear infinite", // Slower spin (5 seconds per rotation)
    }} className="flex justify-center items-center md:size-[38vh] size-[24vh] border-solid md:border-[10px] border-[6px] border-stone-900 rounded-full ">    
        <img
          width={600}
          height={600}
          className="md:size-[36vh] size-[22vh] rounded-full object-cover object-top"
          src={me_cartoon}
          alt="Front"
          loading="eager"
        />     
    </div>
  );
}
