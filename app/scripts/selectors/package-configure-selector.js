import { all, compose, prop, toPairs } from 'ramda'
import { createSelector } from 'reselect'
import { propOrEmptyObj } from '../utils/function-utils'

export const rootSelector = prop('packageConfigure')
export const quoteSelector = compose(prop('quote'), rootSelector)
export const extraFieldsSelector = compose(prop('extraFields'), rootSelector)
export const quantitySelector = compose(prop('quantity'), rootSelector)
export const extraItemsSelector = compose(prop('extraItems'), quoteSelector)
export const discountCodeSelector = compose(prop('discountCode'), rootSelector)
export const totalPriceWithDiscountSelector = compose(prop('totalPriceWithDiscount'), rootSelector)
export const applyDiscountSelector = compose(propOrEmptyObj('applyDiscount'), rootSelector)
export const rootRouterSelector = compose(prop('root'), rootSelector)

export const extraFieldsTotalSelector = createSelector(
    quoteSelector,
    extraFieldsSelector,
    (quote, extraFields) => {
     const sum = quote.extraItems.reduce((total, item) => {
        const price = item.price.value
        const qty = extraFields[item.quoteItemId]
        const totalSum = total + price * qty
        console.log(totalSum)
        return totalSum
      }, 0)
    return sum}
  )

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

