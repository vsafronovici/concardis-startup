import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp } from '../actions/app-action'
import { mockTranslations } from '../mock-data/mock-translations'
import { SFAction } from '../modules/client'
import { LanguageType } from '../utils/constants'
import { i18nLangSelector, i18nSelector } from '../selectors/i18n-selector'


function* loadTranslationsSaga({ payload: { lang } }) {
  if (window.configSettings) {
    const action = {
      actionName: configSettings.remoteActions.getDictionaryMetadata,
      args: lang
    }
    const response = yield call(SFAction, action)
    yield put(loadTranslationsResp(response.data))
  } else {
    // load mocks
    yield call(delay, 600)
    yield put(loadTranslationsResp(mockTranslations))
  }

}

function* initPageSaga() {
  const lang = yield select(i18nLangSelector)
  yield put(loadTranslationsReq(lang || LanguageType.EN))
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga),
    takeLatest(APP.LOAD_TRANSLATIONS_REQ, loadTranslationsSaga)
  ])
}
