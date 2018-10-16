import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { translate } from '../../i18n/i18n'
import { FieldTooltip } from "./FieldTooltip";

const Option = Select.Option

const style = {
  width: '200px'
}

export const FieldDropDown = props => {
  const { label, onChange, value, listOfValues, helpText, required, onFocus, hint } = props
  //console.log('DROPDOWN', props)
  return (
    <div className="field-drop-down">
      <div className="flex-row label">
        <label>{translate(label)}</label> {helpText && <FieldTooltip title={helpText} />}
      </div>
      <Select
        onChange={event => onChange(event)}
        style={style}
        defaultValue={value}
        value={value}
        placeholder={hint && translate(hint)}
        required={required}
        onFocus={onFocus}
      >
        {listOfValues && listOfValues.map(({ value, label , ...rest}, index) => {
          return (
            <Option key={index} value={value} className="item">
              {translate(label)}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

FieldDropDown.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  listOfValues: PropTypes.array,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  hint: PropTypes.string
}
