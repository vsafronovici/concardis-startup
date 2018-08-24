import { createEnum } from './namespace-util'

export const PageContainers = {
  LANDING_PAGE: 'react-landing-page',
  APPLICATION_FORM_PAGE: 'application-form-page'
}

export const FieldType = {
  TEXT: 'text',
  DROPDOWN: 'drop_down',
  TEXT_WITH_SEARCH: undefined,
}

export const SectionStatusType = createEnum({
  FINISHED: undefined,
  IN_PROGRESS: undefined,
  WAITING: undefined
})
