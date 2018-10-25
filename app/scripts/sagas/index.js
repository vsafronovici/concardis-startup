import { all, fork } from 'redux-saga/effects'

import app from './app-saga'
import configurator from './configurator-saga'
import packageConfigure from './package-configure-saga'
import applicationForm from './application-form-saga'
import errorHandler from './error-handler-saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(configurator),
    fork(packageConfigure),
    fork(applicationForm),
    fork(errorHandler)
  ])
}
