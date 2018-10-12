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
      const [field, value] = condition.trim().split(EQUAL)

    } else {
      const [field, value] = condition.trim().split(EQUAL)
      console.log('checkSectionCondition', {condition, field, value})
      console.log('checkSectionCondition result=', acc && values[field.trim()] === value.trim())
      return acc && values[field.trim()] === value.trim()
    }
  }, true)

}
