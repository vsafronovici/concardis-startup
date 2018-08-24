import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { mockTranslations } from '../mock-data/mock-translations'


function* initPageSaga({ payload }) {
  yield put(loadTranslationsReq())

  // TODO remove
  yield call(delay, 600)
  yield put(loadTranslationsResp(mockTranslations))

}

export default function* root() {
  console.log('app saga root')
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga)
  ])
}
