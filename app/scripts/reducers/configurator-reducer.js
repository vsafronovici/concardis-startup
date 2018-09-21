import { omit } from 'ramda'

import { createReducer } from './../modules/helpers'
import { CONFIGURATOR } from './../actions/types'
import { ConfiguratorPageStep, FieldType } from '../utils/constants'
import { translateToNumber } from './../transformers/configurator-transformer'

export const initialState = {
  fields: {},
  step: ConfiguratorPageStep.STEP1,
  submitting: false,
}

const createDefaultValues = (payload, step) => {
  const fields = {}

  payload.forEach(item => {
    fields[step] = {
      ...fields[step],
      [item.name]: (item.type === FieldType.DROPDOWN) ? null : translateToNumber(item.defaultValue)
    }
  })

  return fields
}

export default {
  configurator: createReducer(initialState, {
    [CONFIGURATOR.GET_META_STEP1_REQ](state) {
      return {
        ...state
      }
    },
    [CONFIGURATOR.GET_META_STEP1_RES](state, { payload }) {
      return {
        ...state,
        step1MetaData: payload,
        fields: createDefaultValues(payload, ConfiguratorPageStep.STEP1)
      }
    },
    [CONFIGURATOR.CHANGE_FIELD_VALUE](state, { payload: { value, name, step } }) {
      return {
        ...state,
        fields: {
          ...state.fields,
          [step]: {
            ...state.fields[step],
            [name]: value
          }
        }
      }
    },
    [CONFIGURATOR.GO_TO_STEP](state, { payload }) {
      return {
        ...state,
        step: payload
      }
    },
    [CONFIGURATOR.GET_META_STEP2_REQ](state, { payload }) {
      return {
        ...omit(['step2MetaData'], state),
        submitting: true,
        fields: {
          ...state.fields,
          [ConfiguratorPageStep.STEP2]: {},
          [ConfiguratorPageStep.STEP3]: {}
        },
      }
    },
    [CONFIGURATOR.GET_META_STEP2_RES](state, { payload }) {
      return {
        ...state,
        submitting: false,
        step2MetaData: payload,
      }
    },
    [CONFIGURATOR.RECALCULATE_QUOTE_REQ](state, { payload }) {
      return {
        ...state,
        submitting: true,
      }
    },
    [CONFIGURATOR.RECALCULATE_QUOTE_RES](state, { payload }) {
      return {
        ...state,
        submitting: false,
        recalculatedQuote: payload
      }
    },
    [CONFIGURATOR.SIGNUP_RES](state, { payload }) {
      return {
        ...state,
        signupCode: payload.code
      }
    },
  })
}
