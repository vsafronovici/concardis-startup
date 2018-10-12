import { toPairs, values, isNil, equals, all, isEmpty, propOr, curry, anyPass } from 'ramda'
import numeral from 'numeral'
import moment from 'moment'

export const DYNAMIC_FORM_PREFIX = 'dynamicForm_'
export const MULTIPLE_OPTIONS_SEPARATOR = ';'

export const CONDITIONAL_OPERATORS = {
  EQUAL: '=',
  INCLUDES: '<=',
  AND: 'AND',
}

const { EQUAL, INCLUDES, AND } = CONDITIONAL_OPERATORS


export const optionValuesToString = values => {
  const arr = []
  for (let keyOpt in values) {
    if (values[keyOpt]) {
      arr.push(keyOpt)
    }
  }
  const string = arr.join(MULTIPLE_OPTIONS_SEPARATOR)
  return string
}

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
