import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { APPLICATION_FORM } from '../actions/types'
import { getFormMetaRes } from './../actions/application-form-action'
import { SFAction } from '../modules/client'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))
}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga)
  ])
}
