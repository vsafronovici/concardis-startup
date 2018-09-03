import { all, fork } from 'redux-saga/effects'

import app from './app-saga'
import applicationForm from './application-form-saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(applicationForm),
  ])
}
