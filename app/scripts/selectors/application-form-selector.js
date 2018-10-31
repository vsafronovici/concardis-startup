import { createSelector } from 'reselect'
import { compose, prop } from 'ramda'
import { isNilOrEmpty } from '../utils/function-utils'

export const applicationFormSelector = prop('application-form')
export const applicationFormSubmittingSelector = compose(prop('submitting'), applicationFormSelector)
export const chaptersSelector = compose(prop('chapters'), applicationFormSelector)
export const currentSelector = compose(prop('current'), applicationFormSelector)
export const tacSelector = compose(prop('TAC'), applicationFormSelector)
export const readyForSubmitSelector = compose(prop('readyForSubmit'), applicationFormSelector)
export const nrOfChaptersSelector = compose(prop('length'), chaptersSelector)
export const reviewModeSelector = compose(prop('reviewMode'), applicationFormSelector)
export const finalSubmitSelector = compose(prop('finalSubmit'), applicationFormSelector)
export const quoteReviewSelector = compose(prop('quote'), applicationFormSelector)


export const currentChapterSelector = createSelector(
  chaptersSelector,
  currentSelector,
  (chapters = [], current) => chapters[current]
)

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

