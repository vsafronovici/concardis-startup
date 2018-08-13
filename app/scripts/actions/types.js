import { createNamespace } from '../utils/namespace-util'

export const APP = createNamespace('APP', {
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined
})

export const REACT_DEMO = createNamespace('REACT_DEMO', {
  SAY_HELLO_REQ: undefined,
  SAY_HELLO_RESP: undefined,
  ACCOUNT_REQ: undefined,
  ACCOUNT_RESP: undefined
})
