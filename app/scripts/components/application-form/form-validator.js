import { FieldType } from '../../utils/constants'
import { checkDate, isNilOrEmpty } from '../../utils/function-utils'
import { fieldsToShow } from '../../utils/application-form-utils'

const isTextualComponent = type => type === FieldType.TEXT || type === FieldType.TEXT_BOLD
const isCheckboxComponent = type => type === FieldType.CHECKBOX || type === FieldType.BOXED_CHECKBOX
const isFalse = value => value !== 'true'

const createReducer = values => (errors, field) => {
  const { name, type, validationRules } = field

  if (isNilOrEmpty(validationRules)) {
    return errors
  }

  const rules = validationRules[0]

  if (isNilOrEmpty(rules)) {
    return errors
  }

  const { required, requiredError, validation, validationError, maximum } = rules

  const value = values[name]

  if (type === FieldType.DATE && !isNilOrEmpty(value)) {
    if (!checkDate(value)) {
      return {
        ...errors,
        [name]: validationError
      }
    }
  }

  if (!required && (!isTextualComponent(type) || isNilOrEmpty(value))) {
    return errors
  }

  if (maximum && value && value.length > maximum) {
    return {
      ...errors,
      [name]: validationError
    }
  }

  if (required) {
    switch (true) {
      case (isCheckboxComponent(type) && isFalse(value)):
      case (!isCheckboxComponent(type) && isNilOrEmpty(value)):
        return {
          ...errors,
          [name]: requiredError
        }

      default:
        return errors

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
  return fields.reduce(createReducer(values), {})
}
