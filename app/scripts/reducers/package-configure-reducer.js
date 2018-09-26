import { path } from 'ramda'

import { createReducer } from './../modules/helpers'
import { PACKAGE_CONFIGURE } from './../actions/types'

export const initialState = {
  submitting: false,
}

const getQuantity = path(['quantity', 'value'])

const createExtraFields = ({ extraItems }) =>
  extraItems.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.name]: getQuantity(obj)
    }
  }, {})

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
        quote: payload,
        quantity: getQuantity(payload),
        extraFields: createExtraFields(payload)
      }
    },
  })
}
