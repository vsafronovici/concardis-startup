import { all, takeLatest } from 'redux-saga/effects'
import { Modal } from 'antd'
import { APP } from '../actions/types'
import { API_ERROR_TITLE } from '../utils/constants'

function* errorHandler({ payload }) {
  Modal.error({
    title: API_ERROR_TITLE,
    content: 'Unexpected System Error',
    className: 'api-error-confirm'
  })

  yield true
}

export default function* root() {
  yield all([
    takeLatest(APP.API_FETCH_FAILED, errorHandler),
  ])
}
