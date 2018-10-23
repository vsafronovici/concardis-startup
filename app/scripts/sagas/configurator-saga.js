import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { CONFIGURATOR } from '../actions/types'
import {
  changeFieldValue, getMetaStep1Res, getMetaStep2Req, getMetaStep2Res, recalculateQuoteRes, signupRes
} from '../actions/configurator-action'
import { SFAction, memoizedSFAction } from './../modules/client'
import { ConfiguratorPageStep, NodeProcess } from '../utils/constants'
import { step1FieldsSelector } from '../selectors/configurator-selector'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getFieldsMetadata,
    args: ConfiguratorPageStep.STEP1
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getMetaStep1Res(response.data.fields))
}

function* getMetaStep2Saga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.getQProducts,
    args: JSON.stringify(payload)
  }
  const response = yield call(memoizedSFAction, action, { parseToJSON: true })
  yield put(getMetaStep2Res(response.data))
}

function* goToStepSaga({ payload }) {
  if (payload === ConfiguratorPageStep.STEP2) {
    const fields = yield select(step1FieldsSelector)
    yield put(getMetaStep2Req(fields))
  }
}

function* signupSaga({ payload }) {
  yield put(changeFieldValue({
    name: 'email',
    value: payload.email,
    step: ConfiguratorPageStep.STEP3
  }))

  if (process.env.NODE_ENV === NodeProcess.DEV) {
    yield call(delay, 600)
    yield put(signupRes({ lastName: 'Gucci', firstName: 'Mr.Safronovici', code: '1' }))
  } else {
    const action = {
      actionName: window.configSettings.remoteActions.submitEmailGDPR,
      args: JSON.stringify(payload)
    }
    const response = yield call(memoizedSFAction, action, { parseToJSON: true })
    yield put(signupRes(response.data))
  }
}

function* recalculateQuoteSaga({ payload }) {
  const action = {
    actionName: window.configSettings.remoteActions.recalculatePrice,
    args: JSON.stringify(payload)
  }
  const response = yield call(memoizedSFAction, action, { parseToJSON: true })
  yield put(recalculateQuoteRes(response.data))
}

export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga),
    takeLatest(CONFIGURATOR.GO_TO_STEP, goToStepSaga),
    takeLatest(CONFIGURATOR.GET_META_STEP2_REQ, getMetaStep2Saga),
    takeLatest(CONFIGURATOR.RECALCULATE_QUOTE_REQ, recalculateQuoteSaga),
    takeLatest(CONFIGURATOR.SIGNUP_REQ, signupSaga)
  ])
}
