import { toPairs, values, isNil, equals, all, isEmpty, propOr, curry, anyPass } from 'ramda'
import numeral from 'numeral'
import moment from 'moment'

export const DYNAMIC_FORM_PREFIX = 'dynamicForm_'

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
      const [field, value] = condition.trim().split(INCLUDES)

    } else {
      const [cFieldName, cValue] = condition.trim().split(EQUAL)
      const value = values[cFieldName.trim()]
      console.log('checkSectionCondition', {condition, cFieldName, cValue, value})
      console.log('checkSectionCondition result=', acc && value && value.toString() === cValue.trim())
      return acc && value && value.toString() === cValue.trim()
    }
  }, true)

}
