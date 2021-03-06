import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { SFAction } from '../modules/client'
import { LanguageType, NodeProcess } from '../utils/constants'

function* loadTranslationsSaga({ payload: { lang } }) {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
    const mockTranslations = require('./../mock-data/mock-translations')
    yield call(delay, 600)
    yield put(loadTranslationsResp(mockTranslations.default))
  } else {
    const action = {
      actionName: window.configSettings.remoteActions.getDictionaryMetadata,
      args: lang
    }
    const response = yield call(SFAction, action)
    yield put(loadTranslationsResp(response.data))
  }
}

function* initPageSaga() {
  let lang
  if (process.env.NODE_ENV === NodeProcess.PROD) {
    lang = window.configSettings.lang
  }

  // lang = lang || (yield select(i18nLangSelector))
  yield put(loadTranslationsReq(lang || LanguageType.EN))
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga),
    takeLatest(APP.LOAD_TRANSLATIONS_REQ, loadTranslationsSaga)
  ])
}
