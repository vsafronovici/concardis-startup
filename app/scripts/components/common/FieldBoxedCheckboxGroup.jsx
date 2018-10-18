import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { contains } from 'ramda'
import { translate } from './../../i18n/i18n'
import { optionValuesToString } from '../../utils/application-form-utils'
import { MULTIPLE_OPTIONS_SEPARATOR } from '../../utils/application-form-utils'

const CheckBoxItem = props => {
  const { onChange, index, label, value, description, onFocus, checked } = props
  console.log('CHECKBOX checked', checked)
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
      <div className="field" style={{display: 'flex', alignItems: 'center'}}>
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
  onFocus: PropTypes.func
}

export class FieldBoxedCheckboxGroup extends Component {

  handleChange = optionKey => value => {
    const values = this.props.value.split(MULTIPLE_OPTIONS_SEPARATOR)
    if (value && !contains(optionKey, values)) {
      values.push(optionKey)
    }
    if (!value && contains(optionKey, values)) {
      const indexValue = values.indexOf(optionKey)
      values.splice(indexValue, 1)
    }
    const string = (values.length && values.join(MULTIPLE_OPTIONS_SEPARATOR)) || ''

    this.props.onChange(string)
  }

  render() {
    const { label, fields, listOfValues, description, onFocus, value } = this.props
    const defaultValues = value.split(';')

    return (
      <div className="field-boxed-checkbox-group">
        <label>
          {label && translate(label)}
        </label>
        <div className="description">
          {description && translate(description)}
        </div>
        {listOfValues && listOfValues.map(({ name, value, label, help, ...field }, index) => {
          return (
            <div key={index}>
              <CheckBoxItem
                {...field}
                name={name}
                value={value}
                label={label}
                help={help}
                onChange={this.handleChange(value)}
                description={field.description}
                index={index}
                onFocus={onFocus}
                checked={contains(value, defaultValues)}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

FieldBoxedCheckboxGroup.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  listOfValues: PropTypes.array,
  description: PropTypes.string,
  onFocus: PropTypes.func
}
