export type Locale = 'en' | 'nl' | 'de' | 'es' | 'fr' | 'ru' | 'uk' | string

interface Fallback {
  [key: string]: string
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string
  }
}

export const defaultLocale: string = 'en'
export const locales = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    de: 'German',
    nl: 'Neitherland',
  }