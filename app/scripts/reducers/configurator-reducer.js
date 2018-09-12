import { createReducer } from './../modules/helpers'
import { CONFIGURATOR } from './../actions/types'
import { ConfiguratorPageStep } from '../utils/constants'
import { keys, pickBy, toPairs, isEmpty } from 'ramda'

import { translate } from '../i18n/i18n'
import { translateToNumber } from './../transformers/configurator-transformer'
import { FieldType } from './../utils/constants'

export const initialState = {
  fields: {},
  step: ConfiguratorPageStep.STEP1,
  submitting: false,
  step1MetaData: undefined,
  step2MetaData: undefined,
  step3MedaData: undefined,

}

const createDefaultValues = (state, payload, step) => {
  
  const { fields } = state
  
  payload.map( item => {
    
    fields[step] = {
      ...fields[step],
      [item.name]: (item.type === FieldType.DROPDOWN) ? null : translateToNumber(item.defaultValue)
    }
    
  })

  return fields
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
        step1MetaData: payload,
        fields: createDefaultValues(state, payload, ConfiguratorPageStep.STEP1)
      }
    },
    [CONFIGURATOR.CHANGE_FIELD_VALUE](state, { payload: { value, name, step }}) {
      return {
        ...state,
        fields: {
          ...state.fields,
          [step] : {
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
        ...state,
        submitting: true,
      }
    },
    [CONFIGURATOR.GET_META_STEP2_RES](state, { payload }) {
      return {
        ...state,
        fields: {
          ...state.fields,
          [ConfiguratorPageStep.STEP2] : {},
          [ConfiguratorPageStep.STEP3] : {}
        },
        step2MetaData: payload,
      }
    }
  })
}
