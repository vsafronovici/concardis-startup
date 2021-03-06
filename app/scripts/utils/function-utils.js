
import { toPairs, values, isNil, equals, all, isEmpty, propOr } from 'ramda'

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

export const checkCurrentValue = (items, currentValue) => {
  const checkedCurrentValue = items.indexOf(currentValue)

  return checkedCurrentValue
}
