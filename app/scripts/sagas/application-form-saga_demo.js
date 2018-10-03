/* import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { APPLICATION_FORM } from '../actions/types'
import { mockSectionsMeta } from '../mock-data/mock-sections-meta'
import { mockFieldsMeta } from '../mock-data/mock-fields-meta'
import { mockFieldsValues } from '../mock-data/mock-fields-values'
import { mockSectionsState } from '../mock-data/mock-sections-state'
import {
  getFieldsSectionsReq, getFieldsSectionsResp, goToNextStep, saveFieldsSectionResp
} from '../actions/application-form-action'
import { SFAction } from './../modules/client'
import {
  transformFieldsMeta, transformFieldsValues, transformSectionsMeta,
  transformSectionsState
} from '../transformers/application-form-transformer'


function* initDataSaga() {
  yield put(getFieldsSectionsReq())

  if (window.configSettings) {
    const { getSectionsMetadata, getSectionFieldsMetadata } = window.configSettings.remoteActions

    const [sections, fields] = yield all([
      call(SFAction, getSectionsMetadata),
      call(SFAction, getSectionFieldsMetadata, { buffer: true, escape: false })
    ])

    yield put(getFieldsSectionsResp({
      sections: transformSectionsMeta(sections.data),
      fields: transformFieldsMeta(fields.data, sections.data),
      sectionsState: transformSectionsState(sections.data),
      fieldsValues: transformFieldsValues(sections.data),
    }))
  } else {
    // load mocks
    yield call(delay, 600)
    yield put(getFieldsSectionsResp({
      sections: mockSectionsMeta,
      fields: mockFieldsMeta,
      sectionsState: mockSectionsState,
      fieldsValues: mockFieldsValues,
    }))
  }
}

function* saveAppFormSaga({ payload }) {
  yield call(delay, 600)
  yield put(saveFieldsSectionResp({}))

  yield put(goToNextStep(payload))
}


export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeEvery(APPLICATION_FORM.SAVE_FIELDS_SECTION_REQ, saveAppFormSaga)
  ])
}*/
