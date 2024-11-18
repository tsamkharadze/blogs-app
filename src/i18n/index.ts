import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerKa from "./ka/header.json";
import headerEn from "./en/header.json";
import cardEn from "./en/card.json";
import cardKa from "./ka/card.json";
import tagsEn from "./en/tags.json";
import tagsKa from "./ka/tags.json";
import authorsEn from "./en/authors.json";
import authorsKa from "./ka/authors.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ka: {
        translation: {
          "header-translation": headerKa,
          "card-translation": cardKa,
          "tags-translation": tagsKa,
          "authors-translation": authorsKa,
        },
      },
      en: {
        translation: {
          "header-translation": headerEn,
          "card-translation": cardEn,
          "tags-translation": tagsEn,
          "authors-translation": authorsEn,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
