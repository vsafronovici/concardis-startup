import { toPairs, values, isNil, equals, all, isEmpty, propOr, curry, anyPass, pluck } from 'ramda'
import numeral from 'numeral'
import moment from 'moment'
import { isNilOrEmpty, objectToArrayKeyValue } from './function-utils'
import {SectionStatusType, SubmitStatus} from './constants'

export const DYNAMIC_FORM_PREFIX = 'dynamicForm_'
export const MULTIPLE_OPTIONS_SEPARATOR = ';'

export const CONDITIONAL_OPERATORS = {
  EQUAL: '=',
  INCLUDES: '<=',
  AND: 'AND',
}

const { EQUAL, INCLUDES, AND } = CONDITIONAL_OPERATORS

export const checkSectionCondition = (conditions, values) => {
  console.log('checkSectionCondition', {conditions, values})
  return conditions.split(AND).reduce((acc, condition) => {
    if (condition.includes(INCLUDES)) {
      const [cFieldName, cValue] = condition.trim().split(INCLUDES)
      const value = values[cFieldName.trim()]
      console.log('checkSectionCondition includes', {condition, cFieldName, cValue, value, result: (acc && value && value.split(MULTIPLE_OPTIONS_SEPARATOR).includes(cValue))})
      return acc && value && value.split(MULTIPLE_OPTIONS_SEPARATOR).includes(cValue)
    } else {
      const [cFieldName, cValue] = condition.trim().split(EQUAL)
      const value = values[cFieldName.trim()]
      console.log('checkSectionCondition equal', {condition, cFieldName, cValue, value, result: (acc && value && value.toString() === cValue.trim())})
      return acc && value && value.toString() === cValue.trim()
    }
  }, true)
}

export const createInitialValues = chapter => {
  return chapter.sections.reduce((acc, section) => {
    if (isNilOrEmpty(section.serverValues)) {
      return acc
    }

    return section.serverValues.reduce((acc2, serverValue) => {
      return { ...acc2, [serverValue.fieldCode]: serverValue.fieldValue }
    }, acc)
  }, {})
}

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

export const buildSaveRequest = ({ formValues, chapters, currentChapterIdx }) => {
  console.log('buildSaveRequest', { formValues, chapters, currentChapterIdx })

  const chapter = chapters[currentChapterIdx]
  chapter.status = SectionStatusType.IN_PROGRESS

  chapter.sections.forEach(section => {
    const { condition, fields } = section

    if (isNilOrEmpty(fields)) {
      return
    }

    const serverValues = isNilOrEmpty(formValues) || !isNilOrEmpty(condition) && !checkSectionCondition(condition, formValues)
      ? []
      : fields.reduce((acc, { name }) => {
      const value = formValues[name]
      if (value) {
        acc.push({ fieldCode: name, fieldValue: value })
      }
      return acc
    }, [])

    section.serverValues = serverValues
  })

  return chapters
}

export const getNotRequired = validationRules =>
  isNilOrEmpty(validationRules) || !pluck('required', validationRules)[0]

