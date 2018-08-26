import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'
import { SectionStatusType } from '../utils/constants'
import { toPairs } from 'ramda'

export const initialState = {
  sections: undefined,
  submitting: false
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
  const currentSectionIdx = sections.findIndex(s => s.id === sectionId)
  const currentSection = sections[currentSectionIdx]

  const updatedSections = [...sections]
  updatedSections[currentSectionIdx] = {
    ...currentSection,
    status: SectionStatusType.FINISHED,
    fields: updateFields(currentSection.fields, values)
  }

  const nextSectionIdx = updatedSections.findIndex(s => s.status === SectionStatusType.WAITING || s.status === SectionStatusType.PAUSED)
  if (nextSectionIdx >= 0) {
    const nextSection = updatedSections[nextSectionIdx]
    updatedSections[nextSectionIdx] = {
      ...nextSection,
      status: SectionStatusType.IN_PROGRESS
    }
  }

  return {
    ...state,
    sections: updatedSections,
  }

}

const editSection = (state, id) => {
  const { sections } = state
  const updatedSections = []

  sections.forEach(s => {
    if (s.id === id) {
      updatedSections.push({
        ...s,
        status: SectionStatusType.IN_PROGRESS
      })
    } else if (s.status === SectionStatusType.IN_PROGRESS) {
      updatedSections.push({
        ...s,
        status: SectionStatusType.PAUSED
      })
    } else {
      updatedSections.push(s)
    }
  })

  return {
    ...state,
    sections: updatedSections,
  }
}

export default {
  ['application-form']: createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return initialState
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        ...state,
        sections: payload
      }
    },
    [APPLICATION_FORM.SAVE_FIELDS_SECTION_REQ](state, { payload }) {
      return {
        ...state,
        submitting: true
      }
    },
    [APPLICATION_FORM.SAVE_FIELDS_SECTION_RESP](state, { payload }) {
      return {
        ...state,
        submitting: false
      }
    },
    [APPLICATION_FORM.GO_TO_NEXT_STEP](state, { payload }) {
      return goToNextStep(state, payload)
    },
    [APPLICATION_FORM.EDIT_SECTION](state, { payload: { id } }) {
      return editSection(state, id)
    },
  })
}
