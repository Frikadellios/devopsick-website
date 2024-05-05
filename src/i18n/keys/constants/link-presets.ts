import { LinkPreset, type NavBarLink } from '@/types/site.config'
import I18nKey from '../I18nKeys'
import { i18n } from '../translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
  },
}