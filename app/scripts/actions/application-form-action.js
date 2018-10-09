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
