import globe from "../assets/simple_icon/globe.svg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import me from "../assets/pictures/me (5).png";
import AnimatedIcons from "../components/AnimatedIcons";
import LanguageDropdown from "../components/LanguageDropdown";

export default function Landing({ id }) {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  return (
    <div
      id={id}
      className=" w-[100%] bg-gray-100 md:px-16 px-1 md:pt-[16vh] pt-4"
    >
      <div className="flex flex-row">
        <div className="flex flex-row md:text-gray-800 text-gray-600 text-lg gap-2 md:justify-start justify-center items-center w-[100%] uppercase h-[8vh] md:border-l-2 border-2 border-b-0 border-gray-700 p-4">
          <div className="absolute md:static w-[10vw]">
          <div className="flex flex-row">
          <img
            src={globe}
            alt="Location"
            width={18}
            height={18}
            className=" opacity-30 "
            loading="eager"
          />
          <p>{selectedLanguage === "it" ? " Udine" : " Budapest"}</p></div>
        </div>
        </div>
        <div className="md:hidden border-r-2 border-t-2 border-gray-700">
          <LanguageDropdown></LanguageDropdown>
        </div>
      </div>
      <div
        className="md:h-[58vh] h-[70vh] flex md:flex-row  flex-col border-2 border-gray-700 md:bg-concrete2 bg-concrete2vertical bg-contain bg-fixed
    animate-bgMove"
      >
        <section className="flex flex-col justify-between p-4 md:backdrop-blur-sm ">
          <h1 className=" w-[100%] uppercase text-start font-black md:text-8xl text-5xl tracking-tighter ">
            <span className="text-red-600 md:text-base text-[8px] tracking-normal">
              Alexandra Hegedüs
            </span>
            <br />
            <span className="text-black">
              {t("landing.developer").slice(0, 6)}
            </span>
            <br />
            <span className="text-red-600">
              {t("landing.developer").slice(6, 10)}
            </span>
            <span className=" text-black">
              {t("landing.developer").slice(10, 18)}
            </span>
            <br />
            <span className=" text-black">
              {t("landing.developer").slice(18)}
            </span>

            <br />
          </h1>
          <p className="md:justify-center justify-center md:w-[30%] text-md md:text-gray-800 text-gray-600 md:flex hidden">
            {t("landing.long")}
          </p>
        </section>
        <section className="flex-1 flex md:flex-col md:justify-end justify-center md:items-center items-end md:w-[40vw] w-[100vw] md:pt-[8vh] md:border-l-2 border-red-600 ">
          <img
            src={me}
            alt="Alexandra Hegedüs"
            className="w-[90%] object-contain"
          />
        </section>
      </div>
      <div className="bg-white backdrop-blur-sm h-[8vh] w-full py-[1vh] border-2 border-t-0 border-gray-700">
        <AnimatedIcons />
      </div>
      <div className=" w-[74%] md:h-[16vh] h-[2vh] border-r-2 border-gray-700 p-4 translate-x-4" />
    </div>
  );
}
