import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ka from './locales/ka.json';


const browserLanguage = navigator.language.slice(0, 2);
const storedLanguage = localStorage.getItem('language');
const defaultLanguage = storedLanguage || browserLanguage || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ka: { translation: ka },
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng)
  });

export default i18n;