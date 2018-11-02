import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { PACKAGE_CONFIGURE } from '../actions/types'
import {
  getMetaPackageRes, validateDiscountCodeReq, validateDiscountCodeRes, applyDiscountReq, applyDiscountRes,
  submitQuoteRes, goToRoute, sitePageSetting,
} from '../actions/package-configure-action'
import { failedApiFetch } from '../actions/app-action'
import { apiFetchSaga } from './app-saga'
import { applyDiscountPayloadSelector, saveQuoteResponseSelector } from '../selectors/package-configure-selector'
import { goToExternalPage } from '../utils/function-utils'
import { EXTERNAL_LINKS, PackageRoutes, RESPONSE_STATUS_CODE } from '../utils/constants'
import { i18nLangSelector } from '../selectors/i18n-selector'

function* initDataSaga() {
  const sitePageValue = window.configSettings.statePageSetting
  yield put(sitePageSetting(sitePageValue))

  if (sitePageValue < 3) {
    const lang = yield select(i18nLangSelector)
    const action = {
      actionName: window.configSettings.remoteActions.getQuote,
      args: lang
    }
    const response = yield call(apiFetchSaga, action, { parseToJSON: true })
    yield put(getMetaPackageRes(response.data))
  }
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

  const response = yield call(apiFetchSaga, action, { parseToJSON: true, memoize: true })
  yield put(validateDiscountCodeRes(response.data))
}

function* validateDiscountCodeResSaga({ payload }) {
  if (payload.code === RESPONSE_STATUS_CODE.OK) {
    const applyDiscountPayload = yield select(applyDiscountPayloadSelector)
    yield put(applyDiscountReq(applyDiscountPayload))
  }
}

function* applyDiscountReqSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.applyDiscount,
    args: JSON.stringify(payload)
  }

  const response = yield call(apiFetchSaga, action, { parseToJSON: true, memoize: true })
  yield put(applyDiscountRes(response.data))
}

function* submitQuoteReqSaga(payload) {
  const action = {
    actionName: window.configSettings.remoteActions.saveQuote,
    args: JSON.stringify(payload)
  }
  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(submitQuoteRes(response.data))
}

function* submitQuoteSaga({ payload }) {
  yield call(submitQuoteReqSaga, payload)

  const { code } = yield select(saveQuoteResponseSelector)

  if (code === RESPONSE_STATUS_CODE.OK) {
    yield put(goToRoute(PackageRoutes.ROUTE_1))
  } else {
    yield put(failedApiFetch('Error when saving Quote'))
  }
}


function* confirmOfferSaga({ payload }) {
  yield call(submitQuoteReqSaga, payload)

  const { code } = yield select(saveQuoteResponseSelector)

  if (code === RESPONSE_STATUS_CODE.OK) {
    goToExternalPage(EXTERNAL_LINKS.APPLICATION_FORM)
  } else {
    yield put(failedApiFetch('Error when saving Quote'))
  }
}

export default function* root() {
  yield all([
    takeLatest(PACKAGE_CONFIGURE.INIT_DATA, initDataSaga),
    takeLatest(PACKAGE_CONFIGURE.APPLY_DISCOUNT, applyDiscountSaga),
    takeLatest(PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_REQ, validateDiscountCodeReqSaga),
    takeLatest(PACKAGE_CONFIGURE.VALIDATE_DISCOUNT_CODE_RES, validateDiscountCodeResSaga),
    takeLatest(PACKAGE_CONFIGURE.APPLY_DISCOUNT_REQ, applyDiscountReqSaga),
    takeLatest(PACKAGE_CONFIGURE.SUBMIT_QUOTE, submitQuoteSaga),
    takeLatest(PACKAGE_CONFIGURE.CONFIRM_OFFER, confirmOfferSaga),
  ])
}
