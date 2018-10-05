import { translate } from '../../i18n/i18n'

const createReducer = values => (acc, field) => {
  const { name, optional, validation } = field
  console.log('createReducer field=', field)
  if (optional || !validation) {
    return acc
  }

  const { regexp } = validation
  console.log('createReducer regexp=', regexp)

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
