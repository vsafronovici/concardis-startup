import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { APPLICATION_FORM } from '../actions/types'
import { getFormMetaReq, getFormMetaRes } from './../actions/application-form-action'
import { sectionsMock, sectionsStateMock } from './../mock-data/application-form/mock-steps-bar'
import { ConfiguratorPageStep } from '../utils/constants'
import { SFAction } from '../modules/client'
import { getMetaStep1Res } from '../actions/configurator-action'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))



  /*yield put(getFormMetaReq())
  yield call(delay, 600)
  yield put(getFormMetaRes({sections: sectionsMock, sectionsState: sectionsStateMock}))*/
}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga)
  ])
}
