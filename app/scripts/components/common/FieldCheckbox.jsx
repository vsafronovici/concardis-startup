import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { translate } from '../../i18n/i18n'
import { toBoolean } from '../../utils/application-form-utils'

export const FieldCheckbox = props => {
  const { onChange, label, value } = props
  const checked = toBoolean(value)

  return (
    <div className="field-checkbox">
      <div className="field">
        <Checkbox checked={checked} value={checked} onChange={e => onChange(e.target.checked.toString())} />
      </div>
      <div className="label">
        {translate(label)}
      </div>
    </div>
  )
}

FieldCheckbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.any
}
