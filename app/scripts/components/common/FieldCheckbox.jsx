import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from '../../i18n/i18n'

export const FieldCheckbox = props => {
  const { onChange, label, value } = props
  return (
    <div className="field-checkbox">
      <div className="field">
        <Checkbox checked={value} onChange={ value => onChange(value)}/>
      </div>
      <div className="label">
        {translate(label)}
      </div>
    </div>
  )
}
