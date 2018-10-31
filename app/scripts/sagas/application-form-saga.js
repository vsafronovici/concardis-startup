import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { findLastIndex, propEq } from 'ramda'
import { APPLICATION_FORM } from '../actions/types'
import { apiFetchSaga } from './app-saga'
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
  saveReq,
  saveRes,
  getReviewQuote,
  saveAndCloseReq,
  saveAndCloseRes
} from '../actions/application-form-action'
import {
  chaptersSelector,
  nrOfChaptersSelector,
  reviewModeSelector,
  tacSelector,
  readyForSubmitSelector,
} from '../selectors/application-form-selector'
import { buildSaveAndCloseRequest, buildSaveRequest } from '../utils/application-form-utils'
import { EXTERNAL_LINKS, RESPONSE_STATUS, SectionStatusType } from '../utils/constants'

function* getAppFormMetadataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getAppFormMetadata
  }
  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(getFormMetaRes(response.data))
}

function* initDataSaga() {
  yield call(getAppFormMetadataSaga)
  const chapters = yield select(chaptersSelector)

  const statusesCount = chapters.length - 1
  const finishedStatusIndex = findLastIndex(propEq('status', SectionStatusType.FINISHED))(chapters)

  switch (true) {
    case finishedStatusIndex < statusesCount:
      return yield put(goToSection(finishedStatusIndex + 1))

    case finishedStatusIndex === statusesCount:
      return yield put(goToReviewMode())

    default: return yield put(goToSection(0))
  }
}

function* agreeTACSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.updateCommercialsTC,
    args: true
  }
  yield put(updateCommercialsTCReq(true))

  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
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

  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(saveRes(response.data))


  if (response.data.status === RESPONSE_STATUS.OK) {
    const reviewMode = yield select(reviewModeSelector)
    const nrOfChapters = yield select(nrOfChaptersSelector)

    yield call(getAppFormMetadataSaga)

    callback(response.data)

    if (reviewMode) {
      yield put(goToSection(-1))
    } else if (currentChapterIdx < nrOfChapters - 1) {
      yield put(goToNextSection(currentChapterIdx + 1))
    } else {
      yield put(goToReviewMode())
    }
  } else {
    callback(response.data)
  }
}

function* saveAndCloseSaga({ payload: { chapter, formValues, formErrors  } }) {

  const req = buildSaveAndCloseRequest({ chapter, formValues, formErrors })
  yield put(saveAndCloseReq(req))

  const action = {
    actionName: window.configSettings.remoteActions.saveAndClose,
    args: JSON.stringify(req)
  }

  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(saveAndCloseRes(response.data))

  window.location.href = EXTERNAL_LINKS.PACKAGE_CONFIGURE
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

  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(submitRes(response.data))
}

function* getReviewQuoteSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getQuote
  }
  const response = yield call(apiFetchSaga, action, { parseToJSON: true })
  yield put(getReviewQuote(response.data))
}

export default function* root() {
  yield all([
    takeLatest(APPLICATION_FORM.INIT_DATA, initDataSaga),
    takeLatest(APPLICATION_FORM.AGREE_TAC, agreeTACSaga),
    takeLatest(APPLICATION_FORM.SAVE, saveSaga),
    takeLatest(APPLICATION_FORM.SAVE_AND_CLOSE, saveAndCloseSaga),
    takeLatest(APPLICATION_FORM.SUBMIT, submitSaga),
    takeLatest(APPLICATION_FORM.SUBMIT_REQ, submitReqSaga),
    takeLatest(APPLICATION_FORM.CONFIRM, confirmTAC),
    takeLatest(APPLICATION_FORM.GO_TO_REVIEW_MODE, getReviewQuoteSaga),

  ])
}
