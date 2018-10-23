import { PACKAGE_CONFIGURE } from './types'

export const initData = () => ({
  type: PACKAGE_CONFIGURE.INIT_DATA
})

export const getMetaPackageReq = () => ({
  type: PACKAGE_CONFIGURE.GET_META_PACKAGE_REQ
})

export const getMetaPackageRes = payload => ({
  type: PACKAGE_CONFIGURE.GET_META_PACKAGE_RES,
  payload
})

export const changePackageQnty = payload => ({
  type: PACKAGE_CONFIGURE.CHANGE_PACKAGE_QNTY,
  payload
})

export const changeDiscountCode = payload => ({
  type: PACKAGE_CONFIGURE.CHANGE_DISCOUNT_CODE,
  payload
})

export const applyDiscount = payload => ({
  type: PACKAGE_CONFIGURE.APPLY_DISCOUNT,
  payload
})

export const validateDiscountCodeReq = payload => ({
  type: PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_REQ,
  payload
})

export const validateDiscountCodeRes = payload => ({
  type: PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_RES,
  payload
})

export const applyDiscountReq = payload => ({
  type: PACKAGE_CONFIGURE.APPLY_DISCOUNT_REQ,
  payload
})

export const applyDiscountRes = payload => ({
  type: PACKAGE_CONFIGURE.APPLY_DISCOUNT_RES,
  payload
})

export const changeExtraQnty = payload => ({
  type: PACKAGE_CONFIGURE.CHANGE_EXTRA_QNTY,
  payload
})

export const submitQuote = payload => ({
  type: PACKAGE_CONFIGURE.SUBMIT_QUOTE,
  payload
})

export const submitQuoteReq = payload => ({
  type: PACKAGE_CONFIGURE.SUBMIT_QUOTE_REQ,
  payload
})

export const submitQuoteRes = payload => ({
  type: PACKAGE_CONFIGURE.SUBMIT_QUOTE_RES,
  payload
})

export const goToRoute = payload => ({
  type: PACKAGE_CONFIGURE.GO_TO_ROUTE,
  payload
})

export const confirmOffer = payload => ({
  type: PACKAGE_CONFIGURE.CONFIRM_OFFER,
  payload
})
