import React from 'react'
import { Checkbox } from 'antd'
import { translate } from './../../i18n/i18n'

export const FieldBoxedCheckbox = props => {
  const { label, help, onChange, value } = props
  console.log('BoxedCheckbox', props)
  return(
    <div className="bxd-checkbox">
      <div className="bxd-checkbox-container-titles">
        <div className="bxd-checkbox-title">
          {translate(label)}
        </div>
        <div className="bxd-checkbox-description">
          {translate(help)}
        </div>
      </div>
      <div className="bxd-checkbox-field">
        <Checkbox checked={value} onChange={e => onChange(e.target.checked)}/>
      </div>
    </div>
  )
}
