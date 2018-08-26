import { compose, isNil, findIndex, not, prop, propEq } from 'ramda'
import { SectionStatusType } from '../utils/constants'

export const applicationFormSelector = prop('application-form')
export const applicationFormSubmittingSelector = compose(prop('submitting'), applicationFormSelector)
export const sectionsSelector =  compose(prop('sections'), applicationFormSelector)
export const applicationFormLoadedSelector =  compose(not, isNil, sectionsSelector)
export const currentSectionsSelector =  compose(findIndex(propEq('status', SectionStatusType.IN_PROGRESS)), sectionsSelector)

