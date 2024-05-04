
import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'
import nl from './locales/nl.json'

export const LANGUAGES = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    de: 'German',
    nl: 'Neitherland',
  }
  
  export const LOCALES = {
    en: 'en-GB',
    es: 'es-ES',
    fr: 'fr-FR',
    uk: 'uk-UA',
    ru: 'ru-UA',
    de: 'de-De',
    nl: 'nl-NL',
  }


export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)
export const DEFAULT_LANGUAGE = 'en'
export const DEFAULT_LOCALES = 'en'

export const TRANSLATIONS = { es, en, fr, ru, de, uk, nl }

export type Lang = keyof typeof TRANSLATIONS
export type Page = keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANGUAGE]