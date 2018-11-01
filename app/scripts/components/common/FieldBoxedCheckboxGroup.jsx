import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { contains, without, uniq, memoizeWith, pipe, map, identity } from 'ramda'
import { translate } from './../../i18n/i18n'
import { MULTIPLE_OPTIONS_SEPARATOR, sortBySequence } from '../../utils/application-form-utils'

import { isNilOrEmpty } from '../../utils/function-utils'

const CheckBoxItem = props => {
  const { onChange, index, label, value, description, onFocus, checked } = props
  return (
    <div className="field-checkbox-item">
      <div className="container-labels">
        <div className="label">
          {translate(label)}
        </div>
        <div className="description">
          {description && translate(description)}
        </div>
      </div>
      <div className="field" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="field-item">
          <Checkbox
            onChange={e => onChange(e.target.checked, label, index)}
            onFocus={onFocus}
            value={value}
            defaultChecked={checked}
          />
        </div>
      </div>
    </div>
  )
}

CheckBoxItem.propTypes = {
  onChange: PropTypes.func,
  index: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.any,
  description: PropTypes.string,
  onFocus: PropTypes.func,
  checked: PropTypes.bool
}

const fromValue = value => (isNilOrEmpty(value) ? [] : value.split(MULTIPLE_OPTIONS_SEPARATOR))
const toValue = valuesArr => (isNilOrEmpty(valuesArr) ? '' : valuesArr.join(MULTIPLE_OPTIONS_SEPARATOR))

const renderCheckboxItems = memoizeWith(
  identity,
  (_, listOfValues, defaultValuesArr, handleChange) => pipe(sortBySequence, map(({ name, value: optionValue, label, help, ...field }, index) => (
    <div key={optionValue}>
      <CheckBoxItem
        {...field}
        name={name}
        value={optionValue}
        label={label}
        help={help}
        onChange={handleChange(optionValue)}
        description={field.description}
        index={index}
        //onFocus={onFocus}
        checked={contains(optionValue, defaultValuesArr)}
      />
    </div>
  )))(listOfValues)
)

export const FieldBoxedCheckboxGroup = (props) => {
  const { label, listOfValues, description, onFocus, value, input: { name } } = props
  const defaultValuesArr = fromValue(value)

  const handleChange = optionKey => checked => {
    const valuesArr = checked ? uniq([...defaultValuesArr, optionKey]) : without(optionKey, defaultValuesArr)
    props.onChange(toValue(valuesArr))
  }
  console.log('BOXED_GROUP', props)
  return (
    <div className="field-boxed-checkbox-group">
      <label>
        {label && translate(label)}
      </label>
      <div className="description">
        {description && translate(description)}
      </div>
      { listOfValues && renderCheckboxItems(`${name}_${listOfValues.length}_${value}`, listOfValues, defaultValuesArr, handleChange) }
    </div>
  )
}

FieldBoxedCheckboxGroup.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  listOfValues: PropTypes.array,
  description: PropTypes.string,
  onFocus: PropTypes.func,
  value: PropTypes.any,
  input: PropTypes.object,
}
