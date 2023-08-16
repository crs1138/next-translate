module.exports = {
  locales: ['en', 'ca', 'es', 'cs'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/[lang]': ['home'],
    '/[lang]/second-page': ['home'],
    '/[lang]/[slug]': ['home'],
  },
  loadLocaleFrom: (locale, namespace) => {
    const i18nLocale = `./honza/${locale}/${namespace}.json`
    console.log('i18n.js > loadLocaleFrom() :::', { i18nLocale })

    return import(i18nLocale)
      .then((m) => m.default)
      .catch((e) => console.error(e))
  },
}
