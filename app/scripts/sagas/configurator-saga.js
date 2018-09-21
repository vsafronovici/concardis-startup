import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { CONFIGURATOR } from '../actions/types'
import { getMetaStep1Req, getMetaStep1Res, getMetaStep2Req, getMetaStep2Res, recalculateQuoteRes, signupRes } from '../actions/configurator-action'
import { SFAction, memoizedSFAction } from './../modules/client'
import { ConfiguratorPageStep, NodeProcess } from '../utils/constants'
import { step1FieldsSelector } from '../selectors/configurator-selector'

function* initDataSaga() {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
    const page1MetaMock = require('./../mock-data/configurator/mock-fields-step1')
    yield call(delay, 600)
    yield put(getMetaStep1Req())
    yield put(getMetaStep1Res(page1MetaMock.default))
  } else {
    const action = {
      actionName: window.configSettings.remoteActions.getFieldsMetadata,
      args: ConfiguratorPageStep.STEP1
    }
    const response = yield call(SFAction, action, { parseToJSON: true })
    yield put(getMetaStep1Res(response.data.fields))
  }
}
function* getMetaStep2Saga({ payload }) {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
    const page2MetaMock = require('./../mock-data/configurator/mock-fields-step2')
    yield call(delay, 100)
    yield put(getMetaStep2Res(page2MetaMock.default))
  } else {
    const action = {
      actionName: window.configSettings.remoteActions.getProducts,
      args: JSON.stringify(payload)
    }
    const response = yield call(memoizedSFAction, action, { parseToJSON: true })
    yield put(getMetaStep2Res(response.data))
  }
}

function* goToStepSaga({ payload }) {
  if (payload === ConfiguratorPageStep.STEP2) {
    const fields = yield select(step1FieldsSelector)
    yield put(getMetaStep2Req(fields))
  }
}

function* signupSaga({ payload }) {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    yield call(delay, 600)
    yield put(signupRes({ code: '1' }))
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
