import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { PACKAGE_CONFIGURE } from '../actions/types'
import {
  getMetaPackageRes, validateDiscountCodeReq, validateDiscountCodeRes, applyDiscountReq, applyDiscountRes, submitQuoteRes
} from '../actions/package-configure-action'
import { SFAction, memoizedSFAction } from './../modules/client'
import { applyDiscountPayloadSelector } from '../selectors/package-configure-selector'
import { RESPONSE_STATUS_CODE } from '../utils/constants'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getQuote,
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getMetaPackageRes(response.data))
}

function* applyDiscountSaga() {
  const payload = yield select(applyDiscountPayloadSelector)
  yield put(validateDiscountCodeReq(payload))
}

function* validateDiscountCodeReqSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.validateDiscount,
    args: JSON.stringify(payload)
  }

  const response = yield call(memoizedSFAction, action, { parseToJSON: true })
  yield put(validateDiscountCodeRes(response.data))
}

function* validateDiscountCodeResSaga({ payload }) {
  if (payload.code === RESPONSE_STATUS_CODE.OK) {
    const payload = yield select(applyDiscountPayloadSelector)
    yield put(applyDiscountReq(payload))
  }
}

function* applyDiscountReqSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.applyDiscount,
    args: JSON.stringify(payload)
  }

  const response = yield call(memoizedSFAction, action, { parseToJSON: true })
  yield put(applyDiscountRes(response.data))
}

function* saveQuoteSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.saveQuote,
    args: JSON.stringify(payload)
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(submitQuoteRes(response.data))
}

export default function* root() {
  yield all([
    takeLatest(PACKAGE_CONFIGURE.INIT_DATA, initDataSaga),
    takeLatest(PACKAGE_CONFIGURE.APPLY_DISCOUNT, applyDiscountSaga),
    takeLatest(PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_REQ, validateDiscountCodeReqSaga),
    takeLatest(PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_RES, validateDiscountCodeResSaga),
    takeLatest(PACKAGE_CONFIGURE.APPLY_DISCOUNT_REQ, applyDiscountReqSaga),
    takeLatest(PACKAGE_CONFIGURE.SUBMIT_QUOTE_REQ, saveQuoteSaga)
  ])
}
