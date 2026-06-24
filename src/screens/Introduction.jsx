import React from "react";
import { useTranslation } from "react-i18next";
import { useLottie } from "lottie-react";
import lottie from "../assets/girl_fixed_palette.json";
import { useInView } from "react-intersection-observer";
import me from "../assets/pictures/me (7).jpg";
import iteration from "../assets/pictures/iteration (2).png";
import execute from "../assets/pictures/execute.png";
import Headline from "../components/Headline";

export default function Introduction({ id }) {
  const { t } = useTranslation();
  const options = {
    animationData: lottie,
    loop: true
  };

  const { View } = useLottie(options);

  const [lottieRef] = useInView({
    threshold: 0.3
  });

  return (
    <div
      id={id}
      className="flex flex-col justify-center items-center w-[100%] md:px-16 px-1 bg-gray-100 md:text-gray-800 text-gray-600 "
    >
      <div className="flex flex-col w-full h-full  overflow-hidden">
        <section className="flex  md:flex-row flex-col w-full border border-t-2 border-x-2 border-gray-700">
          <div className="flex flex-row md:w-[50%]">
            <div className="flex-1 w-[50%] border-r-2 border-gray-700 flex flex-col justify-end  bg-gray-800">
              <img
                loading="lazy"
                width={400}
                height={400}
                src={me}
                alt="Alexandra Hegedüs"
                className="w-[100%] object-cover "
              />
            </div>

            <div className="flex-1 w-[50%] border-r-2 border-gray-700 flex flex-col justify-end  bg-gray-800">
              <img
                width={400}
                height={400}
                src={iteration}
                alt="Alexandra Hegedüs"
                className="w-[100%] object-cover "
              />
            </div>
          </div>
          <div className="flex flex-row md:w-[50%]">
            <div
              ref={lottieRef}
              className="flex-1 w-[50%] bg-concrete bg-cover animate-bgMove border-r-2 border-gray-700"
            >
              {View}
            </div>

            <div className="flex-1 w-[50%] border-r-2 border-gray-700 flex flex-col justify-end  bg-concrete2 bg-cover bg-fixed">
              <img
                src={execute}
                alt="Alexandra Hegedüs"
                className="w-[100%] object-cover "
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-start items-start w-[100%]">
          <Headline
            title={t("menu.introduction")}
            description={t("introduction.description")}
          />
          <div className="flex flex-col justify-start items-start gap-4 w-[100%] p-4 border-x-2 border-b-2 border border-gray-700 ">
            <p>{t("introduction.1")}</p>

            <p>{t("introduction.2")}</p>

            <p>{t("introduction.3")}</p>

            <p>{t("introduction.4")}</p>

            <p>{t("introduction.5")}</p>

            <p>{t("introduction.6")}</p>
          </div>
        </section>
      </div>
      <div className=" w-[75%]  md:h-[16vh] h-[2vh] border-r-2 border-gray-700 p-4 " />
    </div>
  );
}
