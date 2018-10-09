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

export const getFieldsSectionsReq = () => ({
  type: APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ
})

export const getFieldsSectionsResp = payload => ({
  type: APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP,
  payload
})
