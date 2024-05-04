import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    en: 'All the basics for a brand-new blog.',
    uk: 'Усі основи для абсолютно нового блогу.',
    ru: 'Все основы для абсолютно нового блога',
  },
  skipLink: {
    en: 'Skip to content',
    uk: 'Перейти до вмісту',
    ru: 'Перейти к содержанию',
  },
  pageTranslationsAvailableIn: {
    en: 'This page is also available in',
    uk: 'Ця сторінка також доступна на',
    ru: 'Эта страница также доступна на',
  },
  en: {
    en: 'English',
    uk: 'Англійська',
    ru: 'Английский',
  },
  uk: {
    en: 'Ukrainian',
    uk: 'Українська',
    ru: 'Украинский',
  },
  ru: {
    en: 'Russian',
    uk: 'Російський',
    ru: 'Русский',
  },
  tagHeadingSingular: {
    en: 'Tag',
    uk: 'Тег',
    ru: 'Тег',
  },
  tagHeadingPlural: {
    en: 'Tags',
    uk: 'Теги',
    ru: 'Теги',
  },
  postsPerTagPageDescription: {
    en: 'Posts about',
    uk: 'Пости про',
    ru: 'Посты о',
  },
  personProfilePageDescription: {
    en: 'Profile of',
    uk: 'Профіль',
    ru: 'Профиль',
  },
  pageNotFoundHeading: {
    en: 'Page not found',
    uk: 'Сторінка не знайдена',
    ru: 'Страница не найдена',
  },
  pageNotFoundBody: {
    en: '404!',
    uk: '404!',
    ru: '404!',
  },
}