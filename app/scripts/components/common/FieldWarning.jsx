import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { translate } from '../../i18n/i18n'

export const FieldWarning = props => {
  const { label } = props
  return (
    <div className="warning-container">
      <div className="icon">
        <div className="icon-item" />
      </div>
      <div className="label">
        {translate(label)}
      </div>
    </div>
  )
}
