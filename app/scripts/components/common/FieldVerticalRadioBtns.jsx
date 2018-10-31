import React from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import { map, memoizeWith, pipe, identity } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'

const RadioGroup = Radio.Group

const radioStyle = {
  display: 'block',
  marginRight: '15px',
  marginBottom: '15px'
}

const options = memoizeWith(
  identity,
  (_, listOfValues, onFocus, autoFocus) => pipe(sortBySequence, map(({ value, label, ...rest }, index) => (
    <div className="bottom-container" key={value}>
      <Radio
        className="radio-required"
        value={value}
        style={radioStyle}
        autoFocus={index === 0 && autoFocus}
        onFocus={onFocus}
        {...rest}
      />
      <div className="bottom-label">{translate(label)}</div>
    </div>
  )))(listOfValues)
)

export const FieldVerticalRadioBtns = props => {
  const { value, onChange, label, listOfValues, autoFocus, required, helpText, onFocus, validationRules, input: { name } } = props
  return (
    <div className="field-vertical-radio">
      <div className="label-container">
        <label>
          {translate(label)} {getNotRequired(validationRules) && <Optional />}
        </label>
        <div>
          {helpText && <FieldTooltip title={helpText} />}
        </div>
      </div>
      <RadioGroup onChange={(val) => onChange(val)} value={value} required={required}>
        {listOfValues && options(`${name}_${listOfValues.length}_${value}`, listOfValues, onFocus, autoFocus)}
      </RadioGroup>
    </div>
  )
}

FieldVerticalRadioBtns.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  listOfValues: PropTypes.array,
  autoFocus: PropTypes.func,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  onFocus: PropTypes.func,
  validationRules: PropTypes.array,
  input: PropTypes.object
}
