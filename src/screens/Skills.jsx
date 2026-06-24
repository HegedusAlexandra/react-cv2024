import { useTranslation } from "react-i18next";
import SkillCard from "../components/SkillCard";
import LanguageSkillCard from "../components/LanguageSkillCard";
import Headline from "../components/Headline";

export default function Skills({ id }) {
  const { t } = useTranslation();

  return (
    <div id={id} className="w-[100%] bg-gray-100">
      <div id={id} className="flex flex-col w-[100%] md:px-16 px-1 text-sm">
        <Headline
          title={t("menu.skills")}
          description={t("knowledge.description")}
        />
        <div className="flex flex-col w-[100%] bg-gray-100 border-x-2 border-b-2 border-gray-700 ">
          <SkillCard title={t("knowledge.technical_skills")}>
            <div className="h-[100%] flex  flex-col ">
              <h3 className=" static  flex-1  content-center p-4 border-b-2 border-gray-200  text-sm h-[50%]">
                Programming
              </h3>

              <h5 className="flex-1 content-center p-4 border-b-2 border-gray-700 text-sm w-full">
                JavaScript, TypeScript, <br />
                React, React Native, <br />
                HTML5, CSS3, SASS, Tailwind, <br />
                Figma,Responsive design, <br />
                GraphQL, Next.js, Redux, <br />
                Supabase, PostgreSQL <br />
                Git, GitLab, GitHub <br />
                Agile / Scrum <br />
                Basics : Python, PHP, Kotlin <br />
                Performance Optimization, SEO, Webmarketing
              </h5>

              <h3 className=" static  flex-1  content-center p-4 border-b-2 border-gray-200  text-sm h-[50%]">
                Data and Business
              </h3>

              <h5 className="flex-1 content-center p-4 text-sm h-[50%]">
                Statistics <br /> Data Analysis <br /> Power BI <br />
                Process Optimization
              </h5>
            </div>
          </SkillCard>
          <SkillCard title={t("knowledge.soft_skills")}>
            <div className="h-[100%] flex  flex-col ">
              <h3 className=" static  flex-1  content-center p-4 border-b-2 border-gray-200  text-sm h-[50%]">
                {t("knowledge.soft_skills_des")}               
              </h3>
              <h5 className="flex-1 content-center p-4 border-b-2 border-gray-700 text-sm w-full">
                Problem Solving <br />
                Leadership <br />
                Communication <br />
                Teamwork <br />
                Adaptability <br />
                Analytical Thinking
              </h5>
            </div>
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
