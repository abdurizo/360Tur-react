
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './styles/index.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import uzTranslation from "./assets/locales/uz/translation.json";
import enTranslation from "./assets/locales/en/translation.json";
import ruTranslation from "./assets/locales/ru/translation.json";

const lang = localStorage.getItem("i18nextLng");
const resources = {
  uz: {
    translation: uzTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    supportedLngs: ["uz", "ru", "en"],
    lng: lang || "uz",
    fallbackLng: "uz",
    detection: {
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    }
  })

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
