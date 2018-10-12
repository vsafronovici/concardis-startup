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
    [APPLICATION_FORM.GO_TO_NEXT_SECTION](state, { payload }) {
      return goToNextSection(state, payload)
    },
    [APPLICATION_FORM.GO_TO_SECTION](state, { payload }) {
      return {
        ...state,
        current: payload,
      }
    }
  })
}

const goToNextSection = (state, payload) => {
  const { sections } = state
  const MAX = sections.length -1
  if (payload > MAX) {
    return {
      ...state
    }
  }

  const sectionToProgress = {
    ...sections[payload],
    status: SectionStatusType.IN_PROGRESS
  }
  sections.splice(payload, 1, sectionToProgress)

  const sectionToFinished = {
    ...sections[payload - 1],
    status: SectionStatusType.FINISHED
  }
  sections.splice(payload - 1, 1, sectionToFinished)
  //console.log('newsections', newSections)
  // for ( let i = 0; i <= sections.length; i++ ) {
  //   if (sections[i] === sections[stepIndex]) {
  //     sections[i] = sectionToProgress
  //   }
  //   if (sections[i] === sections[currentIndex]) {
  //     sections[i] = sectionToWaiting
  //   }
  const maxCurrent = current => {
    const max = sections.length - 1
    if (current > max) {
      console.log('Current is more than 5')
      return max
    } else {
      return current
    }
  }

  const newState = {
    ...state,
    current: maxCurrent(payload),
    sections: sections
  }
  return newState
}
