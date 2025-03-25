// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    lazy: true,
    defaultLocale: 'en-US',
    locales: [
      {
        file: 'ja.json',
        code: 'es-AR',
      },
      {
        file: 'en.json',
        code: 'en-AU',
      },
      {
        file: 'en.json',
        code: 'de-AT',
      },
      {
        file: 'en.json',
        code: 'fr-BE',
      },
      {
        file: 'en.json',
        code: 'nl-BE',
      },
      {
        file: 'en.json',
        code: 'bg-BG',
      },
      {
        file: 'en.json',
        code: 'sr-BA',
      },
      {
        file: 'en.json',
        code: 'pt-BR',
      },
      {
        file: 'en.json',
        code: 'de-CH',
      },
      {
        file: 'en.json',
        code: 'fr-CH',
      },
      {
        file: 'en.json',
        code: 'it-CH',
      },
      {
        file: 'en.json',
        code: 'es-CL',
      },
      {
        file: 'en.json',
        code: 'cs-CZ',
      },
      {
        file: 'en.json',
        code: 'de-DE',
      },
      {
        file: 'en.json',
        code: 'da-DK',
      },
      {
        file: 'en.json',
        code: 'es-ES',
      },
      {
        file: 'en.json',
        code: 'et-EE',
      },
      {
        file: 'en.json',
        code: 'fi-FI',
      },
      {
        file: 'en.json',
        code: 'fr-FR',
      },
      {
        file: 'en.json',
        code: 'en-GB',
      },
      {
        file: 'en.json',
        code: 'ka-GE',
      },
      {
        file: 'en.json',
        code: 'el-GR',
      },
      {
        file: 'en.json',
        code: 'hr-HR',
      },
      {
        file: 'en.json',
        code: 'hu-HU',
      },
      {
        file: 'en.json',
        code: 'en-IS',
      },
      {
        file: 'en.json',
        code: 'he-IL',
      },
      {
        file: 'en.json',
        code: 'it-IT',
      },
      {
        file: 'en.json',
        code: 'ru-KZ',
      },
      {
        file: 'en.json',
        code: 'ko-KR',
      },
      {
        file: 'en.json',
        code: 'lt-LT',
      },
      {
        file: 'en.json',
        code: 'lv-LV',
      },
      {
        file: 'nl.json',
        code: 'nl-NL',
      },
      {
        file: 'en.json',
        code: 'nn-NO',
      },
      {
        file: 'en.json',
        code: 'en-NZ',
      },
      {
        file: 'en.json',
        code: 'pl-PL',
      },
      {
        file: 'en.json',
        code: 'ro-RO',
      },
      {
        file: 'en.json',
        code: 'ru-RU',
      },
      {
        file: 'en.json',
        code: 'ar-SA',
      },
      {
        file: 'en.json',
        code: 'en-SA',
      },
      {
        file: 'en.json',
        code: 'sl-SI',
      },
      {
        file: 'en.json',
        code: 'sr-RS',
      },
      {
        file: 'en.json',
        code: 'sk-SK',
      },
      {
        file: 'en.json',
        code: 'sv-SE',
      },
      {
        file: 'en.json',
        code: 'tr-TR',
      },
      {
        file: 'en.json',
        code: 'zh-TW',
      },
      {
        file: 'en.json',
        code: 'uk-UA',
      },
      {
        file: 'en.json',
        code: 'en-US',
      },
      {
        file: 'en.json',
        code: 'en-ZA',
      },
    ],
    detectBrowserLanguage: false,
  },

  compatibilityDate: '2024-11-15',
});
