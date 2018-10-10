import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { APPLICATION_FORM } from '../actions/types'
import { getFormMetaRes } from './../actions/application-form-action'
import { SFAction } from '../modules/client'
import { updateCommercialsTCReq, updateCommercialsTCRes } from '../actions/application-form-action'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))
}

function* agreeTACSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.updateCommercialsTC,
    args: true
  }
  yield put(updateCommercialsTCReq(true))

  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(updateCommercialsTCRes(response.data))
}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeLatest(APPLICATION_FORM.AGREE_TAC, agreeTACSaga),
  ])
}
