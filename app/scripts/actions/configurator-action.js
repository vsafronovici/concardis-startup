import { CONFIGURATOR } from "./types";

export const initData = () => ({
  type: CONFIGURATOR.INIT_DATA
})

export const getMetaStep1Req = () => ({
  type: CONFIGURATOR.GET_META_STEP1_REQ
})

export const getMetaStep1Res = payload => ({
  type: CONFIGURATOR.GET_META_STEP1_RES,
  payload
})

export const changeFieldValue = (payload, name) => ({
  type: CONFIGURATOR.CHANGE_FIELD_VALUE,
  payload,
  name
})
