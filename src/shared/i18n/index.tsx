import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLocale from "./../../configs/locales/enTranslate.json";
import viLocate from "./../../configs/locales/viTranslate.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    resources: {
      en: {
        translation: enLocale,
      },
      vi: {
        translation: viLocate,
      },
    },
    lng: "en",
  });

export default i18n;
