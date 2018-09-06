import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'
import { SectionStatusType } from '../utils/constants'
import { keys, pickBy, toPairs, isEmpty } from 'ramda'


export const initialState = {
  fields: undefined,
  step: 1,
  submitting: false,
}


export default {
  ['configurator']: createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return initialState
    }
  })
}
