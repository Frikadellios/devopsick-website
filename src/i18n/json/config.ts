/**
 * Supported languages object.
 */
export const locales = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    de: 'German',
    nl: 'Neitherland',
  }
  
  /**
   * Default language.
   */
  export const defaultLang: Locale = 'en'
  
  /**
   * Translations object containing translations for different languages.
   */
  export const translations = {
    en: () => import('./translations/en.json').then(module => module.default),
    fr: () => import('./translations/fr.json').then(module => module.default),
    de: () => import('./translations/de.json').then(module => module.default),
    nl: () => import('./translations/nl.json').then(module => module.default),
    es: () => import('./translations/es.json').then(module => module.default),
    uk: () => import('./translations/uk.json').then(module => module.default),
    ru: () => import('./translations/ru.json').then(module => module.default),
  } as const
  
  /**
   * Types
   */
  export type Locale = keyof typeof locales
  export type Translation = typeof translations