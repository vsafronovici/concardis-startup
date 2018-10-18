import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga/utils'
import { APPLICATION_FORM } from '../actions/types'
import {getFormMetaRes, submitResError} from './../actions/application-form-action'
import { SFAction } from '../modules/client'
import { updateCommercialsTCReq, updateCommercialsTCRes, saveReq, saveRes, goToNextSection, submitRes } from '../actions/application-form-action'
import { applyDiscountPayloadSelector } from '../selectors/package-configure-selector'
import { chaptersSelector } from '../selectors/application-form-selector'
import { buildSaveRequest, submitDelay } from '../utils/application-form-utils'
import {RESPONSE_STATUS, SubmitStatus} from '../utils/constants'

import {SubmissionError} from 'redux-form'

function* getAppFormMetadataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))
}


function* initDataSaga() {
  yield call(getAppFormMetadataSaga)

  /*const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))*/
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

function* saveSaga({ payload: { formValues, currentChapterIdx, callback } }) {

  const chapters = yield select(chaptersSelector)

  const req = buildSaveRequest({ formValues, chapters, currentChapterIdx })
  yield put(saveReq(req))

  const action = {
    actionName: window.configSettings.remoteActions.validateForm,
    args: JSON.stringify(req)
  }

  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(saveRes(response.data))

  callback(response.data)

  if (response.data.status === RESPONSE_STATUS.OK) {
    yield put(goToNextSection(currentChapterIdx + 1))
    yield call(getAppFormMetadataSaga)
  }

}

function* submitSaga() {

  const action = {
    actionName: window.configSettings.remoteActions.submitForm
  }
  const response = yield call(SFAction, action, { parseToJSON: true })

  yield put(submitRes(response.data))

}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeLatest(APPLICATION_FORM.AGREE_TAC, agreeTACSaga),
    takeLatest(APPLICATION_FORM.SAVE, saveSaga),
    takeLatest(APPLICATION_FORM.SUBMIT_REQ, submitSaga),
  ])
}
