import { siteConfig } from '@/consts'
import type I18nKey from './I18nKeys'
import { en } from './languages/en'
import { ru } from './languages/ru'
import { uk } from './languages/uk'
import { fr } from './languages/fr'
import { nl } from './languages/nl'
import { de } from './languages/de'
import { es } from './languages/es'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  uk_ua: uk,
  uk_ru: ru,
  ru: ru,
  fr: fr,
  nl: nl,
  es: es,
  de: de,

}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}