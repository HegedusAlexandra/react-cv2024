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

  const a = screenWidth / 8;
  const b = screenWidth / 6;
  const c = screenWidth / 7;

  return (
    <div className="container">
      <div className="layers" ref={sceneRef}>
        <svg width="0" height="0">
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feFlood floodColor="rgba(0,0,0,0.5)" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <svg
          className="layer"
          data-depth="0.1"
          viewBox={`0 0 ${screenWidth} ${screenHeight * 2}`}
        >
          <g style={{ filter: "url(#shadow)" }}>
            <circle
              cx={`${screenWidth - a * 0.4}`}
              cy={`${a}`}
              r={a}
              fill="#FBB07F"
            />
            <circle
              cx={`${screenWidth - a * 1.4}`}
              cy={`${(a / 12) * 7 + b}`}
              r={b}
              fill="#FBB07F"
            />
            <circle
              cx={`${screenWidth - a * 0.9}`}
              cy={`${(a / 12) * 7 + b + c}`}
              r={c}
              fill="#FBB07F"
            />
          </g>
        </svg>
        <svg
          className="layer"
          data-depth="0.2"
          viewBox={`0 0 ${screenWidth} ${screenHeight * 2}`}
        >
          <g style={{ filter: "url(#shadow)" }}>
            <circle
              cx={`${screenWidth - a * 0.35}`}
              cy={`${a}`}
              r={a * 0.8}
              fill="#CFC7B9"
            />
            <circle
              cx={`${screenWidth - a * 1.25}`}
              cy={`${(a / 12) * 7 + b}`}
              r={b * 0.9}
              fill="#CFC7B9"
            />
            <circle
              cx={`${screenWidth - a}`}
              cy={`${(a / 12) * 7 + b + c}`}
              r={c * 0.8}
              fill="#CFC7B9"
            />
          </g>
        </svg>
        <svg
          className="layer"
          data-depth="0.3"
          viewBox={`0 0 ${screenWidth} ${screenHeight * 2}`}
        >
          <g style={{ filter: "url(#shadow)" }}>
            <circle
              cx={`${screenWidth - a * 0.2}`}
              cy={`${a * 1.4}`}
              r={a * 0.6}
              fill="#F9E3D5"
            />
            <circle
              cx={`${screenWidth - a}`}
              cy={`${(a / 12) * 7 + b}`}
              r={b * 0.8}
              fill="#F9E3D5"
            />
            <circle
              cx={`${screenWidth - a}`}
              cy={`${(a / 12) * 7 + b + c}`}
              r={c * 0.6}
              fill="#F9E3D5"
            />
          </g>
        </svg>
        <svg
          className="layer2"
          data-depth="0.1"
          viewBox={`0 0 ${screenWidth} ${screenHeight * 2}`}
        >
          <g style={{ filter: "url(#shadow)" }}>
            <circle
              cx={`${-a/4}`}
              cy={`${screenHeight-a*0.9}`}
              r={a * 0.55}
              fill="#FBB07F"
            />
            <circle
              cx={`${0}`}
              cy={`${screenHeight}`}
              r={b * 0.8}
              fill="#FBB07F"
            />
            <circle
              cx={`${0}`}
              cy={`${screenHeight+b}`}
              r={b * 0.6}
              fill="#FBB07F"
            />
          </g>
        </svg>
        <svg
          className="layer"
          data-depth="0.1"
          viewBox={`0 0 ${screenWidth} ${screenHeight * 3.5}`}
        >
          <g style={{ filter: "url(#shadow)" }}>
            <circle
              cx={`${-screenWidth/2}`}
              cy={`${screenHeight*2-b}`}
              r={a }
              fill="#CFC7B9"
            />
            <circle
              cx={`${-screenWidth/2}`}
              cy={`${screenHeight*2+b}`}
              r={b}
              fill="#CFC7B9"
            />
            <circle
              cx={`${-screenWidth/2}`}
              cy={`${screenHeight*2+b+c*1.5}`}
              r={b * 0.7}
              fill="#CFC7B9"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
