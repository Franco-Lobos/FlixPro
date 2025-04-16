// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files (assume you have JSON translation files)
import translationEn from 'src/languages/en/translationEn.json'; // English translations

// The translations
const resources = {
    en: {
        translation: translationEn,
    }
};
// Initialize i18next with react-i18next plugin
i18n
    .use(initReactI18next) // Pass the react-i18next plugin to i18next
    .init({
        resources,
        lng: 'en', // Set the default language
        fallbackLng: 'en', // Use English if a translation is not available in the current language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
