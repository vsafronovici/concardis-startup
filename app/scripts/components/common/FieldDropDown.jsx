import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { identity, memoizeWith } from 'ramda'


import { translate } from '../../i18n/i18n'
import { FieldTooltip } from "./FieldTooltip";
import { getNotRequired } from '../../utils/application-form-utils'
import { Optional } from './Optional'

const Option = Select.Option

const style = {
  width: '200px'
}

// const options = memoizeWith(identity)

export const FieldDropDown = props => {
  const { label, onChange, value, listOfValues, helpText, required, onBlur, hint, validationRules, input: { name } } = props
  console.log('DROPDOWN', props)
  return (
    <div className="field-drop-down">
      <div className="flex-row label">
        <label>{translate(label)}</label> {getNotRequired(validationRules) && <Optional />} {helpText && <FieldTooltip title={helpText} />}
      </div>
      <Select
        onChange={event => onChange(event)}
        style={style}
        defaultValue={value}
        value={value}
        placeholder={hint && translate(hint)}
        required={required}
        onBlur={onBlur}
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
  onBlur: PropTypes.func,
  hint: PropTypes.string
}
