import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Configuration de i18next
i18n
  .use(LanguageDetector) // Détection de la langue du navigateur
  .use(initReactI18next) // Liaison avec React
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
    fallbackLng: "fr", // Langue par défaut si la langue choisie n'est pas disponible
    debug: true, 
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;