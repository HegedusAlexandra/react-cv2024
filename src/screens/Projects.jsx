import ProjectCard from "../components/ProjectCard";
import { allCardDetails } from "../utils/allCardDetails";
import HelmetComp from "../components/HelmetComponent";
import { useTranslation } from "react-i18next";
import Headline from "../components/Headline";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col w-[100%] bg-gray-100 md:px-16 px-1">
        <HelmetComp
          title={"helmet.projects"}
          url="projects"
          content={"helmet.pro_desc"}
        />
        <Headline title={t("helmet.projects")}  description={t("projects.description")}/>
        <div className="grid md:grid-cols-3 md:grid-rows-[auto_auto_1fr] border border-gray-700  ">
          {allCardDetails.map((el) => (
            <div key={el.background + "wrapper"}>
            <ProjectCard
              link={el.link}
              github={el.github}
              background={el.background}
              headline={el.headline}
              description={el.description}
            />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[100%]  md:h-[16vh] h-[4vh] bg-gray-100">
        <div className=" w-[25%]  h-[16vh] border-r-2 border-gray-700 p-4 bg-gray-100"></div>
      </div>
    </>
  );
}
