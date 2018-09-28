import { all, call, put, takeLatest } from 'redux-saga/effects'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { SFAction } from '../modules/client'
import { LanguageType } from '../utils/constants'

function* loadTranslationsSaga({ payload: { lang } }) {
  console.log('loadTranslationsSaga', lang)
  const action = {
    actionName: window.configSettings.remoteActions.getDictionaryMetadata,
    args: lang
  }
  const response = yield call(SFAction, action)
  yield put(loadTranslationsResp(response.data))
}

function* initPageSaga() {
  yield put(loadTranslationsReq(window.configSettings.lang || LanguageType.EN))
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga),
    takeLatest(APP.LOAD_TRANSLATIONS_REQ, loadTranslationsSaga)
  ])
}
