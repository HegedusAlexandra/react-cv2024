import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { variants } from "../utils/animations";
import ContactHead from "./ContactHead";
import Captcha from "./Captcha";
import { useTranslation } from "react-i18next";
import {ContactMode} from '../utils/enum' 

const Form = ({ handleData }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [contactPref, setContactPref] = useState("email");
  const [isNews, setIsNews] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(false);
  const { t } = useTranslation();

  const shadow = {
    boxShadow:
      " rgba(30, 50, 50, 0.38) 6px 4px 6px 0px, rgba(25, 55, 55, 0.3) -6px -2px 10px 0px"
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Name is required")
      .min(8, "Name is too short")
      .matches(
        /^[a-zA-Z0-9 .]*$/,
        "Only alphanumeric characters and spaces are allowed in the name"
      ),
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .trim()
      .matches(/^\+?[0-9]+$/, "Invalid telephone number")
      .min(10, "Telephone number is too short")
      .max(15, "Telephone number is too long")
      .when("actionType", {
        is: "call",
        then: Yup.string().required("Telephone is required for call preference")
      }),
    message: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z0-9 .-:?!@#()]*$/,
        "Only regular characters are allowed in the message"
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
      console.log("submit");
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
        language: "EN",
        marketing: isNews,
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
          alert(t("Submission failed, please try again."));
        })
        .finally(console.log(t("the spinner shold be hidden"), dataSum));
    },
    [contactPref, handleData, isAgreed, isNews, recaptchaValue, t]
  );

  const slideAgreed = () => {
    setIsAgreed(!isAgreed);
  };

  const slidePrefType = () => {
    setContactPref((prev) => (prev === "email" ? "call" : "email"));
  };

  const slideNews = () => {
    setIsNews(!isNews);
  }

  return (
    <div className="flex flex-col w-[100%] h-[80vh] justify-center items-center content-center">
      <ContactHead visible={!isAgreed || recaptchaValue} />
      <div
        className="relative z-10 md:w-[40%] w-[90%] px-2 pl-3 bg-white rounded-xl -translate-y-3"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-[100%] bg-sky2">
          <div className="flex flex-col mt-2 w-[100%] h-[60%]">
            <Controller
              name='name'
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[100%] bg-background_light mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg">
                  <input
                    type="text"
                    placeholder={t('name').toUpperCase()}
                    {...field}
                    id="name"
                    required
                    className="md:text-[2vh] "
                  />
                  {fieldState.error && (
                    <div className="text-red">{fieldState.error.message}</div>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[100%] bg-background_light mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg">
                  <input
                    type="email"
                    placeholder={t('email').toUpperCase()}
                    {...field}
                    id="email"
                    required
                    className="md:text-[2vh] "
                  />
                  {fieldState.error && (
                    <div className="text-red">{fieldState.error.message}</div>
                  )}
                </div>
              )}
            />
            {contactPref === 'call' && <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[100%] bg-background_light mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg">
                  <input
                    type="tel"
                    placeholder={t('mobile').toUpperCase()}
                    {...field}
                    id="phone"
                    required
                    className="md:text-[2vh] "
                  />
                  {fieldState.error && (
                    <div className="text-red">{fieldState.error.message}</div>
                  )}
                </div>
              )}
            />}
          </div>
          <div className="flex flex-row mb-2 w-[100%] h-[60%]">
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <div className="w-[100%] h-[32%] bg-background_light mb-2 py-2 px-6 mb:py-[1vw] mb:px-[1vw] rounded-lg">
                  <textarea
                    className="w-[100%] text-[2vh]"
                    placeholder={t("message").toUpperCase()}
                    rows={3}
                    id="message"
                    {...field}
                  />
                  {fieldState.error && (
                    <div className="text-red-500 w-[100%]">
                      {fieldState.error.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex flex-col md:items-center md:flex-row md:justify-between mb-4 w-[100%] h-[30%]">
            <div className="rounded-x font-montserrat text-text text-[1.8vh]">
              <div className="flex flex-row mb-1">
                <button
                  onClick={slidePrefType}
                  name="actionType"
                  type="button"
                  className="flex w-[8vh] h-[3.4vh] rounded-3xl border-2 border-solid border-text font-montserrat text-text font-bold items-center mr-[2vh]"
                >
                  <motion.div
                    className="h-[92%] md:w-[62%] w-[58%] ml-[3%] rounded-full text-sky2 flex justify-center items-center"
                    animate={variants[contactPref]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="material-icons">{contactPref}</span>
                  </motion.div>
                </button>
                <p className="w-[90%]">
                  {t("Please let us know how you'd prefer to be contacted")}
                </p>
              </div>
              <div className="flex flex-row mb-1">
                <button
                  onClick={slideNews}
                  name="agreement"
                  type="button"
                  className={`flex w-[8vh] h-[3.4vh] rounded-3xl border-2 border-solid border-text font-montserrat text-text font-bold items-center mr-[2vh]`}
                >
                  <motion.div
                    className="h-[92%] md:w-[62%] w-[58%] ml-[3%] rounded-full text-sky2 flex justify-center items-center"
                    animate={variants[!isNews ? "left" : "right"]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="material-icons">
                      {isNews ? "done" : "close"}
                    </span>
                  </motion.div>
                </button>
                <p className="w-[90%]">
                  {t("I'd like to receive more information about EvoluCode")}
                </p>
              </div>
              <div className="flex flex-row">
                <button
                  onClick={slideAgreed}
                  name="agreement"
                  type="button"
                  className={`flex w-[8vh] h-[3.4vh] rounded-3xl border-2 border-solid border-text font-montserrat text-text font-bold items-center mr-[2vh]`}
                >
                  <motion.div
                    className="h-[92%] md:w-[62%] w-[58%] ml-[3%] rounded-full text-sky2 flex justify-center items-center"
                    animate={variants[!isAgreed ? "left" : "right"]}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="material-icons">
                      {isAgreed ? "done" : "close"}
                    </span>
                  </motion.div>
                </button>
                <p className="w-[90%]">
                  {t("I understand and agree to the")}
                  {/* <Link
                    className="h-[4vh] px-2 rounded-xl font-montserrat text-text font-bold"
                    to="/privacy-policy"
                  >
                    {t("the privacy policy")}
                  </Link> */}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="md:h-[8vh] mt-2 px-6 py-2 rounded-xl border-4 border-solid border-text font-montserrat text-text font-bold uppercase"
            >
              {t("Submit")}
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
