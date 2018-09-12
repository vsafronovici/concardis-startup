import { propOr, toPairs } from 'ramda'

export const propOrEmptyObj = propOr({})
export const propOrEmptyArr = propOr([])

export const objectToArray = (obj, prop) =>
  toPairs(obj).map(
    ([key, value]) => prop ? { [prop]: key, ...value } : value
  )

export const objectToArrayKeyValue = obj =>
  toPairs(obj).map(
    ([key, value]) => ({ key, value })
  )
