import React,{memo, useState , useEffect,useRef} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function Captcha({setRecaptchaValue,visible}) {
  const {selectedLanguage} = useLanguage();

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
      className="flex justify-center items-center relative z-0 rounded-b-md px-10 pt-8 pb-4"
    >
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_CLIENTKEY}
        onChange={(value) => setRecaptchaValue(value)}
        className="md:m-auto"
        hl={selectedLanguage}
      />
    </motion.div>
  )
}

export default memo(Captcha)