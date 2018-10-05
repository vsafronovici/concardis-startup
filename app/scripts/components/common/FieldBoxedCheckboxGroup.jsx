import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'
import {FieldBoxedCheckbox} from "./FieldBoxedCheckbox";

const CheckboxGroup = Checkbox.Group

export const FieldBoxedCheckboxGroup = props => {
  const { label, fields, onChange }
  return (
    <div className="field-boxed-checkbox-group">
      <label>
        {translate(label)}
      </label>
      <CheckboxGroup >
        {options.map( (field, index) => {
          return (
            <div>
              <FieldBoxedCheckbox/>
            </div>
          )
        })}
      </CheckboxGroup>
    </div>
  )
}
