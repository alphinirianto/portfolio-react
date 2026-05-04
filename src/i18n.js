import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import id from "./locales/id.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    // 🔥 TAMBAHAN PENTING
    react: {
      useSuspense: false,
    },

    // 🔥 OPTIONAL (biar debug lebih jelas)
    debug: true,

    // 🔥 Pastikan selalu pakai namespace default
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;