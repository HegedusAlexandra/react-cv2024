import globe from "../assets/simple_icon/globe.svg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import FlipPic from "../components/FlipPic";

export default function Landing({ id }) {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  return (
    <div
      id={id}
      className="flex md:flex-row flex-col justify-center items-center w-[100%] h-[100vh] md:pl-[30%] md:pr-[10%] bg-landing bg-cover bg-no-repeat"
    >
      <div className="flex flex-col gap-4 justify-center md:justify-start items-center md:w-[100%] w-[90%] md:bg-transparent md:pt-0 pt-[10vh] rounded-md font-roboto  md:translate-y-0 translate-y-[4vh]">
        <div className="flex justify-center lg:hidden md:h-[64vh] h-[20vh] md:w-[60%] w-[100%] -translate-y-4">
          <FlipPic />
        </div>
        <div className="flex flex-row items-center text-stone-700 gap-2 md:justify-start justify-center w-[100%]">
          <img
            src={globe}
            alt="Location"
            width={24}
            height={24}
            className="opacity-60"
            loading="eager"
          />
          <span>{selectedLanguage === "it" ? " Udine" : " Budapest"}</span>
        </div>
        <div className="space-y-2 w-[100%]">
          <p className="flex md:justify-start justify-center w-[100%] text-2xl text-stone-700 ">
            {t("landing.hello")}
          </p>
          <p className="flex md:justify-start justify-center md:w-[60%] text-md text-stone-700 ">
            {t("landing.long")}
          </p>
        </div>
        <h1 className="space-y-1 w-[100%]">
          <p className="small-heading-shadow md:heading-shadow md:text-start text-center text-yellow-50 font-semibold md:text-8xl text-4xl">
            {t("landing.developer")}
          </p>
          <p className="small-heading-shadow md:heading-shadow md:text-start text-center text-yellow-50 font-semibold md:text-4xl text-xl">
            {t("landing.ecoinfo")}
          </p>
        </h1>
      </div>
    </div>
  );
}
