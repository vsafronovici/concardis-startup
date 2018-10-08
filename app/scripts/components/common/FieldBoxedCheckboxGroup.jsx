import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'
import { Field } from 'redux-form'
import { FieldBoxedCheckbox } from './FieldBoxedCheckbox'

const CheckboxGroup = Checkbox.Group

const TestCheckBox = (props) => {
  const {value, label, name, help, input } = props
  return (
    <div>
      <div>
        {label}
      </div>
      <div>
        {help}
      </div>
      <div>
        <Checkbox value={value} onChange={event => input.onChange(event)}/>
      </div>
    </div>
  )
}

export const FieldBoxedCheckboxGroup = props => {
  const { label, fields, onChange } = props
  return (
    <div className="field-boxed-checkbox-group">
      <label>
        {translate(label)}
      </label>
        {fields.map( (field, index) => {
          return (
            <div key={index}>
              <Field component={FieldBoxedCheckbox} {...field} name={field.name} value={field.value} label={field.label} help={field.help} onChange={onChange}/>
            </div>
          )
        })}
    </div>
  )
}
