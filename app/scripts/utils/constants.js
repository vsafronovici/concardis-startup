import { createEnum } from './namespace-util'

export const PageContainers = {
  LANDING_PAGE: 'react-landing-page',
  APPLICATION_FORM_PAGE: 'application-form-page'
}

export const FieldType = createEnum({
  TEXT: undefined,
  TEXT_WITH_SEARCH: undefined,
  DROPBOX: undefined
})

