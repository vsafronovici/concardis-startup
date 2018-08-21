import { createReducer } from './../modules/helpers'
import { APP } from './../actions/types'

export const initialState = {
  loaded: false,
  items: undefined
}

export default {
  i18n: createReducer(initialState, {
    [APP.LOAD_TRANSLATIONS_RESP](state, { payload } ) {
      return {
        loaded: true,
        items: payload
      }
    }
  })
}
