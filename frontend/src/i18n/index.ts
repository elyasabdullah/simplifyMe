import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./translations/en";
import arabic from "./translations/ar";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    resources: {
      ar: { translation: arabic },
      en: { translation: english }
    },
    lowerCaseLng: true,
    ns: ["common"],
    defaultNS: "common",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    }
  })
  .then((r) => {
  });

export default i18n;
