import React, { useState, useCallback } from "react";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import { generateClient } from "aws-amplify/api";
import { createContactMe } from "../graphql/mutations";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import github from "../assets/simple_icon/github.svg";
import linkedin from "../assets/simple_icon/linkedin.svg";
import { NavLink } from "react-router-dom";

export default function Contact({ id }) {
  const [isSent, setSent] = useState(false);
  const { t } = useTranslation();
  const client = generateClient();

  const handleData = useCallback(
    async (submittedData) => {
      await client.graphql({
        query: createContactMe,
        variables: {
          input: submittedData
        }
      });
    },
    [client]
  );

  return (
    <div
      id={id}
      className="flex flex-col items-center justify-between w-[100%] bg-[#fdfbf7] pt-[10vh] md:px-[8%]  snap-child"
    >
      <div className="flex md:flex-row flex-col w-[100%] md:h-[60vh] items-start justify-center">
        <div className=" flex flex-col justify-start items-start md:w-[90%] w-[100%] h-[100%] overflow-x-hidden">
          <h2
            className={`md:w-[50%] w-[90%] mx-[5%] text-stone-900 md:text-[6vh] text-[6.5vw] font-semibold font-roboto uppercase tracking-wide text-left`}
          >
            {!isSent &&`${t("contact.lets")} `}
          </h2>
         {!isSent && <Form handleData={handleData} setSent={setSent} />}
          <h2
            className={`md:w-[50%] mt-[10vh] w-[90%] mx-[5%] text-stone-900 md:text-[2vh] text-[2vw] font-semibold font-roboto uppercase tracking-wide text-left`}
          >
            {isSent && `We sincerely apologize for the inconvenience, but our contact form is currently experiencing some issues. In the meantime, please feel free to reach out to us via email or return in some days. Thank you for your understanding!`}
          </h2>
        </div>
        <div className="flex flex-col md:w-[50%] w-[100%] h-[80%] pb-[2vh] border-l-4 md:border-solid md:border-black">
          <div className="flex-1 flex flex-col md:items-start items-center w-[100%]  text-center px-4 font-bold font-montserrat text-[2vh] ">
            <h2
              className="md:text-[8vh] text-[6vh] font-bold text-red-500 my-[1vw] md:mx-[2vw] mx-[4vw] capitalize self-start"
              style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}
            >
              Contact
            </h2>
            <div className="flex-1 flex flex-col md:items-start items-center md:justify-end justify-center w-[100%]  text-center p-4">
              <a
                className=" flex flex-row justify-start items-center h-[6vh] rounded-full mr-[2vh] gap-[2vw]"
                href="https://github.com/HegedusAlexandra?tab=repositories"
              >
                <motion.img
                  whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  width={150}
                  height={150}
                  loading="eager"
                  className=" size-[4vh] rounded-full"
                  alt="github"
                  src={github}
                />
                <h2 className="font-normal">take a look at my repositories</h2>
              </a>
              <h2 className="font-normal">OR</h2>
              <a
                className=" flex flex-row justify-start items-center h-[6vh] rounded-sm mr-[2vh] gap-[2vw]"
                href="https://www.linkedin.com/in/alexandra-heged%C3%BCs-135220269/"
              >
                <motion.img
                  whileHover={{ scale: 1.6, backgroundColor: "#F7C003" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  width={150}
                  height={150}
                  loading="eager"
                  className=" size-[4vh] rounded-sm"
                  alt="linkedin"
                  src={linkedin}
                />
                <h2 className="font-normal">visit my linkedin account</h2>
              </a>
            </div>
            <div className="md:h-[4vh] mt-2 px-2 py-2 rounded-md border-text font-roboto text-text font-bold uppercase">
              SITEMAP
            </div>
            <NavLink to="/">
              <p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">
                {t("menu.home")}
              </p>
            </NavLink>
            <NavLink to="/projects">
              <p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">
                {t("menu.projects")}
              </p>
            </NavLink>
            <NavLink to="/introduction">
              <p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">
                {t("menu.about me")}
              </p>
            </NavLink>
            <NavLink to="/contact">
              <p className="text-stone-800 font-light text-[1.5vh] capitalize pl-2">
                {t("menu.contact")}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer id={"footer"} />
    </div>
  );
}
