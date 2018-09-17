import numeral from 'numeral'
import { translate } from './../i18n/i18n'

export const translateToNumber = string => Number(translate(string))

export const valuesFormatter = value => {
  const number = numeral(value)
  const formattedNumber = number.format('0,0')
  return formattedNumber
}
