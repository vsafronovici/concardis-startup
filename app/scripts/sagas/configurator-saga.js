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
import { mockTranslations } from '../mock-data/mock-translations'
import { loadTranslationsResp } from '../actions/app-action'
import { ConfiguratorPageStep } from '../utils/constants'



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
    yield call(delay, 600)
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
    takeLatest(CONFIGURATOR.INIT_DATA3, initDataSaga3)
  ])
}
