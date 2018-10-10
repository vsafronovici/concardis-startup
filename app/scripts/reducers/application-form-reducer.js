import { toPairs } from 'ramda'
import { createReducer } from '../modules/helpers'
import { APPLICATION_FORM } from '../actions/types'
import { SectionStatusType } from './../utils/constants'

const initialState = {
  TAC: {
    show: false,
    agree: false
  },
  current: 0,
  sections: undefined,
  sectionsState: undefined,
}

export default {
  'application-form': createReducer(initialState, {
    [APPLICATION_FORM.OPEN_TAC_MODAL](state) {
      return {
        ...state,
        TAC: {
          ...state.TAC,
          show: true
        }
      }
    },
    [APPLICATION_FORM.CLOSE_TAC_MODAL](state) {
      return {
        ...state,
        TAC: {
          ...state.TAC,
          show: false
        }
      }
    },
    [APPLICATION_FORM.AGREE_TAC](state) {
      return {
        ...state,
        TAC: {
          show: false,
          agree: true
        }
      }
    },
    [APPLICATION_FORM.GET_FORM_META_RES](state, { payload }) {
      return {
        ...state,
        sections: payload
      }
    },
    [APPLICATION_FORM.GO_TO_SECTION](state, { payload }) {
      return {
        ...state,
        current: payload
      }
      // return {
      //   ...state,
      //   ...state.sections.set(payload.stepIndex, {
      //     ...state.sections[payload.stepIndex],
      //     status: SectionStatusType.IN_PROGRESS
      //   })
      // }
    }
  })
}

const goToSectionChange = (state, payload) => {
  const { sections } = state
  const { currentIndex, stepIndex} = payload
  const sectionToProgress = {
    ...sections[stepIndex],
    status: SectionStatusType.IN_PROGRESS
  }
  //sections.splice(stepIndex, 1, sectionToProgress)
  const sectionToWaiting = {
    ...sections[currentIndex],
    status: SectionStatusType.WAITING
  }
  //sections.splice(currentIndex, 1, sectionToWaiting)
  //console.log('newsections', newSections)
  for ( let i = 0; i <= sections.length; i++ ) {
    if (sections[i] === sections[stepIndex]) {
      sections[i] = sectionToProgress
    }
    if (sections[i] === sections[currentIndex]) {
      sections[i] = sectionToWaiting
    }
    console.log(sections)
  }
  console.log('sections', sections)

  const newState = {
    ...state,
    sections: sections
  }
  return newState
}
