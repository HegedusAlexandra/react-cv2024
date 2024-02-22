import React,{memo, useState , useEffect,useRef} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function Captcha({setRecaptchaValue,visible}) {
  const {selectedLanguage} = useLanguage();
   
console.log(selectedLanguage)

  const shadow = {
      boxShadow:
        " rgba(30, 50, 50, 0.38) 6px 4px 6px 0px, rgba(25, 55, 55, 0.3) -6px -2px 10px 0px",
    };

  const variants = {
    hidden: { opacity: 0, y: "-50vh" },
    visible: { opacity: 1, y: "-3vh" },
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center relative z-0 md:w-[50%] w-[90%] bg-background_light rounded-b-xl px-6 pt-8 pb-4"
      style={shadow}
    >
      <ReCAPTCHA
        sitekey={'process.env.REACT_APP_GOOGLE_RECAPTCHA_CLIENTKEY'}
        onChange={(value) => setRecaptchaValue(value)}
        className="md:m-auto"
        hl={selectedLanguage}
      />
    </motion.div>
  )
}

export default memo(Captcha)