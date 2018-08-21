import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'

export const initialState = {
  data: undefined,
  loaded: false
}

export default {
  ['application-form']: createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return {
        ...state,
        loaded: false
      }
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        data: payload,
        loaded: true
      }
    },
  })
}
