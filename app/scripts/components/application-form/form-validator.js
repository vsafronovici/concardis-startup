import { pickBy, pluck, isEmpty, toPairs, contains } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { checkDate, isNilOrEmpty, propOrEmptyArr } from '../../utils/function-utils'

const isTextualComponent = ({ type }) => type === FieldType.TEXT || type === FieldType.TEXT_BOLD

const createReducer = values => (errors, field) => {
  console.log('Validator field=', { field })
  const { name,  type, validationRules } = field

  if (isNilOrEmpty(validationRules)) {
    return errors
  }

  const rules = validationRules[0]

  if (isNilOrEmpty(rules)) {
    return errors
  }


  const { required, maximum, regexp, requiredError, validationError } = rules

  const value = values[name]

  // Validate date
  if (type === FieldType.DATE && !isNilOrEmpty(value) ) {
    //console.log('Validator DATE=', { field, value, valid: checkDate(value) })
    if (!checkDate(value)) {
      //console.log('checkDate(value', !checkDate(value))
      console.log('NAME', name)
      console.log('ERRORRRR', {...errors, [name]: validationError})
      return {
        ...errors,
        [name]: validationError
      }
    }
  }

  if (!required && !isTextualComponent(field)) {
    return errors
  }


  if (maximum && value && value.length > maximum) {
    return {
      ...errors,
      [name]: validationError
    }
  }

  if (required && (value === undefined || value === '' || isEmpty(value))) {
    return {
      ...errors,
      [name]: requiredError
    }
  }


  if (regexp && !new RegExp(regexp).test(value)) {
    return {
      ...errors,
      [name]: 'Bad Regex'
    }
  }

  return errors
}

export const Validator = fields => values => {
  const reducer = createReducer(values)
  return fields.reduce(reducer, {})
}
