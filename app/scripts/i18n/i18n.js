import { i18nSelector } from '../selectors/i18n-selector'

let store

export const initI18N = _store => {
  store = _store
}

export const translate = key => {
  const val = i18nSelector(store.getState())[key]
  return val === undefined ? `${key} missing` : val
}
