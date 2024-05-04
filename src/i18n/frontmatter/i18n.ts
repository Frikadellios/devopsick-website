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
export const locales = ['en', 'nl', 'de', 'fr', 'uk', 'ru', 'es', ]
export const fallback: Fallback = {
  uk: 'en',
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
  blog: {
    en: 'blog',
    de: 'blog',
    nl: 'blog',
    ru: 'blog',
    uk: 'blog',
    es: 'blog',
    fr: 'blog',
  },
}
export const directoryNames: PathNames = {
  // Define the path for the tag pages (tags list, posts per tag).
  tags: {
    en: 'tag',
    de: 'thema',
    nl: 'onderwerp',
    ru: 'tag',
    uk: 'tag',
    es: 'tag',
    fr: 'tag',
  },
  // Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
  people: {
    en: 'about',
    de: 'ueber',
    nl: 'over',
    ru: 'people',
    uk: 'people',
    es: 'people',
    fr: 'people',
  },
}

export const languages = {
  en: {
    route: '/en/',
    icon: 'en',
  },
  nl: {
    route: '/nl/',
    icon: 'nl',
  },
  es: {
    route: '/es/',
    icon: 'es',
  },
  ru: {
    route: '/ru/',
    icon: 'ru',
  },
  uk: {
    route: '/uk/',
    icon: 'uk',
  },
  de: {
    route: '/de/',
    icon: 'de',
  },
  fr: {
    route: '/fr/',
    icon: 'fr',
  },
}

export const defaultLang = 'en'