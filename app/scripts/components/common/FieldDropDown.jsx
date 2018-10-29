import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { map, memoizeWith, pipe } from 'ramda'

import { translate } from '../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired, sortBySequence } from '../../utils/application-form-utils'
import { Optional } from './Optional'
import { isNilOrEmpty } from '../../utils/function-utils'

const { Option } = Select

const style = {
  width: '200px'
}

const options = memoizeWith(
  (fieldName, listOfValues) => `${fieldName}_${listOfValues.length}`,
  (_, listOfValues) => pipe(sortBySequence, map(({ value, label }) => (
    <Option key={value} value={value} className="item">
      {translate(label)}
    </Option>
  )))(listOfValues)
)

export const FieldDropDown = props => {
  const { label, onChange, value, listOfValues, helpText, required, onBlur, hint, validationRules, input: { name } } = props
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
        {!isNilOrEmpty(listOfValues) && options(name, listOfValues)}
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
