import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { PACKAGE_CONFIGURE } from '../actions/types'
import { getMetaPackageReq, getMetaPackageRes } from '../actions/package-configure-action'
import { SFAction } from './../modules/client'
import { NodeProcess } from '../utils/constants'
// import { step1FieldsSelector } from '../selectors/configurator-selector'

function* initDataSaga() {
  if (process.env.NODE_ENV === NodeProcess.DEV) {
    // load mocks
    const mock = require('./../mock-data/configurator/mock-package-configurator')
    yield call(delay, 600)
    yield put(getMetaPackageReq())
    yield put(getMetaPackageRes(mock.default))
  } else {
    const action = {
      actionName: window.configSettings.remoteActions.getFieldsMetadata,
      args: ''
    }
    const response = yield call(SFAction, action, { parseToJSON: true })
    yield put(getMetaPackageRes(response.data))
  }
}

export default function* root() {
  yield all([
    takeLatest(PACKAGE_CONFIGURE.INIT_DATA, initDataSaga)
  ])
}
