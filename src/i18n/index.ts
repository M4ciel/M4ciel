import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "../locales/pt/common.json";
import en from "../locales/en/common.json";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "pt",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			pt: {
				translation: pt,
			},
			en: {
				translation: en,
			},
		},
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
	});

export default i18n;
