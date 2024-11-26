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
import aboutEn from "./en/about.json";
import aboutKa from "./ka/about.json";
import ErrorEn from "./en/errors.json";
import ErrorKa from "./ka/errors.json";
import authorizationKa from "./ka/authorization.json";
import authorizationEn from "./en/authorization.json";

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
          "about-translation": aboutKa,
          "error-translation": ErrorKa,
          "authorization-translation": authorizationKa,
        },
      },
      en: {
        translation: {
          "header-translation": headerEn,
          "card-translation": cardEn,
          "tags-translation": tagsEn,
          "authors-translation": authorsEn,
          "about-translation": aboutEn,
          "error-translation": ErrorEn,
          "authorization-translation": authorizationEn,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
