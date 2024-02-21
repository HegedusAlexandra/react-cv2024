import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

export default function ParallaxTops() {
  const sceneRef = useRef(null);
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true
      });
      return () => parallaxInstance.destroy();
    }
  }, []);

  const a= screenWidth/8
  const b= screenWidth/5
  const c= screenWidth/5

  return (
    <div className="container">
      <div className="layers" ref={sceneRef}>
        <svg
          className="layer "
          data-depth="0.1"
          viewBox={`0 0 ${screenWidth} ${screenHeight*2}`}
          style={{ filter: "url(#shadow)" }}
        >
          <circle
            cx={`${screenWidth-a*0.7}`}
            cy={`${a}`}
            r={a}
            fill="#FBB07F"
          />
          <circle
            cx={`${screenWidth-a*1.7}`}
            cy={`${a+b}`}
            r={b}
            fill="#FBB07F"
          />
          <circle
            cx={`${screenWidth-a}`}
            cy={`${a+b+c}`}
            r={c}
            fill="#FBB07F"
          /> 
        </svg>        
       <svg
          className="layer "
          data-depth="0.2"
          viewBox={`0 0 ${screenWidth} ${screenHeight*2}`}
          style={{ filter: "url(#shadow)" }}
        >
          <circle
            cx={`${screenWidth-a*0.7}`}
            cy={`${a}`}
            r={a*0.8}
            fill="#BABAC5"
          />
          <circle
            cx={`${screenWidth-a*1.7}`}
            cy={`${a+b}`}
            r={b*0.9}
            fill="#BABAC5"
          />
          <circle
            cx={`${screenWidth-a}`}
            cy={`${a+b+c}`}
            r={c*0.8}
            fill="#BABAC5"
          /> 
        </svg>   
        <svg
          className="layer "
          data-depth="0.3"
          viewBox={`0 0 ${screenWidth} ${screenHeight*2}`}
          style={{ filter: "url(#shadow)" }}
        >
          <circle
            cx={`${screenWidth-a*0.2}`}
            cy={`${a*1.4}`}
            r={a*0.6}
            fill="#F9E3D5"
          />
          <circle
            cx={`${screenWidth-a}`}
            cy={`${(a+b)*1.1}`}
            r={b*0.8}
            fill="#F9E3D5"
          />
          <circle
            cx={`${screenWidth-a}`}
            cy={`${(a+b+c)}`}
            r={c*0.4}
            fill="#F9E3D5"
          /> 
        </svg>           
      </div>
    </div>
  );
}
