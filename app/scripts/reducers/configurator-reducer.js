import { createReducer } from './../modules/helpers'
import { CONFIGURATOR } from './../actions/types'
import { ConfiguratorPageStep } from '../utils/constants'
import { keys, pickBy, toPairs, isEmpty } from 'ramda'

export const initialState = {
  fields: {},
  step: ConfiguratorPageStep.STEP2,
  submitting: false,
  step1MetaData: undefined,
  step3MedaData: undefined,

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
        step1MetaData: payload
      }
    },
    [CONFIGURATOR.GET_META_STEP3_REQ](state) {
      return {
        ...state
      }
    },
    [CONFIGURATOR.GET_META_STEP3_RES](state, { payload }) {
      return {
        ...state,
        step3MetaData: payload
      }
    },
    [CONFIGURATOR.CHANGE_FIELD_VALUE](state, { payload: { value, name }}) {
      return {
        ...state,
        fields: {...state.fields, [name]: value}
      }
    },
    [CONFIGURATOR.GO_TO_STEP](state, { payload }) {
      return {
        ...state,
        step: payload
      }
    }
  })
}
