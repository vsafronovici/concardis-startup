import { createNamespace } from '../utils/namespace-util'

export const APP = createNamespace('APP', {
  INIT_PAGE: undefined,
  LOAD_TRANSLATIONS_REQ: undefined,
  LOAD_TRANSLATIONS_RESP: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined
})

export const REACT_DEMO = createNamespace('REACT_DEMO', {
  SAY_HELLO_REQ: undefined,
  SAY_HELLO_RESP: undefined,
  ACCOUNT_REQ: undefined,
  ACCOUNT_RESP: undefined
})

export const APPLICATION_FORM = createNamespace('APPLICATION_FORM', {
  INIT_DATA: undefined,
  GET_FIELDS_SECTIONS_REQ: undefined,
  GET_FIELDS_SECTIONS_RESP: undefined,
  SAVE_FIELDS_SECTION_REQ: undefined,
  SAVE_FIELDS_SECTION_RESP: undefined,
  GO_TO_NEXT_STEP: undefined,
  EDIT_SECTION: undefined
})
