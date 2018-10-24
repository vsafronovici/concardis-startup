import { all, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'
import { APPLICATION_FORM } from '../actions/types'
import { SFAction } from '../modules/client'
import {
  updateCommercialsTCReq,
  updateCommercialsTCRes,
  goToNextSection,
  getFormMetaRes,
  goToReviewMode,
  goToSection,
  agreeTAC,
  submitRes,
  submitReq,
  openTACModal,
  setRequestForReady,
  saveReq,
  saveRes,
} from '../actions/application-form-action'
import {
  chaptersSelector,
  nrOfChaptersSelector,
  reviewModeSelector,
  tacSelector,
  readyForSubmitSelector,
} from '../selectors/application-form-selector'
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
    const reviewMode = yield select(reviewModeSelector)
    const nrOfChapters = yield select(nrOfChaptersSelector)

    yield call(getAppFormMetadataSaga)

    if (reviewMode) {
      yield put(goToSection(-1))
    } else {
      if (currentChapterIdx < nrOfChapters - 1) {
        yield put(goToNextSection(currentChapterIdx + 1))
      } else {
        yield put(goToReviewMode())
      }
    }
  }
}

function* submitSaga() {
  const isReadyForSubmit = yield select(readyForSubmitSelector)
  const { agree } = yield select(tacSelector)
  
  if (agree && isReadyForSubmit) {
    yield put(submitReq())
  } else {
    yield put(openTACModal())
  }
}

function* confirmTAC() {
  const isReadyForSubmit = yield select(readyForSubmitSelector)
  
  if (isReadyForSubmit) {
    yield put(submitReq())
  } else {
    yield put(agreeTAC())
  }
}

function* submitReqSaga() {
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
    takeLatest(APPLICATION_FORM.SUBMIT, submitSaga),
    takeLatest(APPLICATION_FORM.SUBMIT_REQ, submitReqSaga),
    takeLatest(APPLICATION_FORM.CONFIRM, confirmTAC),
  ])
}
