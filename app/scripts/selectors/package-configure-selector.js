import { compose, prop } from 'ramda'
import { createSelector } from 'reselect'

export const rootSelector = prop('packageConfigure')
export const quoteSelector = compose(prop('quote'), rootSelector)
export const extraFieldsSelector = compose(prop('extraFields'), rootSelector)
export const quantitySelector = compose(prop('quantity'), rootSelector)
