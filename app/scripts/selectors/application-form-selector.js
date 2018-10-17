import { createSelector } from 'reselect'
import { all, compose, isNil, not, prop, propEq, pickBy, keys, values, pluck, contains } from 'ramda'
import { getFormValues as getReduxFormValues } from 'redux-form'

import { SectionStatusType } from './../utils/constants'
import { isNilOrEmpty } from '../utils/function-utils'
import { checkSectionCondition, DYNAMIC_FORM_PREFIX, createField } from '../utils/application-form-utils'

const isNotNil = compose(not, isNil)
const pickSectionByStatus = status => pickBy(
  (val, key) => val.status === status
)

export const applicationFormSelector = prop('application-form')
export const applicationFormSubmittingSelector = compose(prop('submitting'), applicationFormSelector)
export const chaptersSelector = compose(prop('chapters'), applicationFormSelector)
export const currentSelector = compose(prop('current'), applicationFormSelector)
export const tacSelector = compose(prop('TAC'), applicationFormSelector)
export const nrOfChaptersSelector = compose(prop('length'), chaptersSelector)

export const finishedSelector = createSelector(
  chaptersSelector,
  currentSelector,
  (chapters = [], current) => {
    console.log('finishedSelector', {chapters, current})
    return current > chapters.length - 1
  }
)
export const finishedSelector = compose(prop('finished'), applicationFormSelector)
export const finalSubmitSelector = compose(prop('finalSubmit'), applicationFormSelector)
export const submittingSelector = compose(prop('submitting'), finalSubmitSelector)
export const statusSelector = compose(prop('status'), finalSubmitSelector)



// TODO remove
// export const currentIndexSectionSelector = createSelector(
//   chaptersSelector,
//   (sections = []) => {
//     const states = sections && (pluck('status')(sections))
//     const states2 = pickSectionByStatus(SectionStatusType.IN_PROGRESS)(sections)
//     const index2 = sections.findIndex( section => section.status === states2)
//     console.log('index2', index2)
//     const index = states && contains(SectionStatusType.IN_PROGRESS, states)
//       ? states.findIndex( status => status === SectionStatusType.IN_PROGRESS )
//       : states.findIndex( status => status === SectionStatusType.WAITING )
//     //console.log('currentIndex', index)
//     return index
//   }
// )

export const currentChapterSelector = createSelector(
  chaptersSelector,
  currentSelector,
  (chapters = [], current) => {
    console.log(chapters[current])
    return chapters[current]
  }
)

/*export const currentSectionsSelector = createSelector(
  chaptersSelector,
  sectionsStateSelector,
  (sections, sectionsState) => {
    const section = pickSectionByStatus(SectionStatusType.IN_PROGRESS)(sectionsState)
    //console.log('currenSectionsSelector section =', section)
    if (!section) {
      console.log('-1111')
      return -1
    }
    //console.log('x',sections.findIndex(s => s.id === keys(section)[0]))
    console.log('section', section[keys(section)[0]])
    console.log('sections', sections)

    return sections.findIndex(s => s.id === section[keys(section)[0]].id)
  }
)*/

export const fieldsSelector = createSelector(
  currentChapterSelector,
  (chapter = {}) => {
    if (!chapter.sections) {
      return []
    }

    return chapter.sections.reduce((acc, section) => {
      const { fields } = section

      if (isNilOrEmpty(fields)) {
        return acc
      }

      acc.push(...fields)

      return acc
    }, [])
  }
)

export const getFormValuesSelector = state => {
  const section = currentChapterSelector(state)
  const formId = `${DYNAMIC_FORM_PREFIX}${section.sequence}`
  const result = getReduxFormValues(formId)(state)
  console.log('getFormValuesSelector', {formId, result})
  return result
}
