import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Scale({
  containerWidth = 100,
  scaleWidth = 60,
  containerHeight = 4,
  scaleHeight = 80,
  containerColor = "black",
  scaleColor = "red-500"
}) {
  const [scaleRef, scaleInView] = useInView({
    threshold: 0.3
  });

  const variants = {
    hiddenScale: {
      width: `${window.innerWidth > 780 ? '5' : '10'}%`,
      backgroundColor: 'black',
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    },
    visibleScale: {
      width: `${scaleWidth}%`,
      backgroundColor:'red',
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    }
  };

  return (
    <div
      className={`flex items-center px-1 w-[${containerWidth}%] md:h-[${containerHeight}vh] h-[2vh] bg-${containerColor} rounded-full`}
    >
      <motion.div
        ref={scaleRef}
        animate={scaleInView ? "visibleScale" : "hiddenScale"}
        variants={variants}
        className={`h-[${scaleHeight}%] bg-${scaleColor} rounded-full`}
      ></motion.div>
    </div>
  );
}
