import { createReducer } from '../modules/helpers'
import { APPLICATION_FORM } from '../actions/types'

const initialState = {
  TAC: {
    show: false,
    agree: false
  },
  current: 0,
  sections: undefined,
  sectionsState: undefined,
}

export default {
  'application-form': createReducer(initialState, {
    [APPLICATION_FORM.OPEN_TAC_MODAL](state) {
      return {
        ...state,
        TAC: {
          ...state.TAC,
          show: true
        }
      }
    },
    [APPLICATION_FORM.CLOSE_TAC_MODAL](state) {
      return {
        ...state,
        TAC: {
          ...state.TAC,
          show: false
        }
      }
    },
    [APPLICATION_FORM.AGREE_TAC](state) {
      return {
        ...state,
        TAC: {
          show: false,
          agree: true
        }
      }
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return initialState
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
  })
}
