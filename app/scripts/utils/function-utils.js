import { toPairs, values, isNil, equals, all, isEmpty } from 'ramda'
import { ConfiguratorPageStep } from './constants'
import { Step2 } from '../components/configurator/Step2';

export const objectToArray = (obj, prop) =>
  toPairs(obj).map(
    ([key, value]) => prop ? { [prop]: key, ...value } : value
  )

export const objectToArrayKeyValue = obj =>
  toPairs(obj).map(
    ([key, value]) => ({ key, value })
  )

  export const notEmptyValues = obj => {
      const detectedKeys = values(obj).map( key => {
        return !isNil(key) || (isNil(key) && isNaN(key) && !isEmpty(key))
      })
      const isTrue = equals(true)

    return !all(isTrue)(detectedKeys)
    
  }