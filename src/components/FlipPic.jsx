import React from "react";
import me from "../assets/pictures/me.jpg";
import me_cartoon from "../assets/pictures/cartoon_me.jpg";

export default function FlipPic() {
  return (
    <div className="flex justify-center items-center md:size-[30vh] size-[24vh] border-solid md:border-[10px] border-[6px] border-stone-900 rounded-full ">    
        <img
          width={600}
          height={600}
          className="md:size-[28vh] size-[22vh] rounded-full object-cover"
          src={me}
          alt="Front"
          loading="eager"
        />
        {/* <img
            className="absolute w-full h-full rounded-full object-cover"
            src={me_cartoon}
            alt="Back"
          /> */}
     
    </div>
  );
}
