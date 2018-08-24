import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'
import { SectionStatusType } from '../utils/constants'
import { toPairs } from 'ramda'

export const initialState = {
  sections: undefined,
  loaded: false
}

const updateFields = (fields, values) => {
  const updatedFields = [...fields]
  toPairs(values).forEach(
    ([key, value]) => {
      const idx = fields.findIndex(field => field.name === key)
      const field = fields[idx]
      updatedFields[idx] = {
        ...field,
        value
      }
    }
  )
  return updatedFields
}

const goToNextStep = (state, { sectionId, values }) => {
  const { sections } = state
  const currentSection = sections[sectionId]
  const currentSectionUpdated = {
    ...currentSection,
    status: SectionStatusType.FINISHED,
    fields: updateFields(currentSection.fields, values)
  }

  return {
    ...state,
    sections: {
      ...state.sections,
      [sectionId]: currentSectionUpdated
    }
  }

}

export default {
  ['application-form']: createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return {
        ...state,
        loaded: false
      }
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        sections: payload,
        loaded: true
      }
    },
    [APPLICATION_FORM.GO_TO_NEXT_STEP](state, { payload }) {
      return goToNextStep(state, payload)
    },
  })
}
