import { all, fork } from 'redux-saga/effects'

import app from './app-saga'
import configurator from './configurator-saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(app),
    fork(configurator),
  ])
}
