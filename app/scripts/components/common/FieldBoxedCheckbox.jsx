import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'
import { toBoolean } from '../../utils/application-form-utils'

export const FieldBoxedCheckbox = props => {
  const { label, onChange, value, optional, autoFocus, description } = props

  const checked = toBoolean(value)

  return (
    <div className="field-boxed-checkbox">
      <div className="container-titles">
        <label>
          {translate(label)} {optional && <span>optional</span>}
        </label>
        <div className="help">
          {description && translate(description)}
        </div>
      </div>
      <div className="field">
        <Checkbox
          checked={checked}
          value={checked}
          onChange={e => onChange(e.target.checked.toString())}
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
  description: PropTypes.string,
  autoFocus: PropTypes.any
}
