import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import {pipe, map, compose, memoizeWith} from 'ramda'
import { translate } from './../../i18n/i18n'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'

const RadioGroup = Radio.Group

const options = memoizeWith(
  (fieldName, listOfValues) => `${fieldName}_${listOfValues.length}`,
  (_, listOfValues, onFocus, autoFocus) => pipe(sortBySequence, map(({ label, description, value, ...rest }, index) => {
    return (
      <div className="radio-container"  key={index}>
        <div className="container-titles">
          <label>
            {translate(label)}
          </label>
          <div className="radio-label2">
            {translate(description)}
          </div>
        </div>
        <div className="radio-container-field">
          <div className="radio-input">
            <Radio
              {...rest}
              value={value}
              autoFocus={index === 0 && autoFocus}
              onFocus={onFocus}
            />
          </div>
        </div>
      </div>
    )
  }))(listOfValues)
)

export const FieldBoxedRadioBtns = (props) => {
  const { listOfValues, onChange, value, autoFocus, label, description, onFocus, validationRules, input: { name } } = props
  console.log('BOXED_RADIO', props)
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
      <RadioGroup onChange={(value) => onChange(value)} value={value} >
        {listOfValues && options(name, listOfValues, onFocus, autoFocus)}
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
  onFocus: PropTypes.func
}
