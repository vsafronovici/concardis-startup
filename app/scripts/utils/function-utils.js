import { toPairs, values, isNil, equals, all, isEmpty, propOr, curry, anyPass } from 'ramda'
import numeral from 'numeral'
import moment from 'moment'
import {DATE_FORMAT} from "./constants";

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

export const checkDate = (date) => moment(date, DATE_FORMAT, true).isValid()

