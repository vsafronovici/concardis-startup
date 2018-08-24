import { all, fork } from 'redux-saga/effects'

import github from './github'
import user from './user'
import app from './app-saga'
import applicationForm from './application-form-saga'
import reactDemo from './react-demo-saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(github),
    fork(user),
    fork(app),
    fork(applicationForm),
    fork(reactDemo)
  ])
}
