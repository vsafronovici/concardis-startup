import { createSelector } from 'reselect'
import { all, compose, isNil, not, prop, propEq, pickBy, keys, values, pluck, contains } from 'ramda'
import { SectionStatusType } from './../utils/constants'

const isNotNil = compose(not, isNil)
const pickSectionByStatus = status => pickBy(
  (val, key) => val.status === status
)

export const applicationFormSelector = prop('application-form')
export const applicationFormSubmittingSelector = compose(prop('submitting'), applicationFormSelector)
export const sectionsSelector = compose(prop('sections'), applicationFormSelector)
export const sectionsStateSelector = compose(prop('sectionsState'), applicationFormSelector)
export const currentSelector = compose(prop('current'), applicationFormSelector)
export const tacSelector = compose(prop('TAC'), applicationFormSelector)

// TODO remove
// export const currentIndexSectionSelector = createSelector(
//   sectionsSelector,
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
export const currentIndexSelector = state => 0

export const currentSectionSelector = createSelector(
  sectionsSelector,
  currentSelector,
  (sections = [], current) => {
    console.log(sections[current])
    return sections[current]
  }
)

/*export const currentSectionsSelector = createSelector(
  sectionsSelector,
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
  currentSectionSelector,
  (chapter = {}) => {
    if (!chapter.sections) {
      return []
    }

    return chapter.sections.reduce((acc, section) => {
      acc.push(...section.fields)
      return acc
    }, [])
  }
)

