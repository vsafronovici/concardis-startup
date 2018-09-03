import { all, call, put, takeEvery } from 'redux-saga/effects'

import { REACT_DEMO } from './../actions/types'
import { SFAction, SFRemoteObject } from "../modules/client";


function* sayHello({ payload }) {
  const response = yield call(SFAction, payload.action)
  yield put({
    type: REACT_DEMO.SAY_HELLO_RESP,
    payload: response
  })
}

function* getAccount({ payload: { modelName, criteria } }) {
  const response = yield call(SFRemoteObject, modelName, criteria)
  yield put({
    type: REACT_DEMO.ACCOUNT_RESP,
    payload: response
  })
}

export default function* root() {
  yield all([
    takeEvery(REACT_DEMO.SAY_HELLO_REQ, sayHello),
    takeEvery(REACT_DEMO.ACCOUNT_REQ, getAccount)
  ])
}
