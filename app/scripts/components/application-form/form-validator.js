import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'

const isTextualComponent = ({ type }) => type === FieldType.TEXT || type === FieldType.TEXT_BOLD

const createReducer = values => (acc, field) => {
  const { name, optional, validation } = field
  const validate = !!validation
  const value = values[name]

  console.log('createReducer field=', { field, value })

  if (optional && !isTextualComponent(field)) {
    return acc
  }

  if (optional && !validate) {
    return acc
  }

  if (!optional && (value === undefined || value === '')) {
    return {
      ...acc,
      [name]: 'Requir'
    }
  }

  if (validate) {
    const { regexp } = validation

    if (regexp && !new RegExp(regexp).test(value)) {
      return {
        ...acc,
        [name]: 'Bad Regex'
      }
    }
  }

  return acc
}

export const Validator = fields => values => {
  const reducer = createReducer(values)
  return fields.reduce(reducer, {})
}
