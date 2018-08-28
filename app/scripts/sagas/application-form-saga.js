import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APPLICATION_FORM } from '../actions/types'
import { mockSectionsMeta } from '../mock-data/mock-sections-meta'
import { mockFieldsMeta } from '../mock-data/mock-fields-meta'
import { mockFieldsValues } from '../mock-data/mock-fields-values'
import { mockSectionsState } from '../mock-data/mock-sections-state'
import {
  getFieldsSectionsReq, getFieldsSectionsResp, goToNextStep, saveFieldsSectionReq,
  saveFieldsSectionResp
} from '../actions/application-form-action'


function* initDataSaga() {
  yield put(getFieldsSectionsReq())

  // TODO remove
  yield call(delay, 600)
  yield put(getFieldsSectionsResp({
    sections: mockSectionsMeta,
    fields: mockFieldsMeta,
    sectionsState: mockSectionsState,
    fieldsValues: mockFieldsValues,
  }))

}

function* saveAppFormSaga({ payload }) {
  console.log("saveAppFormSaga", payload)
  // TODO remove
  yield call(delay, 600)
  yield put(saveFieldsSectionResp({}))

  yield put(goToNextStep(payload))
}


export default function* root() {
  console.log('application form saga root')
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeEvery(APPLICATION_FORM.SAVE_FIELDS_SECTION_REQ, saveAppFormSaga)
  ])
}
