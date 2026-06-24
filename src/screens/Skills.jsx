import { useTranslation } from "react-i18next";
import SkillCard from "../components/SkillCard";
import LanguageSkillCard from "../components/LanguageSkillCard";
import Headline from "../components/Headline";

export default function Skills({ id }) {
  const { t } = useTranslation();

  return (
    <div id={id} className="w-[100%] bg-gray-100">
      <div id={id} className="flex flex-col w-[100%] text-lg md:px-16 px-1">
        <Headline
          title={t("menu.skills")}
          description={t("knowledge.description")}
        />
        <div className="flex flex-col w-[100%] bg-gray-100 border-x-2 border-b-2 border-gray-700 ">
          <SkillCard title={t("knowledge.technical_skills")}>
            <div className="h-[100%] flex md:flex-row  flex-col ">
              <div className="hidden md:flex flex-col md:w-[10vw] h-full border-r-2 border-gray-300">
                <h3 className="flex-1 text-center content-center p-4 border-b-2 border-gray-700">
                  Experienced
                </h3>
                <h3 className="flex-1 text-center content-center p-4">
                  Familiar
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className=" static md:hidden flex-1  content-center p-4 border-b-2 border-gray-200 md:text-base text-sm">
                  Experienced
                </h3>

                <h5 className="flex-1 content-center p-4 border-b-2 border-gray-700 md:text-base text-sm">
                  JavaScript, TypeScript, HTML5, React, React Native, CSS3,
                  SASS, Tailwind, Node.js, Figma, GraphQL, Apollo, Redux,
                  Performance Optimization, SEO Basics, Responsive design
                </h5>
                <h3 className=" static md:hidden flex-1  content-center p-4 border-b-2 border-gray-200 md:text-base text-sm">
                  Familiar
                </h3>
                <h5 className="flex-1 content-center p-4 md:text-base text-sm">
                  Python, PHP, SQL / MySQL, Docker,AWS, OAuth & JWT{" "}
                </h5>
              </div>
            </div>
          </SkillCard>
          <SkillCard title={t("knowledge.soft_skills")}>
            <p className="flex-1 p-4 content-center text-sm">
              {t("knowledge.soft_skills_des")}
            </p>
          </SkillCard>
          <SkillCard title={t("knowledge.lang_skills")}>
            <div className="">
              <LanguageSkillCard
                language={t("knowledge.hun")}
                level={t("knowledge.hun_level")}
                numlevel={100}
              ></LanguageSkillCard>
              <LanguageSkillCard
                language={t("knowledge.eng")}
                level={t("knowledge.eng_level")}
                numlevel={90}
              ></LanguageSkillCard>
              <LanguageSkillCard
                language={t("knowledge.ita")}
                level={t("knowledge.ita_level")}
                numlevel={22}
              ></LanguageSkillCard>
              <LanguageSkillCard
                language={t("knowledge.ger")}
                level={t("knowledge.ita_level")}
                numlevel={10}
              ></LanguageSkillCard>
            </div>
          </SkillCard>
        </div>
        <div className=" flex flex-row w-[100%]  md:h-[16vh] h-[4vh] bg-gray-100  ">
          <div className=" w-[45%]  h-full bg-gray-100 border-r-2 border-gray-700 " />
          <div className=" w-[15%]  h-full bg-gray-100 border-r-2 border-gray-700 " />
        </div>
      </div>
    </div>
  );
}
