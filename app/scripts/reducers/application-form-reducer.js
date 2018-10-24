import { toPairs } from 'ramda'
import { createReducer } from '../modules/helpers'
import { APPLICATION_FORM } from '../actions/types'
import { SectionStatusType, SubmitStatus } from './../utils/constants'

const initialState = {
  TAC: {
    show: false,
    agree: false
  },
  readyForSubmit: false,
  current: 0,
  chapters: undefined,
  reviewMode: false,
  finalSubmit: {
    submitting: false,
    status: undefined
  }
}

const goToNextSection = (state, payload) => {
  const { chapters } = state
  if (payload > chapters.length) {
    return state
  }


  const sectionToFinished = {
    ...chapters[payload - 1],
    status: SectionStatusType.FINISHED
  }
  chapters.splice(payload - 1, 1, sectionToFinished)

  if (payload < chapters.length) {
    const sectionToProgress = {
      ...chapters[payload],
      status: SectionStatusType.IN_PROGRESS
    }
    chapters.splice(payload, 1, sectionToProgress)
  }

  return {
    ...state,
    current: payload,
    chapters: chapters
  }
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
    [APPLICATION_FORM.READY_FOR_SUBMIT](state) {
      return {
        ...state,
        readyForSubmit: true
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
    [APPLICATION_FORM.GO_TO_REVIEW_MODE](state) {
      return {
        ...state,
        current: -1,
        reviewMode: true
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
    [APPLICATION_FORM.SUBMIT_RES](state, { payload: { status, errorMessage } }) {
      return {
        ...state,
        finalSubmit: {
          submitting: false,
          status,
          errorMessage
        }
      }
    },
  })
}

