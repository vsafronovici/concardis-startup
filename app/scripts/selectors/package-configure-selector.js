import { compose, prop, toPairs } from 'ramda'
import { createSelector } from 'reselect'
import { propOrEmptyObj } from '../utils/function-utils'

export const rootSelector = prop('packageConfigure')
export const submittingSelector = compose(prop('submitting'), rootSelector)
export const quoteSelector = compose(prop('quote'), rootSelector)
export const extraFieldsSelector = compose(prop('extraFields'), rootSelector)
export const quantitySelector = compose(prop('quantity'), rootSelector)
export const extraItemsSelector = compose(prop('extraItems'), quoteSelector)
export const discountCodeSelector = compose(prop('discountCode'), rootSelector)
export const totalPriceWithDiscountSelector = compose(prop('totalPriceWithDiscount'), rootSelector)
export const validDiscountCodeSelector = compose(prop('validDiscountCode'), rootSelector)
export const applyDiscountSelector = compose(propOrEmptyObj('applyDiscount'), rootSelector)
export const routeSelector = compose(prop('route'), rootSelector)

export const totalCostPerMonthSelector = createSelector(
  quoteSelector,
  quantitySelector,
  (quote, quantity) => quote.unitPrice.valuePerMonth * quantity
)


export const extraFieldsTotalSelector = createSelector(
    quoteSelector,
    extraFieldsSelector,
    (quote, extraFields) => {
     const totalSum = quote.extraItems.reduce((total, item) => {
        const price = item.price.value
        const qty = extraFields[item.quoteItemId]
        const sum = total + price * qty
        return sum
      }, 0)
  console.log(totalSum)
    return totalSum
    }
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

