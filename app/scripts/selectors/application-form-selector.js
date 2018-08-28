import { createSelector } from 'reselect'
import { all, compose, isNil, findIndex, not, prop, propEq, pickBy, toPairs, keys } from 'ramda'
import { SectionStatusType } from '../utils/constants'

const isNotNil = compose(not, isNil)
const pickSectionByStatus = status => pickBy(
  (val, key) => val.status === status
)


export const applicationFormSelector = prop('application-form')
export const applicationFormSubmittingSelector = compose(prop('submitting'), applicationFormSelector)
export const sectionsSelector = compose(prop('sections'), applicationFormSelector)
export const fieldsSelector = compose(prop('fields'), applicationFormSelector)
export const sectionsStateSelector = compose(prop('sectionsState'), applicationFormSelector)
export const fieldsValuesSelector = compose(prop('fieldsValues'), applicationFormSelector)

export const sectionStateSelector = (state, props) => {
  console.log('sectionStateSelector', props)
  return prop(props.section.id, sectionsStateSelector(state))
}
export const sectionFieldsSelector = (state, props) => prop(props.section.id, fieldsSelector(state))
export const sectionFieldsValuesSelector = (state, props) => prop(props.section.id, fieldsValuesSelector(state))


export const applicationFormLoadedSelector = createSelector(
  sectionsSelector,
  fieldsSelector,
  sectionsStateSelector,
  fieldsValuesSelector,
  (sections, fields, sectionsState, fieldsValues) => {
    return all(isNotNil, [sections, fields, sectionsState, fieldsValues])
  }
)

export const currentSectionsSelector = createSelector(
  sectionsSelector,
  sectionsStateSelector,
  (sections, sectionsState) => {
    const section = pickSectionByStatus(SectionStatusType.IN_PROGRESS)(sectionsState)
    if (!section) {
      return -1
    }

    return sections.findIndex(s => s.id === keys(section)[0])
  }
)

