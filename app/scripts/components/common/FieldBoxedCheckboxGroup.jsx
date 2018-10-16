import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'
import { optionValuesToString } from '../../utils/application-form-utils'

const CheckBoxItem = props => {
  const { onChange, index, label, value, description, onFocus } = props

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

  handleChange = (optionKey) => (value) => {
    const newState = {
      ...this.state,
      [optionKey]: value
    }
    this.setState(newState)
    this.props.onChange(optionValuesToString(newState))
  }

  render() {
    const { label, fields, listOfValues, description, onFocus } = this.props
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
