import { CONFIGURATOR } from "./types";

export const initData = () => ({
  type: CONFIGURATOR.INIT_DATA
})

export const getMetaStep1Req = () => ({
  type: CONFIGURATOR.GET_META_STEP1_REQ
})

export const getMetaStep1Resp = payload => ({
  type: CONFIGURATOR.GET_META_STEP1_RESP,
  payload
})
