import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { CONFIGURATOR } from '../actions/types'
import { mockSectionsMeta } from '../mock-data/mock-sections-meta'
import { mockFieldsMeta } from '../mock-data/mock-fields-meta'
import { mockFieldsValues } from '../mock-data/mock-fields-values'
import { mockSectionsState } from '../mock-data/mock-sections-state'
import {
  getFieldsSectionsReq, getFieldsSectionsResp, goToNextStep, saveFieldsSectionReq,
  saveFieldsSectionResp
} from '../actions/application-form-action'
import { SFAction } from './../modules/client'
import {
  transformFieldsMeta, transformFieldsValues, transformSectionsMeta,
  transformSectionsState
} from '../transformers/application-form-transformer'


function* initDataSaga() {
  // TODO
}



export default function* root() {
  yield all([
    takeLatest(CONFIGURATOR.INIT_DATA, initDataSaga),
  ])
}
