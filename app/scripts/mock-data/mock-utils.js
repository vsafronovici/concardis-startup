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
import { ok as updateComercialsTAC_OK, error as updateComercialsTAC_ERR } from './application-form/mock-update-comercials'
import { ok as validateForm_OK, error as validateForm_ERR } from './application-form/mock-validate-form'
import { success as submitSuccess, error as submitError } from './application-form/mock-submit-form'


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
  updateCommercialsTC: undefined,
  validateForm: undefined,
  submitForm: undefined,
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

    case MOCK_REMOTE_ACTIONS.updateCommercialsTC:
      return updateComercialsTAC_OK

    case MOCK_REMOTE_ACTIONS.validateForm:
      return validateForm_OK

    case MOCK_REMOTE_ACTIONS.submitForm:
      return submitError

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
    updateCommercialsTC: MOCK_REMOTE_ACTIONS.updateCommercialsTC,
    validateForm: MOCK_REMOTE_ACTIONS.validateForm,
    submitForm: MOCK_REMOTE_ACTIONS.submitForm,
  },
  lang: 'en_US',
  XHRs: {
    TAD: {
      en_US: undefined,
      de: undefined
    }
  },
  resources: {
    TAD: {
      en_US: 'https://concardis--smejoindev--c.cs109.visual.force.com/resource/1538657587000/POS_Service',
      de: 'https://concardis--smejoindev--c.cs109.visual.force.com/resource/1538657587000/POS_Service'
    },
    imgs: {
      receipt: 'https://concardis--smejoindev--c.cs109.visual.force.com/resource/1538637322000/ReceiptPreview',
      product: 'https://concardis--smejoindev--c.cs109.visual.force.com/resource/1540198748000/ImageProduct?'
    }
  },
}

