import React from 'react'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'

export const FieldBoxedCheckbox = props => {
  const { label, help, onChange, value, optional, autoFocus } = props

  return (
    <div className="field-boxed-checkbox">
      <div className="container-titles">
        <label>
          {translate(label)} {optional && <span>{('optional')}</span>}
        </label>
        <div className="help">
          {translate(help)}
        </div>
      </div>
      <div className="field">
        <Checkbox checked={value} onChange={e => onChange(e.target.checked)} autoFocus={!!autoFocus} />
      </div>
    </div>
  )
}
