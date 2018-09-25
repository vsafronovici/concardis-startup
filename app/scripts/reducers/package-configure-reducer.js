import { createReducer } from './../modules/helpers'
import { PACKAGE_CONFIGURE } from './../actions/types'

export const initialState = {
  submitting: false,

}

export default {
  packageConfigure: createReducer(initialState, {
    [PACKAGE_CONFIGURE.GET_META_PACKAGE_REQ](state) {
      return {
        ...state
      }
    },
    [PACKAGE_CONFIGURE.GET_META_PACKAGE_RES](state, { payload }) {
      return {
        ...state,
        quote: payload
      }
    },
  })
}
