import { createReducer } from './../modules/helpers'
import { APP } from './../actions/types'
import { LanguageType } from '../utils/constants'

export const initialState = {
  loaded: false,
  lang: LanguageType.EN,
  items: undefined,
}

export default {
  i18n: createReducer(initialState, {
    [APP.LOAD_TRANSLATIONS_REQ](state, { payload: { lang } }) {
      return {
        loaded: false,
        lang
      }
    },
    [APP.LOAD_TRANSLATIONS_RESP](state, payload) {
      return {
        ...state,
        loaded: true,
        items: payload
      }
    }
  })
}
