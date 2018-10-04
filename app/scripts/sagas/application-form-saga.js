import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { APPLICATION_FORM } from '../actions/types'
import { getFieldsSectionsReq, getFieldsSectionsResp } from './../actions/application-form-action'
import { sectionsMock, sectionsStateMock } from './../mock-data/application-form/mock-steps-bar'

function* initDataSaga() {
  yield put(getFieldsSectionsReq())
  yield call(delay, 600)
  yield put(getFieldsSectionsResp({sections: sectionsMock, sectionsState: sectionsStateMock}))
}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga)
  ])
}