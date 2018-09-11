import { all, compose, path, prop, map, pick } from 'ramda'
import { createSelector } from "reselect"
import { ConfiguratorPageStep } from '../utils/constants'

export const configuratorSelector = prop('configurator')
export const step1MetaSelector = compose(prop('step1MetaData'), configuratorSelector)
export const step2MetaSelector = compose(prop('step2MetaData'), configuratorSelector)
export const step3MetaSelector = compose(prop('step3MetaData'), configuratorSelector)
export const fieldsSelector = compose(prop('fields'), configuratorSelector)
export const step1FieldsSelector = compose(prop(ConfiguratorPageStep.STEP1), fieldsSelector)
export const step2FieldsSelector = compose(prop(ConfiguratorPageStep.STEP2), fieldsSelector)
export const cardOptionValueSelector = compose(prop('cardOption'), step2FieldsSelector)
export const stepSelector = compose(prop('step'), configuratorSelector)
export const productsSelector = compose(map(prop(['prod'])), step2MetaSelector)

export const step2SummarySelector = createSelector(
  step1MetaSelector,
  step1FieldsSelector,
  (step1Meta, step1Fields) => {
    return step1Meta.map(meta => ({
      name: meta.name,
      title: meta.title,
      value: step1Fields[meta.name] || '56,000'
    }))
  }
)

export const selectedProductSelector = createSelector(
  step2MetaSelector,
  cardOptionValueSelector,
  (step2Meta, cardOption) => {
    return step2Meta.find(meta => meta.prod.Id === cardOption)
  }
)


