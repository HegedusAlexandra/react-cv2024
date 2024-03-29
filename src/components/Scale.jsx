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
      width: "5%",
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    },
    visibleScale: {
      width: `${scaleWidth}%`,
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    }
  };

  return (
    <div
      className={`flex items-center px-1 w-[${containerWidth}%] h-[${containerHeight}vh] bg-${containerColor} rounded-full`}
    >
      <motion.div
        ref={scaleRef}
        animate={scaleInView ? "visibleScale" : "hiddenScale"}
        variants={variants}
        className={`w-[${scaleWidth}%] h-[${scaleHeight}%] bg-${scaleColor} rounded-full`}
      ></motion.div>
    </div>
  );
}
