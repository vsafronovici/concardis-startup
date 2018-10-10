import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'

const isTextualComponent = ({ type }) => type === FieldType.TEXT || type === FieldType.TEXT_BOLD

const createReducer = values => (acc, field) => {
  const { name, required, validation } = field
  // TODO
  //const name = field.name.split('.').join('_')

  const validate = !!validation
  const value = values[name]

  console.log('createReducer field=', { field, value })

  if (!required && !isTextualComponent(field)) {
    return acc
  }

  if (!required && !validate) {
    return acc
  }

  if (required && (value === undefined || value === '')) {
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
