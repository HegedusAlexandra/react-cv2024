import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // For detecting browser language
import resources from './resources';


i18n
  .use(LanguageDetector) // Use the language detector plugin
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: "en", // Use English as a fallback language
    detection: {
      order: ['navigator'], // Detect language from the browser's language
      caches: [] // Do not cache the language
    },
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
