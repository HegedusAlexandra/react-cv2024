import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project({ id }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      id={id}
      className="flex justify-center w-full bg-[#fdfbf7] py-[10vh] px-4 md:px-32"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full bg-white p-2 rounded-md shadow-md overflow-hidden"
      >
        <NavLink to="/projects" className="block">
          <div className="h-[10vh] md:h-[24vh] bg-arrow bg-cover bg-center rounded-md opacity-30" />

          <h2 className="mt-4 font-opensans uppercase font-bold text-2xl text-stone-600 hover:text-stone-800">
            {t("menu.projects")}
          </h2>
        </NavLink>
      </motion.div>
    </section>
  );
}
