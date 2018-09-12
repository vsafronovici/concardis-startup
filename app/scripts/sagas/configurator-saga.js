import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { memoize } from 'ramda'

import { CONFIGURATOR } from '../actions/types'

import { getMetaStep1Req, getMetaStep1Res, getMetaStep2Req, getMetaStep2Res } from '../actions/configurator-action'
import { SFAction } from './../modules/client'
import { ConfiguratorPageStep, NodeProcess } from '../utils/constants'
import { step1FieldsSelector } from '../selectors/configurator-selector'

const memoizedGetProductsRequest = memoize(function*(payload) {
  const action = {
    actionName: configSettings.remoteActions.getProducts,
    args: JSON.stringify(payload)
  }
  return yield call(SFAction, action, { buffer: true, escape: false })
})

function* getMetaStep2Saga({ payload }) {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
    const page2MetaMock = require('./../mock-data/configurator/mock-fields-step2')
    yield call(delay, 600)
    yield put(getMetaStep2Res(page2MetaMock.default))
  } else {
    const response = yield memoizedGetProductsRequest(payload)
    //console.log('getMetaStep2Saga ', response)
    yield put(getMetaStep2Res(response.data))
  }
}

function* initDataSaga() {

  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
   
    const _page1MetaMock = require('./../mock-data/configurator/_mock-fields-step1')
   

    yield call(delay, 600)
    yield put(getMetaStep1Req())
    yield put(getMetaStep1Res(_page1MetaMock.default))
  } else {
    const action = {
      actionName: configSettings.remoteActions.getFieldsMetadata,
      args: ConfiguratorPageStep.STEP1
    }
    const response = yield call(SFAction, action, { buffer: true, escape: false })
    yield put(getMetaStep1Res(response.data.fields))
  }
}

function* goToStepSaga({ payload }) {
  if (payload === ConfiguratorPageStep.STEP2) {
    const fields = yield select(step1FieldsSelector)
    yield put(getMetaStep2Req(fields))
  }
}

export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga),
    takeLatest(CONFIGURATOR.GO_TO_STEP, goToStepSaga),
    takeLatest(CONFIGURATOR.GET_META_STEP2_REQ, getMetaStep2Saga)
  ])
}
