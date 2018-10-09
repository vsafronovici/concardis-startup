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

export const tacSelector = compose(prop('TAC'), applicationFormSelector)

// TODO remove
export const currentIndexSectionSelector = createSelector(
  sectionsSelector,
  (sections = []) => {
    const states = sections && (pluck('status')(sections))
    console.log('states', states)
    const index = states && contains(SectionStatusType.IN_PROGRESS, states)
      ? states.findIndex( status => status === SectionStatusType.IN_PROGRESS )
      : states.findIndex( status => status === SectionStatusType.WAITING )
    console.log('currentIndex', index)
    return index
  }
)
export const currentSectionSelector = createSelector(
  sectionsSelector,
  currentIndexSectionSelector,
  (sections = [], index) => {
    console.log('CurrentSection', sections[index])
    return sections[index]
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
