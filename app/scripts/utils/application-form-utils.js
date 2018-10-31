import { pluck, prop, sortBy, compose, filter, not } from 'ramda'
import { isNilOrEmpty, isNotNilOrEmpty } from './function-utils'
import { SectionStatusType } from './constants'

export const DYNAMIC_FORM_PREFIX = 'dynamicForm_'
export const MULTIPLE_OPTIONS_SEPARATOR = ';'

export const CONDITIONAL_OPERATORS = {
  EQUAL: '=',
  INCLUDES: '<=',
  AND: 'AND',
}

const { EQUAL, INCLUDES, AND } = CONDITIONAL_OPERATORS

export const checkSectionCondition = (conditions, values) => conditions.split(AND).reduce((acc, condition) => {
  if (condition.includes(INCLUDES)) {
    const [cFieldName, cValue] = condition.trim().split(INCLUDES)
    const value = values[cFieldName.trim()]
    return acc && value && value.split(MULTIPLE_OPTIONS_SEPARATOR).includes(cValue)
  }
  const [cFieldName, cValue] = condition.trim().split(EQUAL)
  const value = values[cFieldName.trim()]
  return acc && value && value.toString() === cValue.trim()
}, true)

export const createInitialValues = chapter => chapter.sections.reduce((acc, section) => {
  if (isNilOrEmpty(section.serverValues)) {
    return acc
  }

  return section.serverValues.reduce((acc2, serverValue) => ({ ...acc2, [serverValue.fieldCode]: serverValue.fieldValue }), acc)
}, {})

export const fieldsToShow = (chapter, formValues = {}) => {
  if (isNilOrEmpty(chapter.sections)) {
    return []
  }

  return chapter.sections.reduce((acc, section) => {
    const { condition, fields } = section

    if (isNilOrEmpty(fields)) {
      return acc
    }

    if (isNilOrEmpty(condition) || checkSectionCondition(condition, formValues)) {
      acc.push(...fields)
    }

    return acc
  }, [])
}

const buildServerValues = (section, formValues) => {
  const { condition, fields } = section

  if (isNilOrEmpty(fields) || isNilOrEmpty(formValues) || isNotNilOrEmpty(condition) && !checkSectionCondition(condition, formValues)) {
    return []
  }

  return fields.reduce((acc, { name }) => {
    const value = formValues[name]
    if (value) {
      acc.push({ fieldCode: name, fieldValue: value })
    }
    return acc
  }, [])

}

const hasNoFormErrors = formErrors => serverValue => !formErrors[serverValue.fieldCode]

export const buildSaveRequest = ({ formValues, chapters, currentChapterIdx }) => {
  const chapter = chapters[currentChapterIdx]
  chapter.status = SectionStatusType.IN_PROGRESS

  chapter.sections.forEach(section => {
    section.serverValues = buildServerValues(section, formValues)
  })

  return chapters
}

export const buildSaveAndCloseRequest = ({ chapter, formValues, formErrors }) => {
  console.log('buildSaveAndCloseRequest', { chapter, formValues, formErrors })
  chapter.status = SectionStatusType.IN_PROGRESS

  chapter.sections.forEach(section => {
    section.serverValues = compose(filter(hasNoFormErrors(formErrors)), buildServerValues)(section, formValues)
  })

  return chapter
}


export const getNotRequired = validationRules =>
  isNilOrEmpty(validationRules) || !pluck('required', validationRules)[0]

export const sortBySequence = sortBy(prop('sequence'))

export const toBoolean = value => value && value.toString() === 'true'
