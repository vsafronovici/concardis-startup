import { all, call, put, takeLatest } from 'redux-saga/effects'

import { PACKAGE_CONFIGURE } from '../actions/types'
import { getMetaPackageRes, submitQuoteRes } from '../actions/package-configure-action'
import { SFAction } from './../modules/client'
// import { step1FieldsSelector } from '../selectors/configurator-selector'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getQuote,
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getMetaPackageRes(response.data))
}

function* applyDiscountSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.saveQuote,
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(submitQuoteRes(response.data))
}


function* saveQuoteSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.saveQuote,
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(submitQuoteRes(response.data))
}

export default function* root() {
  yield all([
    takeLatest(PACKAGE_CONFIGURE.INIT_DATA, initDataSaga),
    takeLatest(PACKAGE_CONFIGURE.APPLY_DISCOUNT, applyDiscountSaga),
    takeLatest(PACKAGE_CONFIGURE.SUBMIT_QUOTE_REQ, saveQuoteSaga)
  ])
}
