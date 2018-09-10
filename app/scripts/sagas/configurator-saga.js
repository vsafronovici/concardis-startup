import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { CONFIGURATOR } from '../actions/types'
import { page1MetaMock } from '../mock-data/configurator/mock-fields-step1'
import { page3MetaMock } from '../mock-data/configurator/mock-fields-step3'


import { getMetaStep1Req, getMetaStep1Res, getMetaStep3Req, getMetaStep3Res, } from '../actions/configurator-action'
import { SFAction } from './../modules/client'
import {
  transformFieldsMeta, transformFieldsValues, transformSectionsMeta,
  transformSectionsState
} from '../transformers/application-form-transformer'



function* initDataSaga() {
  yield put(getMetaStep1Req())
  yield put(getMetaStep1Res(page1MetaMock))

}

function* initDataSaga3() {
  yield put(getMetaStep3Req())
  yield put(getMetaStep3Res(page3MetaMock))

}

export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga),
    takeLatest(CONFIGURATOR.INIT_DATA3, initDataSaga3)
  ])
}
