import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { map, pipe, filter } from 'ramda'

import { translate } from '../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'
import { isNilOrEmpty, isNotNilOrEmpty } from '../../utils/function-utils'

const { Option } = Select

const style = {
  width: '200px'
}

const filterByControlledPicklist = formValues => option => {
  const { controllingPicklist, controllingPicklistValue } = option
  if (isNilOrEmpty(controllingPicklist) || isNilOrEmpty(controllingPicklistValue)) {
    return true
  }

  return formValues[controllingPicklist] === controllingPicklistValue
}

const options = (listOfValues, formValues = {}) => pipe(
  sortBySequence,
  filter(filterByControlledPicklist(formValues)),
  map(({ value, label }) => (
    <Option key={value} value={value} className="item">
      {translate(label)}
    </Option>
  ))
)(listOfValues)

const handleChange = ({ onChange, controlledPicklist, changeFormValue }) => {
  return event => {
    if (isNotNilOrEmpty(controlledPicklist)) {
      controlledPicklist.split(';').forEach(fieldName => changeFormValue(fieldName, null))
    }
    onChange(event)
  }
}

export const FieldDropDown = props => {
  const { label, onChange, value, listOfValues, helpText, required, onBlur, hint, validationRules, formValues, controlledPicklist, changeFormValue } = props
  return (
    <div className="field-drop-down">
      <div className="flex-row label">
        <label>{translate(label)}</label> {getNotRequired(validationRules) && <Optional />} {helpText && <FieldTooltip title={helpText} />}
      </div>
      <Select
        onChange={handleChange({ onChange, controlledPicklist, changeFormValue })}
        style={style}
        defaultValue={value}
        value={value}
        placeholder={hint && translate(hint)}
        required={required}
        onBlur={onBlur}
      >
        {isNotNilOrEmpty(listOfValues) && options(listOfValues, formValues)}
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
  hint: PropTypes.string,
  validationRules: PropTypes.array,
  input: PropTypes.object
}
