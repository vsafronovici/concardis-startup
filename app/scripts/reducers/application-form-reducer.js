import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'
import { SectionStatusType } from '../utils/constants'
import { keys, pickBy, toPairs, isEmpty } from 'ramda'

export const initialState = {
  sections: undefined,
  fields: undefined,
  sectionsState: undefined,
  fieldsValues: undefined,
  submitting: false
}

const goToNextStep = (state, { sectionId, values }) => {
  const { sectionsState } = state
  const sectionState = {
    ...sectionsState[sectionId],
    status: SectionStatusType.FINISHED
  }

  const newState = {
    ...state,
    sectionsState: {
      ...sectionsState,
      [sectionId]: sectionState
    }
  }

  const nextSectionPair = pickBy(
    (val, key) => val.status === SectionStatusType.WAITING || val.status === SectionStatusType.PAUSED
  )(sectionsState)

  if (!isEmpty(nextSectionPair)) {
    const nextSectionId = keys(nextSectionPair)[0]
    console.log('goToNextStep nextSectionId=', {nextSectionPair, nextSectionId})
    const nextSectionState = {
      ...sectionsState[nextSectionId],
      status: SectionStatusType.IN_PROGRESS
    }
    newState.sectionsState[nextSectionId] = nextSectionState
  }

  return newState
}

const editSection = (state, id) => {
  const { sectionsState } = state
  const newState = {
    ...state,
    sectionsState: { ...sectionsState }
  }

  toPairs(sectionsState).forEach(
    ([key, value]) => {
      if (key === id) {
        newState.sectionsState[key] = {
          ...newState.sectionsState[key],
          status: SectionStatusType.IN_PROGRESS
        }
      } else if (value.status === SectionStatusType.IN_PROGRESS) {
        newState.sectionsState[key] = {
          ...newState.sectionsState[key],
          status: SectionStatusType.PAUSED
        }
      }
    }
  )

  return newState
}

export default {
  ['application-form']: createReducer(initialState, {
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ](state) {
      return initialState
    },
    [APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP](state, { payload }) {
      return {
        ...state,
        ...payload,
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
    [APPLICATION_FORM.SUBMIT_ALL_REQ](state, { payload }) {
      return {
        ...state,
        submitting: true
      }
    },
    [APPLICATION_FORM.SUBMIT_ALL_RESP](state, { payload }) {
      return {
        ...state,
        submitting: false
      }
    },
  })
}
