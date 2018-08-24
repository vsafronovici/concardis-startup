import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APPLICATION_FORM } from '../actions/types'
import { mockFieldsSections } from '../mock-data/mock-fields-sections'
import { getFieldsSectionsReq, getFieldsSectionsResp, goToNextStep } from '../actions/application-form-action'


function* initDataSaga() {
  yield put(getFieldsSectionsReq())

  // TODO remove
  yield call(delay, 600)
  yield put(getFieldsSectionsResp(mockFieldsSections))

}

function* saveAppFormSaga({ payload }) {
  console.log("saveAppFormSaga", payload)
  // TODO remove
  yield call(delay, 600)
  yield put(goToNextStep(payload))

}


export default function* root() {
  console.log('application form saga root')
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeEvery(APPLICATION_FORM.SAVE_FIELDS_SECTION_REQ, saveAppFormSaga)
  ])
}
