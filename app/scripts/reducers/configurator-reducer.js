import { createReducer } from './../modules/helpers'
import { CONFIGURATOR } from './../actions/types'
import { SectionStatusType } from '../utils/constants'
import { keys, pickBy, toPairs, isEmpty } from 'ramda'

export const initialState = {
  fields: {},
  step: 1,
  submitting: false,
  step1_meta_data: undefined

}

export default {
  ['configurator']: createReducer(initialState, {
    [CONFIGURATOR.GET_META_STEP1_REQ](state) {
      return {
        ...state
      }
    },
    [CONFIGURATOR.GET_META_STEP1_RES](state, { payload }) {
      return {
        ...state,
        step1_meta_data: payload
      }
    },
    [CONFIGURATOR.CHANGE_FIELD_VALUE](state, { payload: { value, name }}) {
      return {
        ...state,
        fields: {...state.fields, [name]: value}
      }
    },
  })
}
