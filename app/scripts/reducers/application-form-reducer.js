import { createReducer } from './../modules/helpers'
import { APPLICATION_FORM } from './../actions/types'
import { SectionStatusType } from '../utils/constants'

export const initialState = {
  sections: undefined,
  loaded: false
}

const goToNextStep = (state, sectionId) => {
  const { current, sections } = state
  const currentSection = sections[sectionId]
  const currentSectionUpdated = {
    ...currentSection,
    status: SectionStatusType.FINISHED
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
    [APPLICATION_FORM.GO_TO_NEXT_STEP](state, { sectionId }) {
      return goToNextStep(state, sectionId)
    },
  })
}
