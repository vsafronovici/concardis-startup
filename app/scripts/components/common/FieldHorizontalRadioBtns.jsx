import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { translate } from '../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'

const RadioGroup = Radio.Group

export const FieldHorizontalRadioBtns = props => {
  const { label, onChange, value, required, listOfValues, helpText, onFocus } = props

  return (
    <div className="field-horizontal-radio-btns">
      <div className="flex-row label">
        <label>{translate(label)}</label> {helpText && <FieldTooltip label={helpText}/>}
      </div>
      <RadioGroup onChange={event => onChange(event)} value={value} className="flex-row" required={required}>
        {listOfValues && listOfValues.map((radio, index) => {
          return (
            <Radio
              key={index}
              value={radio.value}
              className="item"
              onFocus={onFocus}
            >
              {translate(radio.label)}
            </Radio>
          )
        })}
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
  onFocus: PropTypes.func
}
