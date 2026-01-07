import { motion } from "framer-motion";
import lamp from "../assets/pictures/lamp.png";
import Scale from "../components/Scale";
import { useTranslation } from "react-i18next";
import AnimatedIcons from "../components/AnimatedIcons";
import SkillCard from "../components/SkillCard";
import LanguageSkillCard from "../components/LanguageSkillCard";

export default function Skills({ id }) {
  const { t } = useTranslation();

  return (
    <div id={id} className="flex flex-col w-[100%] font-montserrat text-lg ">
      <div className="flex flex-col w-[100%] md:h-[84vh] h-[30vh] bg-[#FFC30B]">
        <motion.div className="w-[100%] flex flex-row">
          <img src={lamp} alt={lamp} className=" w-[100vw]" />
        </motion.div>
      </div>
      <div className="flex flex-col w-[100%] text-stone-600 bg-gradient-to-b from-[#FFC30B] to-[20%] to-[#fdfbf7] md:px-[9%] px-[4%] md:pt-36">
        <AnimatedIcons />
        <SkillCard title={t("knowledge.technical_skills")}>
          <h3 className="">Experienced</h3>
          <h5 className="text-base ">
            JavaScript, TypeScript, HTML5, React, React Native, CSS3, SASS,
            Tailwind, Node.js, Figma, GraphQL, Apollo, Redux, Performance
            Optimization, SEO Basics, Responsive design
          </h5>
          <h3 className="">Familiar</h3>
          <h5 className="text-base ">
            Python, PHP, SQL / MySQL, Docker,AWS, OAuth & JWT{" "}
          </h5>
        </SkillCard>
        <SkillCard title={t("knowledge.soft_skills")}>
          <p className="text-base">{t("knowledge.soft_skills_des")}</p>
        </SkillCard>
        <SkillCard title={t("knowledge.lang_skills")}>
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
        </SkillCard>
      </div>
    </div>
  );
}
