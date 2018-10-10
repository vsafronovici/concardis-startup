import React from 'react'
import PropTypes from 'prop-types'
import { translate } from './../../i18n/i18n'

export const FieldTitle = props => {
  const { title, subtitle } = props

  return (
    <div className="field-title">
      <div className="title">
        {translate(title)}
      </div>
      <div className="subtitle">
        {translate(subtitle)}
      </div>
    </div>
  )
}
