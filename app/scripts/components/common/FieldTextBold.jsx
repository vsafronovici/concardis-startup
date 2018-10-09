import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'

export const FieldTextBold = props => {
  const { title, onChange, helpBold, placeholder, value } = props

  return (
    <div className="field-text-bold">
      <label>{title}</label>
      <div className="help">
        {translate(helpBold)}
      </div>
      <div className="field">
        <label data-b="B">
          <Input className="input-bold" maxLength={12} value={value} placholder={placeholder} onChange={event => onChange(event)}/>
        </label>
      </div>
    </div>
  )
}
