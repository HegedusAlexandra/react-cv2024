import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectCard({
  link,
  background,
  headline,
  description
}) {

  const {t} = useTranslation()

  return (
    <a
      href={link}
      className={`h-[70vh] bg-stone-700 p-2 mt-[20vh] mb-[5vh] rounded-2xl shadow-[3px_5px_16px_5px_rgba(0,0,0,0.6)] snap-child`}
    >
      <div
        className={`w-[100%] h-[50vh] ${background} bg-top bg-cover rounded-2xl`}
      />
      <div className="w-[100%] pt-1 text-stone-100 font-opensans">
        <h2 className="font-opensans uppercase font-bold text-[4vh]">
          {t(headline)}
        </h2>
        <p className="text-stone-400">{t(description)}</p>
      </div>
    </a>
  );
}
