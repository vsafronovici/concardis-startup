import { compose, prop } from 'ramda'
import { createSelector } from 'reselect'

export const rootSelector = prop('packageConfigure')
export const quoteSelector = compose(prop('quote'), rootSelector)
