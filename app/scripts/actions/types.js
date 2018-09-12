import { createNamespace } from '../utils/namespace-util'

export const APP = createNamespace('APP', {
  INIT_PAGE: undefined,
  CHANGE_LANGUAGE: undefined,
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
  EDIT_SECTION: undefined,
  SUBMIT_ALL_REQ: undefined,
  SUBMIT_ALL_RESP: undefined
})

export const CONFIGURATOR = createNamespace('CONFIGURATOR', {
  INIT_DATA: undefined,
  INIT_DATA3: undefined,
  GET_META_STEP1_REQ: undefined,
  GET_META_STEP1_RES: undefined,
  CHANGE_FIELD_VALUE: undefined,
  GO_TO_STEP: undefined,
  GET_META_STEP2_REQ: undefined,
  GET_META_STEP2_RES: undefined,
  RECALCULATE_QUOTE: undefined,
})
