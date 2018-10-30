import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { map, pipe, memoizeWith, identity } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'
import { isNilOrEmpty } from '../../utils/function-utils'

const RadioGroup = Radio.Group

const options = memoizeWith(
  identity,
  (_, listOfValues, onFocus) => pipe(sortBySequence, map(({ value, label }) => (
    <Radio
      key={value}
      value={value}
      className="item radio-required"
      onFocus={onFocus}
    >
      {translate(label)}
    </Radio>
  )))(listOfValues)
)

export const FieldHorizontalRadioBtns = props => {
  const { label, onChange, value, required, listOfValues, helpText, onFocus, validationRules, input: { name } } = props

  return (
    <div className="field-horizontal-radio-btns">
      <div className="flex-row label">
        <label>{translate(label)}</label>{getNotRequired(validationRules) && <Optional />}{helpText && <FieldTooltip label={helpText} />}
      </div>
      <RadioGroup onChange={event => onChange(event)} value={value} className="flex-row" required={required}>
        {!isNilOrEmpty(listOfValues) && options(`${name}_${listOfValues.length}_${value}`, listOfValues, onFocus)}
      </RadioGroup>
    </div>
  )
}

FieldHorizontalRadioBtns.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  required: PropTypes.bool,
  listOfValues: PropTypes.array,
  helpText: PropTypes.string,
  onFocus: PropTypes.func,
  validationRules: PropTypes.array,
  input: PropTypes.any
}
