import { path } from 'ramda'

import { createReducer } from './../modules/helpers'
import { PACKAGE_CONFIGURE } from './../actions/types'
import { RESPONSE_STATUS_CODE, PackageRoot } from '../utils/constants'

export const initialState = {
  submitting: false,
  root: PackageRoot.ROOT1
}

const getQuantity = path(['quantity', 'value'])

const createExtraFields = ({ extraItems }) =>
  extraItems.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.quoteItemId]: getQuantity(obj)
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
        totalPriceWithDiscount: payload.totalPriceWithDiscount,
        extraFields: createExtraFields(payload)
      }
    },
    [PACKAGE_CONFIGURE.CHANGE_PACKAGE_QNTY](state, { payload }) {
      return {
        ...state,
        quantity: payload.qty,
      }
    },
    [PACKAGE_CONFIGURE.CHANGE_EXTRA_QNTY](state, { payload }) {
      return {
        ...state,
        extraFields: {
          ...state.extraFields,
          [payload.id]: payload.value
        }
      }
    },
    [PACKAGE_CONFIGURE.CHANGE_DISCOUNT_CODE](state, { payload }) {
      return {
        ...state,
        discountCode: payload
      }
    },
    [PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_REQ](state) {
      return {
        ...state,
        submitting: true
      }
    },
    [PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_RES](state, { payload }) {
      return {
        ...state,
        submitting: false,
        applyDiscount: payload
      }
    },
    [PACKAGE_CONFIGURE.APPLY_DISCOUNT_REQ](state) {
      return {
        ...state,
        submitting: true
      }
    },
    [PACKAGE_CONFIGURE.APPLY_DISCOUNT_RES](state, { payload }) {
      return {
        ...state,
        submitting: false,
        applyDiscount: payload,
        totalPriceWithDiscount: payload.code === RESPONSE_STATUS_CODE.OK ? payload.totalPriceWithDiscount : state.totalPriceWithDiscount
      }
    },
    [PACKAGE_CONFIGURE.GO_TO_ROOT](state, { payload }) {
      return {
        ...state
      }
    }
  })
}
