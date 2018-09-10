import { all, compose, path, prop, map, pick } from 'ramda'
import { createSelector } from "reselect"

export const configuratorSelector = prop('configurator')
export const step1MetaSelector = compose(prop('step1MetaData'), configuratorSelector)
export const step2MetaSelector = compose(prop('step2MetaData'), configuratorSelector)
export const step3MetaSelector = compose(prop('step3MetaData'), configuratorSelector)
export const fieldsSelector = compose(prop('fields'), configuratorSelector)
export const cardOptionValueSelector = compose(prop('cardOption'), fieldsSelector)
export const stepSelector = compose(prop('step'), configuratorSelector)
export const productsSelector = compose(map(prop(['prod'])), step2MetaSelector)

export const step2SummarySelector = createSelector(
  step1MetaSelector,
  fieldsSelector,
  (step1Meta, fields) => {
    return step1Meta.map(meta => ({
      name: meta.name,
      title: meta.title,
      value: fields[name] || '56,000'
    }))
  }
)



