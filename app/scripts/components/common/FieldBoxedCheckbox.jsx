import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'

export const FieldBoxedCheckbox = props => {
  const { label, onChange, value, optional, input, autoFocus, description } = props
  const handleChange = input ? input.onChange : onChange

  return (
    <div className="field-boxed-checkbox">
      <div className="container-titles">
        <label>
          {translate(label)} {optional && <span>{('optional')}</span>}
        </label>
        <div className="help">
          {description && translate(description)}
        </div>
      </div>
      <div className="field">
        <Checkbox
          checked={value}
          value={value}
          onChange={e => handleChange(e.target.checked)}
          autoFocus={!!autoFocus}
        />
      </div>
    </div>
  )
}

FieldBoxedCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  optional: PropTypes.any,
  input: PropTypes.object,
  onFocus: PropTypes.func,
  description: PropTypes.string
}
