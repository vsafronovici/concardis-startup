import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { contains, keys, findIndex, pluck } from 'ramda'
import { Field } from 'redux-form'
import { translate } from './../../i18n/i18n'
import { FieldBoxedCheckbox } from './FieldBoxedCheckbox'
import { optionValuesToString } from '../../utils/application-form-utils'

const CheckboxGroup = Checkbox.Group

const CheckBoxItem = props => {
  const { onChange, index, label, value, description, helpText } = props
  console.log('index', index)
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
      <div clsasName="field" style={{display: 'flex', alignItems: 'center'}}>
        <div className="field-item">
          <Checkbox onChange={e => onChange(e.target.checked, label, index)} />
        </div>
      </div>
    </div>
  )
}

export class FieldBoxedCheckboxGroup extends Component {

  state = {

  }

  handleChange = (optionKey) => (value) => {

    const newState = {
      ...this.state,
      [optionKey]: value
    }

    this.setState(newState)
    this.props.onChange(optionValuesToString(newState))
  }

  render() {
    const { label, fields, onChange, listOfValues, description } = this.props
    return (
      <div className="field-boxed-checkbox-group">
        <label>
          {label && translate(label)}
        </label>
        <div className="description">
          {description && translate(description)}
        </div>
        {listOfValues && listOfValues.map((field, index) => {
          return (
            <div key={index}>
              <CheckBoxItem  {...field} name={field.name} value={field.value} label={field.label} help={field.help} onChange={this.handleChange(field.value)} description={field.description} index={index}/>
            </div>
          )
        })}
      </div>
    )
  }
}
