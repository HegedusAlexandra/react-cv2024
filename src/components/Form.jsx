import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { variants } from "../utils/animations";
import Captcha from "./Captcha";
import { useTranslation } from "react-i18next";
import { ContactMode } from "../utils/enum";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../utils/enum";

const Form = ({ handleData, setSent }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [contactPref, setContactPref] = useState("email");
  const [recaptchaValue, setRecaptchaValue] = useState(false);
  const { t } = useTranslation();
  const {selectedLanguage} = useLanguage()

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(t('nameshort'))
      .min(8, t("nameshort"))
      .matches(
        /^[a-zA-Z0-9À-ÖØ-öø-ÿĀ-ſŒœŸƒ-ɏ-' .]*$/,
        t("onlyalpha")
      ),
    email: Yup.string()
      .trim()
      .email(t("invalidemail"))
      .required(t("emailmust")),
    phone: Yup.string()
      .trim()
      .matches(/^\+?[0-9]+$/, t("invalidtelephone"))
      .min(10, t("telephoneshort"))
      .max(15, t("telephonelong"))
      .when("actionType", {
        is: "call",
        then: Yup.string().required(t("telephonemust"))
      }),
    message: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z0-9À-ÖØ-öø-ÿĀ-ſŒœŸƒ-ɏ-' .-:?!@#()]*$/,
        t("onlyreg")
      )
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      actionType: contactPref
    }
  });

  const onSubmit = useCallback(
    async (data) => {
   
      if (!isAgreed) {
        alert(t("Privacy policy not accepted"));
        return;
      }

      if (!recaptchaValue) {
        alert(t("Captcha not solved"));
        return;
      }

      const dataSum = {
        phone: data.mobile,
        email: data.email,
        name: data.name,
        message: data.message,
        language: Language.selectedLanguage,
        contactMode: ContactMode[contactPref] || ContactMode.email
      };

      handleData(dataSum)
        .then((result) => {
          console.log("data was sent successfully", result, dataSum);
          alert(t("Form submitted successfully."));
        })
        .catch((ex) => {
          console.log(
            t("an error occurred'! Please try again in few minutes"),
            ex,
            dataSum
          );
          alert(t("submission failed, please try again."));
        })
        .finally(setSent(true));
    },
    [contactPref, handleData, isAgreed, recaptchaValue, setSent, t]
  );

  const slideAgreed = () => {
    setIsAgreed(!isAgreed);
  };

  const slidePrefType = () => {
    setContactPref((prev) => (prev === "email" ? "call" : "email"));
  };

  return (
    <div className="flex flex-col w-[100%] justify-center items-center content-center">
      <div className="relative z-10 md:w-[40%] w-[90%]  rounded-xl -translate-y-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
          <div className="flex flex-col mt-2 w-[100%] h-[60%]">
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[100%] mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg leftShadow">
                  <input
                    type="text"
                    placeholder={t("contact.name").toUpperCase()}
                    {...field}
                    id="name"
                    required
                    className="md:text-[2vh]"
                  />
                  {fieldState.error && (
                    <div className="text-red-500">
                      {t(`contact.${fieldState.error.message}`)}
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[100%] mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg leftShadow">
                  <input
                    type="email"
                    placeholder={t("contact.email").toUpperCase()}
                    {...field}
                    id="email"
                    required
                    className="md:text-[2vh] "
                  />
                  {fieldState.error && (
                    <div className="text-red-500">
                      {t(`contact.${fieldState.error.message}`)}
                    </div>
                  )}
                </div>
              )}
            />
            {contactPref === "call" && (
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="w-[100%] h-[100%] mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg leftShadow">
                    <input
                      type="tel"
                      placeholder={t("contact.mobile").toUpperCase()}
                      {...field}
                      id="phone"
                      required
                      className="md:text-[2vh]"
                    />
                    {fieldState.error && (
                      <div className="text-red-500">
                        {t(`contact.${fieldState.error.message}`)}
                      </div>
                    )}
                  </div>
                )}
              />
            )}
          </div>
          <div className="flex flex-row mb-2 w-[100%] h-[60%]">
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[32%] mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg leftShadow">
                  <textarea
                    className="w-[100%] text-[2vh]"
                    placeholder={t("contact.message").toUpperCase()}
                    rows={3}
                    id="message"
                    {...field}
                  />
                  {fieldState.error && (
                    <div className="text-red-500 w-[100%]">
                      {t(`contact.${fieldState.error.message}`)}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex flex-col md:items-center md:flex-row md:justify-between mb-4 w-[100%] h-[30%]">
            <div className="rounded-x font-roboto text-text text-[1.8vh]">
              <div className="flex flex-row mb-1">
                <button
                  onClick={slidePrefType}
                  name="actionType"
                  type="button"
                  className="flex w-[8vh] h-[3.4vh] rounded-3xl border-2 border-solid border-text font-roboto text-text font-bold items-center mr-[2vh]"
                >
                  <motion.div
                    className="h-[92%] md:w-[62%] w-[58%] ml-[3%] rounded-full flex justify-center items-center"
                    animate={variants[contactPref]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="material-icons">{contactPref}</span>
                  </motion.div>
                </button>
                <p className="w-[90%]">
                  {t("contact.pref")}
                </p>
              </div>
              <div className="flex flex-row">
                <button
                  onClick={slideAgreed}
                  name="agreement"
                  type="button"
                  className={`flex w-[8vh] h-[3.4vh] rounded-3xl border-2 border-solid border-text font-roboto text-text font-bold items-center mr-[2vh]`}
                >
                  <motion.div
                    className="h-[92%] md:w-[62%] w-[58%] ml-[3%] rounded-full flex justify-center items-center"
                    animate={variants[!isAgreed ? "left" : "right"]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="material-icons">
                      {isAgreed ? "done" : "close"}
                    </span>
                  </motion.div>
                </button>
                <p className="w-[90%]">
                  {t("contact.understand")}
                  <a
                    className="h-[4vh] px-2 rounded-xl font-roboto text-text font-bold"
                    to="/privacy-policy"
                  >
                    {t("contact.the privacy policy")}
                  </a>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="md:h-[8vh] bg-[#F7C003] mt-2 px-6 py-2 rounded-xl border-text font-roboto text-text font-bold uppercase"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
      <Captcha
        setRecaptchaValue={setRecaptchaValue}
        visible={isAgreed && !recaptchaValue}
      />
    </div>
  );
};

export default Form;
