import { createNamespace } from '../utils/namespace-util'

import translations from './mock-translations'
import configuratorStep1 from './configurator/mock-fields-step1'
import configuratorStep2 from './configurator/mock-fields-step2'
import packageCconfigureQuote from './configurator/mock-package-configurator'
import packageSaveQuote from './configurator/mock-save-quote'
import { ok as validateDiscountOk, error as validateDiscountErr } from './configurator/mock-validate-discount'
import { ok as applyDiscountOk, error as applyDiscountErr } from './configurator/mock-apply-discount'

import app_form_translations from './application-form/mock-app-form-translations'
import appForm_metadata from './application-form/mock-appForm-metadata'


export const MOCK_REMOTE_ACTIONS = createNamespace('MOCK_REMOTE_ACTIONS', {
  getDictionaryMetadata: undefined,
  getFieldsMetadata: undefined,
  getProducts: undefined,
  getDiscount: undefined,
  recalculatePrice: undefined,
  submitEmailGDPR: undefined,
  getQuote: undefined,
  saveQuote: undefined,
  validateDiscount: undefined,
  applyDiscount: undefined,

  getApplicationFormDictionaryMetadata: undefined,
  getAppFormMetadata: undefined,
})

export const mockResponse = action => {
  switch (action) {
    case MOCK_REMOTE_ACTIONS.getDictionaryMetadata:
      return translations

    case MOCK_REMOTE_ACTIONS.getFieldsMetadata:
      return configuratorStep1

    case MOCK_REMOTE_ACTIONS.getProducts:
      return configuratorStep2

    case MOCK_REMOTE_ACTIONS.getQuote:
      return packageCconfigureQuote

    case MOCK_REMOTE_ACTIONS.saveQuote:
      return packageSaveQuote

    case MOCK_REMOTE_ACTIONS.validateDiscount:
      return validateDiscountOk

    case MOCK_REMOTE_ACTIONS.applyDiscount:
      return applyDiscountOk

    case MOCK_REMOTE_ACTIONS.getApplicationFormDictionaryMetadata:
      return app_form_translations

    case MOCK_REMOTE_ACTIONS.getAppFormMetadata:
      return appForm_metadata

    default:
      return undefined
  }
}

export const mockVisualForceConfig = {
  remoteActions: {
    getDictionaryMetadata: MOCK_REMOTE_ACTIONS.getDictionaryMetadata,
    getFieldsMetadata: MOCK_REMOTE_ACTIONS.getFieldsMetadata,
    getProducts:  MOCK_REMOTE_ACTIONS.getProducts,
    getDiscount: undefined,
    recalculatePrice: undefined,
    submitEmailGDPR: undefined,
    getQuote: MOCK_REMOTE_ACTIONS.getQuote,
    saveQuote: MOCK_REMOTE_ACTIONS.saveQuote,
    validateDiscount: MOCK_REMOTE_ACTIONS.validateDiscount,
    applyDiscount: MOCK_REMOTE_ACTIONS.applyDiscount,

    getApplicationFormDictionaryMetadata: MOCK_REMOTE_ACTIONS.getApplicationFormDictionaryMetadata,
    getAppFormMetadata: MOCK_REMOTE_ACTIONS.getAppFormMetadata,
  },
  lang: 'en_US',
  XHRs: {
    TAD: {
      en_US: undefined,
      de: undefined
    }
  }
}

