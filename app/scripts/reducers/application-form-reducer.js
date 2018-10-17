import { toPairs } from 'ramda'
import { createReducer } from '../modules/helpers'
import { APPLICATION_FORM } from '../actions/types'
import { SectionStatusType, SubmitStatus } from './../utils/constants'

const initialState = {
  TAC: {
    show: false,
    agree: false
  },
  current: 0,
  chapters: undefined,
  finished: false
}

const goToNextSection = (state, payload) => {
  const { chapters } = state
  const MAX = chapters.length -1
  if (payload > MAX) {
    return {
      ...state
    }
  }

  const sectionToProgress = {
    ...chapters[payload],
    status: SectionStatusType.IN_PROGRESS
  }
  chapters.splice(payload, 1, sectionToProgress)

  const sectionToFinished = {
    ...chapters[payload - 1],
    status: SectionStatusType.FINISHED
  }
  chapters.splice(payload - 1, 1, sectionToFinished)

  const maxCurrent = current => {
    const max = chapters.length - 1
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
    chapters: chapters
  }
  return newState
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
        chapters: payload
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
    },
    [APPLICATION_FORM.GET_REVIEW](state, { payload }) {
      return {
        ...state,
        finished: payload
      }
    },
    [APPLICATION_FORM.SAVE_REQ](state, { payload }) {
      return {
        ...state,
        submitting: true
      }
    },
    [APPLICATION_FORM.SAVE_RES](state, { payload }) {
      return {
        ...state,
        submitting: false
      }
    },
    [APPLICATION_FORM.SUBMIT_REQ](state, { payload }) {
      return {
        ...state,
        finalSubmit: {
          submitting: true,
          status: undefined,
        }
      }
    },
    [APPLICATION_FORM.SUBMIT_RES_SUCCESS](state, { payload }) {
      return {
        ...state,
        finalSubmit: {
          submitting: false,
          status: SubmitStatus.SUCCESS
        }
      }
    },
    [APPLICATION_FORM.SUBMIT_RES_ERROR](state, { payload }) {
      return {
        ...state,
        finalSubmit: {
          submitting: false,
          status: SubmitStatus.ERROR
        }
      }
    }
  })
}

