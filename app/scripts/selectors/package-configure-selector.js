import { all, compose, prop, toPairs } from 'ramda'
import { createSelector } from 'reselect'

export const rootSelector = prop('packageConfigure')
export const quoteSelector = compose(prop('quote'), rootSelector)
export const extraFieldsSelector = compose(prop('extraFields'), rootSelector)
export const quantitySelector = compose(prop('quantity'), rootSelector)
export const discountCodeSelector = compose(prop('discountCode'), rootSelector)
export const totalPriceWithDiscountSelector = compose(prop('totalPriceWithDiscount'), rootSelector)

export const applyDiscountPayloadSelector = createSelector(
  quoteSelector,
  quantitySelector,
  extraFieldsSelector,
  discountCodeSelector,
  ({ quoteId, quoteItemId }, quantity, extraFields, discountCode) => ({
    quoteId,
    discountCode,
    quoteLines: [
      { quoteItemId, quantity },
      ...toPairs(extraFields).map(
        ([key, value]) => ({ quoteItemId: key, quantity: value })
      )
    ]
  })
)

