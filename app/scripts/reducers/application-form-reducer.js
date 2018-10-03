import { createReducer } from '../modules/helpers'
import { APPLICATION_FORM } from '../actions/types'

const initialState = {
  current: undefined,
  sections: undefined
}

export default {
  'application-form': createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return initialState
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        ...state,
        sections: payload,
      }
    }
  })
}