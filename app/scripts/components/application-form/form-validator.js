import { pickBy, pluck, isEmpty, toPairs, contains } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { checkDate, isNilOrEmpty, propOrEmptyArr } from '../../utils/function-utils'

const isTextualComponent = ({ type }) => type === FieldType.TEXT || type === FieldType.TEXT_BOLD

const createReducer = values => (acc, field) => {
  console.log('Validator field=', { field })
  const { name,  type, validationRules } = field

  const value = values[name]

  //const { required, maximum } = validationRules[0]

  if (type === FieldType.DATE && !isNilOrEmpty(value) ) {
    console.log('Validator DATE=', { field, value, valid: checkDate(value) })
    if (!checkDate(value)) {
      return {
        ...acc,
        [name]: `Invalid date format`
      }
    }
  }


  if (!validationRules || isNilOrEmpty(validationRules)) {
    return acc
  }

  const validate = !!validationRules[0]

  const rules = validationRules[0]

  const required = pluck('required')(validationRules)
  const maximum = pluck('maximum')(validationRules)

  // TODO
  //const name = field.name.split('.').join('_')

  if (!required && !isTextualComponent(field)) {
    return acc
  }

  if (checkDate(value)) {
    return acc
  }

  if (!required && !validate) {
    return acc
  }

 if (validate) {
   if (maximum[0] && value && (value.length > maximum[0])) {
     return {
       ...acc,
       [name]: `More then ${maximum[0]}`
     }
   }
 }

  if (required && (value === undefined || value === '' || isEmpty(value))) {
    return {
      ...acc,
      [name]: 'Requir'
    }
  }


  if (validate) {
    const { regexp } = pluck('regexp')(validationRules)

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
