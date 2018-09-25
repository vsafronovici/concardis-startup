import { all, fork } from 'redux-saga/effects'

import app from './app-saga'
import configurator from './configurator-saga'
import packageConfigure from './package-configure-saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(configurator),
    fork(packageConfigure),
  ])
}
