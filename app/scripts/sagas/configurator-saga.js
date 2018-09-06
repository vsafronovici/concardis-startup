import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { CONFIGURATOR } from '../actions/types'
import { page1MetaMock } from '../mock-data/configurator/mock-fields-step1'

import { getMetaStep1Req, getMetaStep1Res } from '../actions/configurator-action'
import { SFAction } from './../modules/client'
import {
  transformFieldsMeta, transformFieldsValues, transformSectionsMeta,
  transformSectionsState
} from '../transformers/application-form-transformer'



function* initDataSaga() {
  yield put(getMetaStep1Req())
  yield put(getMetaStep1Res(page1MetaMock))

}

export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga)
  ])
}
