import { toPairs, values, isNil, equals, all, isEmpty, propOr, curry, anyPass } from 'ramda'
import numeral from 'numeral'
import moment from 'moment'

export const isNilOrEmpty = anyPass([isNil, isEmpty])
export const propOrEmptyObj = propOr({})
export const propOrEmptyArr = propOr([])


export const objectToArray = (obj, prop) =>
  toPairs(obj).map(
    ([key, value]) => (prop ? { [prop]: key, ...value } : value)
  )

export const objectToArrayKeyValue = obj =>
  toPairs(obj).map(
    ([key, value]) => ({ key, value })
  )

export const notEmptyValues = obj => {
  const detectedKeys = values(obj).map(key => !isNil(key) || (isNil(key) && isNaN(key) && !isEmpty(key)))
  const isTrue = equals(true)

  return !all(isTrue)(detectedKeys)
}

// TODO remove use contains() instead
export const checkCurrentValue = (items, currentValue) => {
  const checkedCurrentValue = items.indexOf(currentValue)

  return checkedCurrentValue
}

export const format = (text, ...vals) =>
  vals.reduce((acc, obj, idx) => acc.replace(`{${idx}}`, obj), text)

export const delayResponse = resp =>
  new Promise(resolve =>
    setTimeout(() => resolve({ data: resp }), 1000)
  )

export const formatNumber = (formatter, value) => {
  const number = numeral(value)
  const formattedNumber = number.format(formatter)
  return formattedNumber
}

export const generalFormatNumber = curry(formatNumber)('00.00')

export const checkDate = (date) => {
  // const parseDate = moment('11/11/2011', 'DD-MM-YYYY')
  // console.log('parseDate', parseDate.format('DD/MM/YYYY'))
  const FORMAT = 'DD/MM/YYYY'
  const dateValue  = moment('22-12-2011', FORMAT).format()
  const nowValue = moment(FORMAT).format()

  return moment(date, FORMAT, true).isValid()
  //  return moment(date, 'DD-MM-YYYY', true).isValid()
  /*if ((nowValue > dateValue) && moment('22-12-2011', FORMAT).isValid()) {
    console.log('Your date is valid')
    return moment(date, 'DD-MM-YYYY').isValid()
  } else {
    console.log('date is invalid')
    return false
  }*/
}

 export const valuesToString = values => {
  const arr = []
  for (let keyOpt in values) {
    if (values[keyOpt]) {
      arr.push(keyOpt)
    }
  }
    const string = arr.join(';')
  return string
}
