import { translate } from '../../i18n/i18n'

const createReducer = values => (acc, field) => {
  const { name, validation } = field
  if (!validation.validate) {
    return acc
  }

  const { required, requiredError, regexp } = validation

  if (required && (!values[name] || values[name].trim() === '')) {
    return {
      ...acc,
      [name]: translate(requiredError)
    }
  }

  if (regexp && !new RegExp(regexp).test(values[name])) {
    return {
      ...acc,
      [name]: 'Bad Regex'
    }
  }

  return acc
}

export const Validator = fields => values => {
  const reducer = createReducer(values)
  return fields.reduce(reducer, {})
}
