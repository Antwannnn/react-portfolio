import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      es: {
        translation: es,
      },
    },
    fallbackLng: "fr",
    debug: true, 
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;