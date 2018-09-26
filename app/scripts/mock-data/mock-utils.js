import { createNamespace } from '../utils/namespace-util'

import translations from './mock-translations'
import configuratorStep1 from './configurator/mock-fields-step1'
import configuratorStep2 from './configurator/mock-fields-step2'
import packageCconfigureQuote from './configurator/mock-package-configurator'
import packageSaveQuote from './configurator/mock-save-quote'

export const MOCK_REMOTE_ACTIONS = createNamespace('MOCK_REMOTE_ACTIONS', {
  getDictionaryMetadata: undefined,
  getFieldsMetadata: undefined,
  getProducts: undefined,
  getDiscount: undefined,
  recalculatePrice: undefined,
  submitEmailGDPR: undefined,
  getQuote: undefined,
  saveQuote: undefined,
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
  },
  lang: 'en_US',
  XHRs: {
    TAD: {
      en_US: undefined,
      de: undefined
    }
  }
}

