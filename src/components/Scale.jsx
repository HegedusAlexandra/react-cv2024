import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Scale({
  containerWidth = 100,
  scaleWidth = 60,
  containerHeight = 4,
  scaleHeight = 80,
  containerColor = "#374151",
  scaleColor = "#F3F4F6"
}) {
  const [scaleRef, scaleInView] = useInView({
    threshold: 0.3
  });

  const variants = {
    hidden: {
      width: "10%",
      backgroundColor: containerColor
    },
    visible: {
      width: `${scaleWidth}%`,
      backgroundColor: scaleColor
    }
  };

  return (
    <div
      className="min-h-[5vh] flex items-center px-1"
      style={{
        width: `${containerWidth}%`,
        height: `${containerHeight}vh`,
        backgroundColor: containerColor
      }}
    >
      <motion.div
        ref={scaleRef}
        variants={variants}
        initial="hidden"
        animate={scaleInView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          height: `${scaleHeight}%`
        }}
        className="bg-concrete2 bg-cover"
      />
    </div>
  );
}
