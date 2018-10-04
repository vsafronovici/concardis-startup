import { translate } from '../../i18n/i18n'

const createReducer = values => (acc, field) => {
  const { name, optional, validation } = field
  console.log('createReducer field=', field)
  if (optional && !validation.validate) {
    return acc
  }

  const { regexp } = validation

  if (!optional && (!values[name] || values[name].trim() === '')) {
    return {
      ...acc,
      [name]: 'Requir'
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
