import { APPLICATION_FORM } from './types'

export const initData = () => ({
  type: APPLICATION_FORM.INIT_DATA
})

export const openTACModal = () => ({
  type: APPLICATION_FORM.OPEN_TAC_MODAL
})

export const closeTACModal = () => ({
  type: APPLICATION_FORM.CLOSE_TAC_MODAL
})

export const agreeTAC = () => ({
  type: APPLICATION_FORM.AGREE_TAC
})

export const updateCommercialsTCReq = payload => ({
  type: APPLICATION_FORM.UPDATE_COMMERCIALS_TC_REQ,
  payload
})

export const updateCommercialsTCRes = payload => ({
  type: APPLICATION_FORM.UPDATE_COMMERCIALS_TC_RES,
  payload
})

export const getFormMetaReq = () => ({
  type: APPLICATION_FORM.GET_FORM_META_REQ
})

export const getFormMetaRes = payload => ({
  type: APPLICATION_FORM.GET_FORM_META_RES,
  payload
})

export const goToSection = payload => ({
  type: APPLICATION_FORM.GO_TO_SECTION,
  payload
})

export const goToNextSection = payload => ({
  type: APPLICATION_FORM.GO_TO_NEXT_SECTION,
  payload
})

export const getReview = payload => ({
  type: APPLICATION_FORM.GET_REVIEW,
  payload
})

export const save = payload => ({
  type: APPLICATION_FORM.SAVE,
  payload
})

export const saveReq = payload => ({
  type: APPLICATION_FORM.SAVE_REQ,
  payload
})

export const saveRes = payload => ({
  type: APPLICATION_FORM.SAVE_RES,
  payload
})

export const submitReq = () => ({
  type: APPLICATION_FORM.SUBMIT_REQ
})

export const submitResSuccess = payload => ({
  type: APPLICATION_FORM.SUBMIT_RES_SUCCESS,
  payload
})

export const submitResError = payload => ({
  type: APPLICATION_FORM.SUBMIT_RES_ERROR,
  payload
})
