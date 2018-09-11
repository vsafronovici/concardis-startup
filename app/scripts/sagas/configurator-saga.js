import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { memoize } from 'ramda'

import { CONFIGURATOR } from '../actions/types'
import { page1MetaMock } from '../mock-data/configurator/mock-fields-step1'
import { page2MetaMock } from '../mock-data/configurator/mock-fields-step2'

import { getMetaStep1Req, getMetaStep1Res, getMetaStep2Req, getMetaStep2Res, getMetaStep3Req, getMetaStep3Res, changeFieldValue } from '../actions/configurator-action'
import { SFAction } from './../modules/client'
import { ConfiguratorPageStep } from '../utils/constants'


const memoizedGetProductsRequest = memoize(function*(payload) {
  const action = {
    actionName: configSettings.remoteActions.getProducts,
    args: JSON.stringify(payload)
  }
  return yield call(SFAction, action, { buffer: true, escape: false })
})

function* getMetaStep2Saga({ payload }) {
  if (window.configSettings) {
    const response = yield memoizedGetProductsRequest(payload)
    //console.log('getMetaStep2Saga ', response)
    yield put(getMetaStep2Res(response.data))
  } else {
    // load mocks
    yield put(getMetaStep2Res(page2MetaMock))
  }
}

function* initDataSaga() {

  if (window.configSettings) {
    const action = {
      actionName: configSettings.remoteActions.getFieldsMetadata,
      args: ConfiguratorPageStep.STEP1
    }
    const response = yield call(SFAction, action, { buffer: true, escape: false })
    yield put(getMetaStep1Res(response.data.fields))

  } else {
    // load mocks
    //yield call(delay, 600)


    yield put(getMetaStep1Req())
    yield put(getMetaStep1Res(page1MetaMock))
  }


}

function* goToStepSaga({ payload }) {
  if (payload === ConfiguratorPageStep.STEP2) {
    //TODO remove
    const fields = {
      'pag1.f1': 2000,
      'pag1.f2': 2000,
      'pag1.f3': 2000,
      'pag1.f4': 'Hotel'
    }
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
