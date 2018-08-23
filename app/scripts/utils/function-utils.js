import { toPairs } from 'ramda'

export const objectToArray = (obj, prop) =>
  toPairs(obj).map(
    ([key, value]) => prop ? { [prop]: key, ...value } : value
  )
