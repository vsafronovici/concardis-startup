import { APPLICATION_FORM } from "./types";

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

export const saveFieldsSectionReq = payload => ({
  type: APPLICATION_FORM.SAVE_FIELDS_SECTION_REQ,
  payload
})

export const saveFieldsSectionResp = payload => ({
  type: APPLICATION_FORM.SAVE_FIELDS_SECTION_RESP,
  payload
})

export const goToNextStep = payload => ({
  type: APPLICATION_FORM.GO_TO_NEXT_STEP,
  payload
})

