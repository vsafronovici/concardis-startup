import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { mockTranslations } from '../mock-data/mock-translations'
import { SFAction } from '../modules/client'
import { REACT_DEMO } from '../actions/types'


function* initPageSaga({ payload }) {
  yield put(loadTranslationsReq())

  if (window.configSettings) {
    const response = yield call(SFAction, configSettings.remoteActions.getDictionaryMetadata)
    yield put(loadTranslationsResp(response.data))
  } else {
    // load mocks
    yield call(delay, 600)
    yield put(loadTranslationsResp(mockTranslations))
  }
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga)
  ])
}
