import { path } from 'ramda'

export const i18nSelector = path(['i18n', 'items'])
export const i18nLangSelector = path(['i18n', 'lang'])
export const i18nLoadedSelector = path(['i18n', 'loaded'])

