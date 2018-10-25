import { all, call, put, takeLatest } from 'redux-saga/effects'
import { APP } from './../actions/types'
import { loadTranslationsReq, loadTranslationsResp, failedApiFetch } from '../actions/app-action'
import { SFAction, memoizedSFAction } from '../modules/client'
import { LanguageType } from '../utils/constants'

function* loadTranslationsSaga({ payload: { lang } }) {
  const action = {
    actionName: window.configSettings.remoteActions.getDictionaryMetadata,
    args: lang
  }
  const response = yield call(apiFetchSaga, action)
  yield put(loadTranslationsResp(response.data))
}

function* initPageSaga() {
  yield put(loadTranslationsReq(window.configSettings.lang || LanguageType.EN))
}

export function* apiFetchSaga(action, options = {}) {
  const { memoize } = options
  try {
    const sfAction = memoize ? memoizedSFAction : SFAction
    return yield call(sfAction, action, options)
  } catch(err) {
    return yield put(failedApiFetch(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(APP.INIT_PAGE, initPageSaga),
    takeLatest(APP.LOAD_TRANSLATIONS_REQ, loadTranslationsSaga),
  ])
}
