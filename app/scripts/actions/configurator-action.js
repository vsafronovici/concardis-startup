import { CONFIGURATOR } from "./types";

export const initData = () => ({
  type: CONFIGURATOR.INIT_DATA
})

export const initData3 = () => ({
  type: CONFIGURATOR.INIT_DATA3
})

export const getMetaStep1Req = () => ({
  type: CONFIGURATOR.GET_META_STEP1_REQ
})

export const getMetaStep1Res = payload => ({
  type: CONFIGURATOR.GET_META_STEP1_RES,
  payload
})

export const getMetaStep2Req = payload => ({
  type: CONFIGURATOR.GET_META_STEP2_REQ,
  payload
})

export const getMetaStep2Res = payload => ({
  type: CONFIGURATOR.GET_META_STEP2_RES,
  payload
})

export const changeFieldValue = (payload) => ({
  type: CONFIGURATOR.CHANGE_FIELD_VALUE,
  payload
  
})

export const goToStep = payload => ({
  type: CONFIGURATOR.GO_TO_STEP,
  payload
})

export const validateDiscountCode = payload => ({
  type: CONFIGURATOR.VALIDATE_DISCOUNT_CODE,
  payload
})

export const recalculateQuote = payload => ({
  type: CONFIGURATOR.RECALCULATE_QUOTE,
  payload
})
