import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { APPLICATION_FORM } from '../actions/types'
import {getFormMetaRes} from './../actions/application-form-action'
import { SFAction } from '../modules/client'
import { updateCommercialsTCReq, updateCommercialsTCRes, saveReq, saveRes, goToNextSection, submitRes } from '../actions/application-form-action'
import { chaptersSelector } from '../selectors/application-form-selector'
import { buildSaveRequest } from '../utils/application-form-utils'
import { RESPONSE_STATUS } from '../utils/constants'

function* getAppFormMetadataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))
}


function* initDataSaga() {
  yield call(getAppFormMetadataSaga)
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
    yield call(getAppFormMetadataSaga)
    yield put(goToNextSection(currentChapterIdx + 1))
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
