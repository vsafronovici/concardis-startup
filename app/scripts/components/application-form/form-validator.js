import { pickBy, pluck, isEmpty, toPairs, contains } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { checkDate, isNilOrEmpty, propOrEmptyArr } from '../../utils/function-utils'
import { fieldsToShow } from '../../utils/application-form-utils'

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

  const { required, requiredError, validation, validationError, maximum } = rules

  const value = values[name]

  if (type === FieldType.DATE && !isNilOrEmpty(value) ) {
    if (!checkDate(value)) {
      return {
        ...errors,
        [name]: validationError
      }
    }
  }

  if (!required && (!isTextualComponent(field) || isNilOrEmpty(value))) {
    return errors
  }

  if (maximum && value && value.length > maximum) {
    return {
      ...errors,
      [name]: validationError
    }
  }

  if (required && isNilOrEmpty(value)) {
    return {
      ...errors,
      [name]: requiredError
    }
  }

  if (validation && !new RegExp(validation).test(value)) {
    return {
      ...errors,
      [name]: validationError
    }
  }

  return errors
}

export const Validator = chapter => values => {
  const fields = fieldsToShow(chapter, values)
  console.log('Validator', {chapter, values, fields})
  return fields.reduce(createReducer(values), {})
}
