import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { pipe, memoizeWith } from 'ramda'
import { translate } from './../../i18n/i18n'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'
import { isNilOrEmpty, mapIndexed } from '../../utils/function-utils'

const RadioGroup = Radio.Group

const options = memoizeWith(
  (fieldName, listOfValues) => `${fieldName}_${listOfValues.length}`,
  (_, listOfValues, onBlur, autoFocus) => pipe(sortBySequence, mapIndexed((radio, index) => (
    <div className="radio-container" key={index}>
      <div className="container-titles">
        <label>
          {translate(radio.label)}
        </label>
        <div className="radio-label2">
          {translate(radio.description)}
        </div>
      </div>
      <div className="radio-container-field">
        <div className="radio-input">
          <Radio
            {...radio}
            value={radio.value}
            autoFocus={index === 0 && autoFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
    </div>
  )))(listOfValues)
)

export const FieldBoxedRadioBtns = (props) => {
  const { listOfValues, onChange, value, autoFocus, label, description, onBlur, validationRules, input: { name } } = props
  return (
    <div className="field-boxed_radio_group">
      <div className="label">
        <label>
          {label && translate(label)} {getNotRequired(validationRules) && <Optional />}
        </label>
      </div>
      <div className="description">
        {description && translate(description)}
      </div>
      <RadioGroup onChange={(val) => onChange(val)} value={value} >
        {!isNilOrEmpty(listOfValues) && options(name, listOfValues, onBlur, autoFocus)}
      </RadioGroup>
    </div>
  )
}

FieldBoxedRadioBtns.propTypes = {
  listOfValues: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.any,
  autoFocus: PropTypes.any,
  label: PropTypes.string,
  description: PropTypes.string,
  onFocus: PropTypes.func,
  validationRules: PropTypes.array,
  input: PropTypes.object,

}
