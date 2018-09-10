import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { memoize } from 'ramda'

import { CONFIGURATOR } from '../actions/types'
import { page1MetaMock } from '../mock-data/configurator/mock-fields-step1'
import { page3MetaMock } from '../mock-data/configurator/mock-fields-step3'

import { getMetaStep1Req, getMetaStep1Res, getMetaStep2Req, getMetaStep2Res, getMetaStep3Req, getMetaStep3Res } from '../actions/configurator-action'
import { SFAction } from './../modules/client'
import { ConfiguratorPageStep } from '../utils/constants'


/*function* memoizedGetProductsRequest(payload) {
  const action = {
    actionName: configSettings.remoteActions.getProducts,
    args: JSON.stringify(payload)
  }

  return yield call(SFAction, action, { buffer: true, escape: false })
}*/

const memoizedGetProductsRequest = memoize(function*(payload) {
  const action = {
    actionName: configSettings.remoteActions.getProducts,
    args: JSON.stringify(payload)
  }
  return yield call(SFAction, action, { buffer: true, escape: false })
})

function* getMetaStep2Saga({ payload }) {
  const response = yield memoizedGetProductsRequest(payload)
  console.log('getMetaStep2Saga ', response)
  yield put(getMetaStep2Res(response.data))
}

function* initDataSaga() {

  if (window.configSettings) {
    const action = {
      actionName: configSettings.remoteActions.getFieldsMetadata,
      args: ConfiguratorPageStep.STEP1
    }
    const response = yield call(SFAction, action, { buffer: true, escape: false })
    yield put(getMetaStep1Res(response.data.fields))

    //TODO remove
    const fields = {
      'pag1.f1': 2000,
      'pag1.f2': 2000,
      'pag1.f3': 2000,
      'pag1.f4': 'Hotel'
    }
    yield put(getMetaStep2Req(fields))


  } else {
    // load mocks
    //yield call(delay, 600)
    yield put(getMetaStep1Req())
    yield put(getMetaStep1Res(page1MetaMock))
  }


}

function* initDataSaga3() {
  yield put(getMetaStep3Req())
  yield put(getMetaStep3Res(page3MetaMock))

}

export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga),
    takeLatest(CONFIGURATOR.INIT_DATA3, initDataSaga3),
    takeLatest(CONFIGURATOR.GET_META_STEP2_REQ, getMetaStep2Saga)
  ])
}
