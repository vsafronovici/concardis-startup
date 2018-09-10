import { toPairs } from 'ramda'
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
