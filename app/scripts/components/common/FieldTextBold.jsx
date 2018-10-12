import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'

export const FieldTextBold = props => {
  const { label, onChange, helpText, placeholder, value, hint, description } = props
  console.log('BOLD_TEXT', props)
  return (
    <div className="field-text-bold">
      <div className="container-labels">
        <label>{label}</label> {helpText && <div><FieldTooltip title={helpText}/></div>}
      </div>
      <div className="help">
        {description && translate(description)}
      </div>
      <div className="field">
        <label data-b="B">
          <Input className="input-bold" maxLength={12} value={value} placholder={hint} onChange={event => onChange(event)}/>
        </label>
      </div>
    </div>
  )
}
