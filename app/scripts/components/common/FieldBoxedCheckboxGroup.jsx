import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { contains, keys } from 'ramda'
import { Field } from 'redux-form'
import { translate } from './../../i18n/i18n'
import { FieldBoxedCheckbox } from './FieldBoxedCheckbox'

const CheckboxGroup = Checkbox.Group

const CheckBoxItem = props => {
  const { onChange, index, label, value, description, helpText } = props

  return (
    <div className="field-checkbox-item">
      <div className="container-labels">
        <div className="label">
          {translate(label)}
        </div>
        <div className="description">
          {translate(description)}
        </div>
      </div>
      <div clsasName="field">
        <Checkbox onChange={e => onChange(e.target.value, label, index)} value={value}/>
      </div>
    </div>
  )
}

export class FieldBoxedCheckboxGroup extends Component {

  state = {
    values: ''
  }

  handleChange = (value, label, index) => {
    const { values } = this.state
    const changeValue = () => {
      if (values) {

      }
    }
    const fieldsValues = this.state.values
    this.props.onChange(fieldsValues)
    console.log('STATE = ', fieldsValues)
  }

  render() {
    const { label, fields, onChange, listOfValues, description } = this.props
    console.log('BOXED_CHECKBOX_GROUP', this.props)
    return (
      <div className="field-boxed-checkbox-group">
        <label>
          {translate(label)}
        </label>
        {listOfValues && listOfValues.map( (field, index) => {
          return (
            <div key={index}>
              <CheckBoxItem  {...field} name={field.name} value={field.value} label={field.label} help={field.help} onChange={this.handleChange} description={description}/>
            </div>
          )
        })}
      </div>
    )
  }
}
