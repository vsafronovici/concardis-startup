import { all, call, put, takeLatest } from 'redux-saga/effects'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { SFAction } from '../modules/client'

function* loadTranslationsSaga({ payload: { lang } }) {
  const action = {
    actionName: window.configSettings.remoteActions.getDictionaryMetadata,
    args: lang
  }
  const response = yield call(SFAction, action)
  yield put(loadTranslationsResp(response.data))
}

function* initPageSaga() {
  yield put(loadTranslationsReq(window.configSettings.lang))
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga),
    takeLatest(APP.LOAD_TRANSLATIONS_REQ, loadTranslationsSaga)
  ])
}
