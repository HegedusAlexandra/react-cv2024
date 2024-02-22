import React from 'react'
import me from '../assets/pictures/me.jpg'
import me_cartoon from '../assets/pictures/cartoon_me.jpg'

export default function FlipPic() {
  return (
    <div className="absolute z-10 border-dashed border-[14px] border-gray-900 right-[24%] top-[14%] rounded-full perspective group">
      <div className="size-[30vh] rounded-full mx-auto group-hover:animation-flip-slow">
        <div className="relative w-full h-full rounded-full">
          <img
            className="absolute w-full h-full rounded-full object-cover"
            src={me}
            alt="Front"
          />
          {/* <img
            className="absolute w-full h-full rounded-full object-cover"
            src={me_cartoon}
            alt="Back"
          /> */}
        </div>
      </div>
    </div>
  )
}
{/* <img className="absolute z-10 size-[30vh] rounded-full shadow-xl border-dashed border-[14px] border-gray-900 right-[24%] top-[14%]" alt="me" src={me}/> */}