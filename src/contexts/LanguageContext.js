import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../utils/enum";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const findMatchingLanguage = () => {
    const browserLanguages = navigator.languages;
    const availableLanguages = Object.keys(Language);
    const match = browserLanguages.find((lang) =>
      availableLanguages.includes(lang)
    );
    return match || Language.en;
  };

  const [selectedLanguage, setSelectedLanguage] = useState(Language.en);

  useEffect(
    () => findMatchingLanguage && setSelectedLanguage(findMatchingLanguage()),
    []
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
