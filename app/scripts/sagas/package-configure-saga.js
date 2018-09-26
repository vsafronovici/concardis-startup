import { all, call, put, takeLatest } from 'redux-saga/effects'

import { PACKAGE_CONFIGURE } from '../actions/types'
import { getMetaPackageReq, getMetaPackageRes } from '../actions/package-configure-action'
import { SFAction } from './../modules/client'
// import { step1FieldsSelector } from '../selectors/configurator-selector'

function* initDataSaga() {
  const action = {
    actionName: window.configSettings.remoteActions.getQuote,
  }
  const response = yield call(SFAction, action, { parseToJSON: true })
  yield put(getMetaPackageRes(response.data))

}

export default function* root() {
  yield all([
    takeLatest(PACKAGE_CONFIGURE.INIT_DATA, initDataSaga)
  ])
}
