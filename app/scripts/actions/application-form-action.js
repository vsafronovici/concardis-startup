import { APPLICATION_FORM } from './types'

export const initData = () => ({
  type: APPLICATION_FORM.INIT_DATA
})

export const getFieldsSectionsReq = () => ({
  type: APPLICATION_FORM.GET_FIELDS_SECTIONS_REQ
})

export const getFieldsSectionsResp = payload => ({
  type: APPLICATION_FORM.GET_FIELDS_SECTIONS_RESP,
  payload
})
